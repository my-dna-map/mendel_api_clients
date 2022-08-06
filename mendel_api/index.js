
// <copyright company="Wizeline">
// Copyright (c) 2021 All Rights Reserved
// </copyright>
// <author>Mario Rodriguez Mier</author>

const https = require ('https');

const fetch = require("node-fetch");

const signalR = require ('@microsoft/signalr');



class CompanyController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.GetAllPublicCompanyInfo = this.GetAllPublicCompanyInfo.bind(this);
    this.Template = this.Template.bind(this);
    this.GetAll = this.GetAll.bind(this);
    this.Get = this.Get.bind(this);
    this.GetMYDNAMAPCompany = this.GetMYDNAMAPCompany.bind(this);
    this.GetImage = this.GetImage.bind(this);
    this.Add = this.Add.bind(this);
    this.AddNote = this.AddNote.bind(this);
    this.Upload = this.Upload.bind(this);
    this.Delete = this.Delete.bind(this);
    this.DeleteNote = this.DeleteNote.bind(this);
    this.Update = this.Update.bind(this);
    this.UpdateNote = this.UpdateNote.bind(this);


  }

  async GetAllPublicCompanyInfo(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/all/public`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetMYDNAMAPCompany(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/mydnamap`
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
      body:JSON.stringify(id)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetImage(name){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/imagen/${name}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async Upload(file){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/upload`
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
      body:JSON.stringify(file)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async Delete(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DeleteNote(id,noteId){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/${id}/note/${noteId}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async UpdateNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/company/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class DashboardController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.GetMainDashboard = this.GetMainDashboard.bind(this);


  }

  async GetMainDashboard(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/app/dashbaord/main`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class NotificationController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.Template = this.Template.bind(this);
    this.GetAll = this.GetAll.bind(this);
    this.Get = this.Get.bind(this);
    this.GetUserNotifications = this.GetUserNotifications.bind(this);
    this.AddUserNotification = this.AddUserNotification.bind(this);
    this.UpdateNotification = this.UpdateNotification.bind(this);


  }

  async Template(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetUserNotifications(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/user/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddUserNotification(id,notification){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/user/${id}`
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
      body:JSON.stringify(notification)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async UpdateNotification(id,notification){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/notification/user/${id}`
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
      body:JSON.stringify(notification)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class OrderController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.Template = this.Template.bind(this);
    this.GetAllPublicSampleInfo = this.GetAllPublicSampleInfo.bind(this);
    this.GetAll = this.GetAll.bind(this);
    this.GetOrdersWithStatus = this.GetOrdersWithStatus.bind(this);
    this.GetByOrderNumber = this.GetByOrderNumber.bind(this);
    this.Get = this.Get.bind(this);
    this.GetSamples = this.GetSamples.bind(this);
    this.GetDocument = this.GetDocument.bind(this);
    this.DownloadDocument = this.DownloadDocument.bind(this);
    this.Add = this.Add.bind(this);
    this.RunWorkflowTask = this.RunWorkflowTask.bind(this);
    this.AddNote = this.AddNote.bind(this);
    this.AddSamples = this.AddSamples.bind(this);
    this.Upload = this.Upload.bind(this);
    this.ExecuteWorkflowTask = this.ExecuteWorkflowTask.bind(this);
    this.DeleteNote = this.DeleteNote.bind(this);
    this.Delete = this.Delete.bind(this);
    this.DeleteSamples = this.DeleteSamples.bind(this);
    this.UpdateNote = this.UpdateNote.bind(this);
    this.Update = this.Update.bind(this);


  }

  async Template(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetAllPublicSampleInfo(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/all/public`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetOrdersWithStatus(status){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/status/${status}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetByOrderNumber(orderNumber){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/by/number/${orderNumber}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetSamples(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/samples`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetDocument(id,name){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/document/${name}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DownloadDocument(id,name){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/document/${name}/download`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async RunWorkflowTask(id,task){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/runworkflowtask`
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
      body:JSON.stringify(task)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddSamples(id,samplesIds){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/samples`
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
      body:JSON.stringify(samplesIds)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async Upload(file,id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/upload`
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
      body:JSON.stringify(file)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async ExecuteWorkflowTask(id,taskname,action,parameters){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/executeworkflowtask/${taskname}/${action}`
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
      body:JSON.stringify(parameters)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DeleteNote(id,noteId){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/note/${noteId}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DeleteSamples(id,samplesIds){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/samples`
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
      body:JSON.stringify(samplesIds)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async UpdateNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/order/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class TaskAction {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;



  }
};

class PackageController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.Template = this.Template.bind(this);
    this.DowloadDocument = this.DowloadDocument.bind(this);
    this.EnablePackageForDowload = this.EnablePackageForDowload.bind(this);


  }

  async Template(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/package/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DowloadDocument(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/package/${id}/download`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async EnablePackageForDowload(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/package/${id}/enable`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class SampleController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.Template = this.Template.bind(this);
    this.GetAllPublicSampleInfo = this.GetAllPublicSampleInfo.bind(this);
    this.GetAll = this.GetAll.bind(this);
    this.GetSamplesWithStatus = this.GetSamplesWithStatus.bind(this);
    this.GetAllUnassignedSamples = this.GetAllUnassignedSamples.bind(this);
    this.Get = this.Get.bind(this);
    this.GetSampleResults = this.GetSampleResults.bind(this);
    this.GetSamplePackages = this.GetSamplePackages.bind(this);
    this.GetDocument = this.GetDocument.bind(this);
    this.DowloadDocument = this.DowloadDocument.bind(this);
    this.ExecuteWorkflowTask = this.ExecuteWorkflowTask.bind(this);
    this.RunWorkflowTask = this.RunWorkflowTask.bind(this);
    this.AddSamplePackage = this.AddSamplePackage.bind(this);
    this.Add = this.Add.bind(this);
    this.AddNote = this.AddNote.bind(this);
    this.Upload = this.Upload.bind(this);
    this.DeleteSamplePackages = this.DeleteSamplePackages.bind(this);
    this.DeleteNote = this.DeleteNote.bind(this);
    this.Delete = this.Delete.bind(this);
    this.UpdateNote = this.UpdateNote.bind(this);
    this.Update = this.Update.bind(this);


  }

  async Template(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetAllPublicSampleInfo(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/all/public`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetSamplesWithStatus(status){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/status/${status}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetAllUnassignedSamples(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/unasigned`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetSampleResults(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/results`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetSamplePackages(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/packages`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetDocument(sampleId,name){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${sampleId}/document/${name}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DowloadDocument(sampleId,name){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${sampleId}/document/${name}/download`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async ExecuteWorkflowTask(id,taskname,action,parameters){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/executeworkflowtask/${taskname}/${action}`
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
      body:JSON.stringify(parameters)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async RunWorkflowTask(id,task){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/runworkflowtask`
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
      body:JSON.stringify(task)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddSamplePackage(id,newPackage){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/packages`
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
      body:JSON.stringify(newPackage)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async AddNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async Upload(file,sampleId){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${sampleId}/upload`
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
      body:JSON.stringify(file)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DeleteSamplePackages(id,idPackage){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/packages/${idPackage}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async DeleteNote(id,noteId){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/note/${noteId}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async UpdateNote(id,note){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/${id}/note`
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
      body:JSON.stringify(note)
    }
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/sample/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/template`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/byname/${name}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/${id}`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/setting/`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

    this.GetAllUserDocuments = this.GetAllUserDocuments.bind(this);
    this.GetAllUserNotifications = this.GetAllUserNotifications.bind(this);
    this.GetAllUserDocumentsResults = this.GetAllUserDocumentsResults.bind(this);


  }

  async GetAllUserDocuments(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/user/${id}/document/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetAllUserNotifications(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/user/notifications/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

  async GetAllUserDocumentsResults(id){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/user/${id}/results/all`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class WorkflowController {

  constructor (baseUrl) {
    this.baseUrl = baseUrl;

    this.SQW = this.SQW.bind(this);


  }

  async SQW(){

    let auth_token = global.AUTH_TOKEN;
    let url = `${this.baseUrl}/api/mendel/v1/workflow/defaultSequencingWorkflow`
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
    if (auth_token != null) {
      options.headers.Authorization = auth_token;
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

class ApplicationClass {

  constructor (url) {
    this.url = url; this.url = url;
    if (!this.url.endsWith("/")) {
      this.url +="/"
    }
    this.Company = new CompanyController(url);
    this.Dashboard = new DashboardController(url);
    this.Notification = new NotificationController(url);
    this.Order = new OrderController(url);
    this.TaskAction = new TaskAction(url);
    this.Package = new PackageController(url);
    this.Sample = new SampleController(url);
    this.Setting = new SettingController(url);
    this.User = new UserController(url);
    this.Workflow = new WorkflowController(url);
    this.onObjectAdded =  this.onObjectAdded.bind(this);
    this.onObjectChanged = this.onObjectChanged.bind(this);
    this.onObjectDeleted = this.onObjectDeleted.bind(this);
    this.onConnectionStart = this.onConnectionStart.bind(this);
  }

  useToken (token) {
    global.AUTH_TOKEN = token;
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

