
// <copyright company="Wizeline">
// Copyright (c) 2021 All Rights Reserved
// </copyright>
// <author>Mario Rodriguez Mier</author>

const https = require ('https');

const fetch = require("node-fetch");

const signalR = require ('@microsoft/signalr');

const  {initializeApp} = require("firebase/app")

const {getAuth, signInWithEmailAndPassword,signOut} = require('firebase/auth');

// Get this info from server side configuration


initializeApp(config.securityConfig);


class SettingController {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;

        this.Template = this.Template.bind(this);
        this.GetAll = this.GetAll.bind(this);
        this.Get = this.Get.bind(this);
        this.GetByName = this.GetByName.bind(this);
        this.Add = this.Add.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Update = this.Update.bind(this);


    }

    async Template(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/template`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetAll(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Get(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetByName(name){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/byname/${name}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Add(item){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(item)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Delete(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Update(item){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/setting/`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(item)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }
};

class UserController {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;

        this.GetAll = this.GetAll.bind(this);
        this.GetAllPublicUsersInfo = this.GetAllPublicUsersInfo.bind(this);
        this.Template = this.Template.bind(this);
        this.GetByCompany = this.GetByCompany.bind(this);
        this.GetMYDNAMAPCompanyUsers = this.GetMYDNAMAPCompanyUsers.bind(this);
        this.GetByEmail = this.GetByEmail.bind(this);
        this.GetRelatives = this.GetRelatives.bind(this);
        this.AddRelatives = this.AddRelatives.bind(this);
        this.DeleteRelatives = this.DeleteRelatives.bind(this);
        this.UpdateRelatives = this.UpdateRelatives.bind(this);


    }

    async GetAll(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetAllPublicUsersInfo(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/all/public`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Template(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/template`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetByCompany(companyId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/by/company/${companyId}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetMYDNAMAPCompanyUsers(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/of/mydnamap`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetByEmail(email){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/by/email/${email}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetRelatives(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/${id}/relatives/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async AddRelatives(id,relativeRelationship){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/${id}/relatives`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(relativeRelationship)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async DeleteRelatives(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/relatives/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async UpdateRelatives(id,r){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/mendeluser/relatives/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(r)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }
};

class SecurityRole {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;



    }
};

class _ApplicationController {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;

        this.GetAll = this.GetAll.bind(this);
        this.Disable = this.Disable.bind(this);
        this.Enable = this.Enable.bind(this);
        this.Renew = this.Renew.bind(this);
        this.Authenticate = this.Authenticate.bind(this);
        this.Add = this.Add.bind(this);
        this.AddRoleToApp = this.AddRoleToApp.bind(this);
        this.DecodeToken = this.DecodeToken.bind(this);
        this.AddRolesToUser = this.AddRolesToUser.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Update = this.Update.bind(this);


    }

    async GetAll(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Disable(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/${id}/disable`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Enable(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/${id}/enable`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Renew(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/renew`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Authenticate(request){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/authenticate`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(request)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Add(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/app`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async AddRoleToApp(appId,roleId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/${appId}/role/${roleId}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async DecodeToken(token){
        let authToken = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/decode`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(token)
        }
        if (authToken != null) {
            options.headers.Authorization = authToken;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async AddRolesToUser(id,rolesId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/${id}/roles`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(rolesId)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Delete(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Update(user){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/app/{id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }
};

class _RoleController {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;

        this.GetAll = this.GetAll.bind(this);
        this.Add = this.Add.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Update = this.Update.bind(this);


    }

    async GetAll(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/roles/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Add(newRole){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/roles/role`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newRole)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Delete(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/roles/role/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Update(role){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/roles/role`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(role)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }
};

class _UserController {

    constructor (baseUrl) {
        this.baseUrl = baseUrl;

        this.Me = this.Me.bind(this);
        this.GetAll = this.GetAll.bind(this);
        this.Get = this.Get.bind(this);
        this.GetUserRoles = this.GetUserRoles.bind(this);
        this.Authenticate = this.Authenticate.bind(this);
        this.Renew = this.Renew.bind(this);
        this.Add = this.Add.bind(this);
        this.AddUserToRole = this.AddUserToRole.bind(this);
        this.Impersonate = this.Impersonate.bind(this);
        this.DeImpersonate = this.DeImpersonate.bind(this);
        this.ActivateAccount = this.ActivateAccount.bind(this);
        this.AddRolesToUser = this.AddRolesToUser.bind(this);
        this.ChangeUserRoles = this.ChangeUserRoles.bind(this);
        this.Delete = this.Delete.bind(this);
        this.DeleteUserRoles = this.DeleteUserRoles.bind(this);
        this.GenerateEmailVerification = this.GenerateEmailVerification.bind(this);
        this.GeneratePasswordReset = this.GeneratePasswordReset.bind(this);
        this.ForgotPassword = this.ForgotPassword.bind(this);
        this.Update = this.Update.bind(this);
        this.Disable = this.Disable.bind(this);
        this.Enable = this.Enable.bind(this);
        this.SendActivationCode = this.SendActivationCode.bind(this);
        this.SendChangePasswordCode = this.SendChangePasswordCode.bind(this);


    }

    async Me(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/me`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetAll(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/all`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Get(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GetUserRoles(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/roles`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "GET",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Authenticate(request){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/authenticate`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(request)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Renew(){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/renew`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Add(newUser){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/user`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(newUser)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async AddUserToRole(userId,roleId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${userId}/role/${roleId}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Impersonate(role){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/impersonate`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(role)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async DeImpersonate(role){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/deimpersonate`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(role)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async ActivateAccount(activationCode){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/activate`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(activationCode)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async AddRolesToUser(id,rolesId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/roles`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(rolesId)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async ChangeUserRoles(id,rolesId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/change/roles`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "POST",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(rolesId)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Delete(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async DeleteUserRoles(id,rolesId){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/roles`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "DELETE",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(rolesId)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GenerateEmailVerification(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/emailverification`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async GeneratePasswordReset(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/passwordResetEmail`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async ForgotPassword(email){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/forgotPassword/${email}`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }
        let result = await fetch(url, options);
        switch (result.status) {
            case  200:
            case  204: {
                return
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Update(user){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/user`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Disable(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/disable`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async Enable(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/enable`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }

        let result = await fetch(url, options);
        switch (result.status) {
            case  200: {
                result = await result.json()
                return result
            }
            case 204 :{
                return null;
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async SendActivationCode(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/sendActivationCode`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }
        let result = await fetch(url, options);
        switch (result.status) {
            case  200:
            case  204: {
                return
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }

    async SendChangePasswordCode(id){

        let token = global.AUTH_TOKEN;
        let url = `${this.baseUrl}/api/security/v1/user/${id}/sendChangePasswordCode`
            .replace(new RegExp('//','g'), '/')
            .replace(new RegExp('http:/','g'), 'http://')
            .replace(new RegExp('https:/','g'), 'https://');
        let options = {
            method: "PUT",
            agent: url.indexOf('https://') != -1 ? new https.Agent({
                rejectUnauthorized: false
            }) : null,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (token != null) {
            options.headers.Authorization = token;
        }
        let result = await fetch(url, options);
        switch (result.status) {
            case  200:
            case  204: {
                return
            }
            default :{
                throw new Error( await result.text());
            }
        }
    }
};

class ApplicationClass {

    constructor (url) {
        this.url = url; this.url = url;
        if (!this.url.endsWith("/")) {
            this.url +="/"
        }
        this.Setting = new SettingController(url);
        this.User = new UserController(url);
        this.SecurityRole = new SecurityRole(url);
        this._Application = new _ApplicationController(url);
        this._Role = new _RoleController(url);
        this._User = new _UserController(url);
        this.onObjectAdded =  this.onObjectAdded.bind(this);
        this.onObjectChanged = this.onObjectChanged.bind(this);
        this.onObjectDeleted = this.onObjectDeleted.bind(this);
        this.onConnectionStart = this.onConnectionStart.bind(this);
    }

    useToken (token) {
        global.AUTH_TOKEN = token;
    }


    async  loginEmailAndPassword(email, password) {
        let self = this;
        return await new Promise(async (resolve, reject) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(async (user) => {
                    let res  = await self._User.Authenticate({"token":user._tokenResponse.idToken});
                    if (res) {
                        global.AUTH_TOKEN = res.token;
                        resolve({
                            token: res.token,
                            user: res.user
                        })
                    }
                    else {
                        reject("Invalid token for Authenticate");
                    }
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }


    async  loginApp(id, key) {
        return await new Promise(async (resolve, reject) => {
            this._Application.Authenticate({appId: id, appKey: key})
                .then(async (response) => {
                    global.AUTH_TOKEN = response.token;
                    resolve({
                        token: response.token,
                        user: response.user
                    })
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }

    async  logOut() {
        return await new Promise((resolve, reject) => {
            const auth = getAuth();
            global.AUTH_TOKEN = null;
            signOut(auth)
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }




    onObjectAdded = (object)=>{}
    onObjectChanged = (object)=>{}
    onObjectDeleted = (object)=>{}
    onConnectionStart = () =>{}


    startSignaling () {
        let ws_url = (this.url + "/api/mendel/broadcast").replace(new RegExp('//', 'g'), '/')
            .replace(new RegExp('http:/', 'g'), 'http://')
            .replace(new RegExp('https:/', 'g'), 'https://');

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(ws_url,{ accessTokenFactory: () => AUTH_TOKEN})
            .build();

        this.connection.on ("object_added",  object => this.onObjectAdded(object));
        this.connection.on ("object_changed",  object => this.onObjectChanged(object));
        this.connection.on ("object_deleted",  object => this.onObjectDeleted(object));

        this.connection.start()
            .then(() => this.onConnectionStart());
        // Meter aqui debajo todo lo relacionado con los Conconnect Methods

    }
}




module.exports = ApplicationClass;

