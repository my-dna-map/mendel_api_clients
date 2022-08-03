"use strict";

/**
 *
 * @param req
 * @param res
 * @param next
 */
async function  authToken_Checker(req, res, next) {

    if (!security) {
        return next();
    }

    if (config.get("debug") === true) {
        logger.debug(
            `**** DEBUG: New query: ${req.method} - ${req.originalUrl}`,
            req.body
        );
    }

    let token = req.headers["x-authtoken"];

    if (!token) {
        return next();
    }

    try {
        let user = await security._Application.DecodeToken(token);

        req.user = decoded;
        return next();
    }
    catch(e ) {
        next({
            code: 403,
            msg: `Bad JWT Token:${token} ERROR:${JSON.stringify(e)}`
        });
    }

}

function secured(req, res, next) {
    if (!req.user) {
        return next({
            code: 500,
            msg: {code: 500, msg: "Access Denied"}
        });
    }
    next();
}

function medicalGroupRequired(req, res, next) {
    if (req.user && req.user.isMember) {
        return next();
    }
    return next({
        code: 500,
        msg: {code: 500, msg: "User is not member of DNA team"}
    });
}

function mydnamapUserRequired(req, res, next) {
    next();
}

function medicalGroupOrAppKeyRequired(req, res, next) {
    if (req.user && req.user.appid) {
        return next();
    }
    if (req.user && req.user.isMember) {
        return next();
    }
    return next({
        code: 500,
        msg: {code: 500, msg: "User is not member of DNA team"}
    });
}

module.exports = {
    authToken_Checker: (req, res, next) => authToken_Checker(req, res, next),
    secured: (req, res, next) => secured(req, res, next),
    mydnamapUserRequired: (req, res, next) => mydnamapUserRequired(req, res, next),
    medicalGroupRequired: (req, res, next) => medicalGroupRequired(req, res, next),
    medicalGroupOrAppKeyRequired: (req, res, next) => medicalGroupOrAppKeyRequired(req, res, next),
};
