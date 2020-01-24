window._ = require('lodash');

try {
    //window.$ = window.jQuery = require('jquery');
    //require('bootstrap');
} catch (e) {
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

/*window.axios.defaults.baseURL = 'https://portalapiuat.hdfc.com/v1';*/
window.axios.defaults.baseURL = 'http://insta-loan-micro-services/v1';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/*$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});*/

//require("jquery-validation");
//require("block-ui");

window.collect = require('collect.js');
window.Vue = require('vue');

//import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
//import { ValidationProvider } from 'vee-validate';
//import { ValidationProvider, extend } from 'vee-validate';
/*import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';*/

/*extend('secret', {
    validate: value => value === 'example',
    message: 'This is not the magic word'
});*/

/*extend('required', {
    ...required,
    message: 'This field is required'
});*/

import { ValidationObserver, ValidationProvider, extend, localize } from "vee-validate";
import { min, required, email, oneOf } from "vee-validate/dist/rules";
//import en from "vee-validate/dist/locale/en.json";

/*extend('required', value => {
    if (!!value) {
        return true;
    }

    return 'This field is required';
});*/

/*extend('required', {
    validate: value => !!value,
    validate (value){
        console.log("value: " + value);
        console.log("value: " + !!value);
        return !!value;
    },
    //message: 'This field is required'
    message() {
        // You might want to generate a more complex message with this function.
        return 'This field is required';
    }
});*/

/*extend('required', {
    //validate: value => value.match(/^[A-Za-z]{2}\/[0-9]*$/g) !== null,
    message: 'Enter valid email id.11..'
});*/

extend("required", required);
extend("min", min);
extend("email", email);
extend("oneOf", oneOf);

extend('upCase', {
    getMessage: () => "One uppercase character",
    validate: value => value.match(/[A-Z]/g) !== null
});

extend('number', {
    getMessage: () => "One number",
    validate: value => value.match(/[0-9]/g) !== null
});

extend('email', {
    //validate: value => value.match(/^[A-Za-z]{2}\/[0-9]*$/g) !== null,
    message: 'Enter valid email id...'
});

extend('deposit_no', {
    validate: value => value.match(/^[A-Za-z]{2}\/[0-9]*$/g) !== null,
    message: 'Invalid deposit number.'
});

extend('mobile_no', {
    validate: value => value.match(/^\d{10}$/g) !== null,
    message: 'Invalid mobile number.'
});

extend('file_no', {
    validate: value => value.match(/^\d{10}$/g) !== null,
    message: 'Enter valid data.'
});

extend('recaptcha', {
    validate(value){
        console.log(value);
        console.log(recaptcha.getResponse());
        return grecaptcha.getResponse() != '';
    },
    message: 'Recaptcha field is required.'
});

extend('lengthBetween', {
    validate: (value, { min, max }) => {
        const length = value && value.length;

        return length >= min && length <= max;
    },
    params: ['min', 'max'],
    message: 'The {_field_} length must be between {min} and {max}'
});

// return /^[A-Za-z]{2}\/[0-9]*$/.test(value);

/*extend('secret', {
    validate: value => value === 'example',
    message: 'Invalid deposit number.'
});*/

// Install messages
/*localize({
    en
});*/


Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

import "bootstrap-vue/dist/bootstrap-vue.css";
import { ToastPlugin, BToast }  from 'bootstrap-vue';
Vue.use(ToastPlugin);

Vue.prototype.$vbToast = function(msgBody, titleVariant, position = 'b-toaster-top-center') {

    this.$bvToast.toast(msgBody, {
        title: titleVariant === 'danger' ? 'Error' : titleVariant,
        toaster: position,
        variant: titleVariant,
        solid: true
    });

}


import Router from './routes/routes';
import store from './store/index';

import Layout from './components/pages/layouts/LayoutComponent.vue';

const app = new Vue({
    el: '#app',
    router : Router,
    store,
    ...Layout
    //render: h => h(APP)
});

/*

let baseUrl = window.baseUrl || '';
$.blockUI.defaults.message = `<img src="${baseUrl}/images/hdfc-loader.gif" />`;

$.blockUI.defaults.css = {
    width: '100%',
    border: '0px solid #FFFFFF',
    top: '30%',
    cursor: 'wait',
    backgroundColor: '#FFFFFF',
    'text-align': 'center'
};
$.blockUI.defaults.overlayCSS = {backgroundColor: '#FFFFFF', opacity: 0.9, cursor: 'wait'}

String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$.validator.addMethod("email", function (value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Please enter a valid email address.");

$.validator.addMethod("numbersonly", function (value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
}, "Please enter numbers only.");

$.validator.addMethod("mobile", function (value, element) {
    return this.optional(element) || /^\d{10,15}$/.test(value);
}, "Please enter a valid mobile no.");

$.validator.addMethod("maxMoney", function (value, element, param) {
    var cents = parseFloat(value.replaceAll(",", ""));
    return this.optional(element) || (cents <= parseFloat(param));
}, "Please do not enter amount more than {0}");

$.validator.addMethod("minMoney", function (value, element, param) {
    let cents = parseInt(value.replaceAll(",", ""));
    return this.optional(element) || (cents >= parseInt(param));
}, "Please do not enter amount less than {0}.");

$.validator.addMethod("moneyOnly", function (value, element) {
    return this.optional(element) || /^[0-9,.]+$/i.test(value);
}, "Please enter valid amount.");*/
