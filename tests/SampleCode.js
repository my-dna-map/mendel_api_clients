'use strict'

const moment = require('moment')
const iso3166 = require('iso-3166')

/*******
 * Módulo de gestión de códigos de muestras de myDNAmap
 * Formato de codificación:
 *
 * Dígitos  Significado
 * 2        Proveedor del tubo de muestra
 * 18       Dependiente de proveedor
 */

const LENGTH_PROVIDER_CODE                    = 18   // Max Provider length
const LENGTH_MYDNAMAP_LONG_CODE               = 20
const LENGTH_MYDNAMAP_FULL_HUMAN_READY_CODE   = 42
const LENGTH_MYDNAMAP_FULL_NUMERIC_CODE       = 43
const LENGTH_MYDNAMAP_FULL_NUMERIC_SHORT_CODE = 38

const SAMPLE_PROVIDER_UNKNOWN                 = ''
const PROVIDERS = {
    SAMPLE_PROVIDER_DNAGENOTEK: '01',
    SAMPLE_PROVIDER_MYDNAMAP: '99'
}

const PROVIDERS_DATA = {
    '01': {
        name: 'DNAGenotek',
        length: 14
    },
    '99': {
        name: 'myDNAmap',
        length: 14
    },
}

/*****
 * De los 18 dígitos de proveedor, esta función trata de averiguar de que proveedor es la muestra
 * @param code Código de barras leido por el scanner
 */
function discoverSampleCodeType(code) {
    // Proveedor DNAGenotek
    // 14 dígitos
    //  * 1 - Código del kit (siempre 5 === Oragene DNA)
    //  * 3 - Formato (siempre 600)
    //  * 6 - Year, Month, Lot-Nº (YYMMLL)
    //  * 4 - Serial nº
    //
    // Proveedor myDNAmap
    // 14 dígitos
    //  * 8 - Fecha (YYYYMMDD)
    //  * 1 - Reservado (siempre 9)
    //  * 1 - Pais (1 == España, 2 == Argentina)
    //  * 1 - Tipo de muestra (1 == saliva, 2 == sangre)
    //  * 3 - Lote (LLL) [para mismo día & país)

    if (code.length !== 14) {
        return SAMPLE_PROVIDER_UNKNOWN
    }

    if (
        code.substr(0,1) === '5'&&
        code.substr(1,3) === '600'
    ) {
        return PROVIDERS.SAMPLE_PROVIDER_DNAGENOTEK
    }

    if (
        code.substr(0,2) === '20' &&  // Año 20xx
        code.substr(8,1) === '9' &&
        (code.substr(9,1) === '1' || code.substr(9,1) === '2') &&   // País
        (code.substr(10,1) === '1' || code.substr(10,1) === '2')    // Tipo de muestra
    ) {
        return PROVIDERS.SAMPLE_PROVIDER_MYDNAMAP
    }
}

/*****
 * Generar código completo mDm
 * @param code Código de barras leido por el scanner
 */
function generateMDMLongCode(provider, code) {
    let fullCode = provider
    for (let i = 0; i < LENGTH_PROVIDER_CODE - code.length; i++) {
        fullCode += '0'    // Fill with 0
    }
    return fullCode + code
}

/*****
 * Calcular el código de control (suma dígitos % 10)
 * @param number Número a calcular el código de control
 */
function calculateControlCode(number) {
    return number.split('').reduce( (p, c) => p+Number(c), 0 ) % 10
}

class SampleCode {
    constructor(barcode) {
        this.readedCode = typeof barcode === 'string' ? barcode : String(barcode)

        if (this.readedCode.length <= LENGTH_PROVIDER_CODE) {
            this.providerId = discoverSampleCodeType(this.readedCode)
            this.providerCode = this.readedCode
        } else if (this.readedCode.length === LENGTH_MYDNAMAP_LONG_CODE) {
            this.providerId = this.readedCode.substr(0, 2)
            this.longCode = this.readedCode
            // TODO: Validate readed mDm long code. Calling discoverSampleCodeType()?
        }
        // TODO: Read FULL codes
    }

    set contactCountry(country) {
        switch (country) {
            case 'Reino Unido':
                this.country = iso3166.find(x => x.alpha2 === 'GB')
                break

            case 'España':
                this.country = iso3166.find(x => x.alpha2 === 'ES')
                break

            case 'Argentina':
                this.country = iso3166.find(x => x.alpha2 === 'AR')
                break

            default:
                this.country = iso3166.find(x => x.name === 'Spain')
        }
    }

    set contactBirthday(date) {
        this.birthday = moment(date)
    }

    set contactSex(sex) {
        this.sex = sex
    }

    set registrationDate(date) {
        this.registeredday = moment(date)
    }

    get registrationDate() {
        return this.registeredday
    }

    get isValid() {
        return Object.values(PROVIDERS).includes(this.providerId)
    }

    get provider() {
        return {
            id: this.providerId,
            ...PROVIDERS_DATA[this.providerId]
        }
    }

    get code() {
        if (!this.isValid) return null

        if (!this.providerCode) {
            if (this.longCode) {
                this.providerCode = this.longCode.substr(2,18)
                this.providerCode = this.providerCode.substr(LENGTH_PROVIDER_CODE - PROVIDERS_DATA[this.providerId].length, PROVIDERS_DATA[this.providerId].length)
            }
        }
        return this.providerCode
    }

    get mDmCode() {
        if (!this.isValid) return null

        if (!this.longCode) {
            if (this.providerCode) {
                this.longCode = generateMDMLongCode(this.providerId, this.providerCode)
            }
        }
        return this.longCode
    }

    get extendedCode() {
        if (!this.isValid) return null

        const part1 = `${this.country.numeric}-${this.mDmCode}`
        const part1Compact = `${this.country.numeric}${this.mDmCode}`
        const part1Txt = `${this.country.alpha2}-${this.mDmCode}`

        const part2 = `${this.sex === 'XX' ? 1 : 2}-${this.birthday.format('YYYYMM')}-${this.registeredday.format('YYYYMM')}`
        const part2Compact = `${this.sex === 'XX' ? 1 : 2}${this.birthday.format('YYYYMM')}${this.registeredday.format('YYYYMM')}`
        const part2Txt = `${this.sex === 'XX' ? 'V' : 'H'}-${this.birthday.format('YYYYMM')}-${this.registeredday.format('YYYYMM')}`

        const controlDigit1 = calculateControlCode(part1Compact)
        const controlDigit2 = calculateControlCode(part2Compact)

        const numerical = `${part1}-${controlDigit1}${controlDigit2}-${part2}`
        const compact = `${part1Compact}${controlDigit1}${controlDigit2}${part2Compact}`
        const text = `${part1Txt}-${controlDigit1}${controlDigit2}-${part2Txt}`
        return {
            compact,
            long: numerical,
            humanready: text
        }
    }
}

module.exports = SampleCode