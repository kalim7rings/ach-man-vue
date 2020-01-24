<template>
    <div class="login_div">
        <!--<img :src="close" data-dismiss="modal" class="close_icon">-->
        <div class="col-md-12 ACH_log_title mt-5"> <span class="w300">ACH</span> Mandate Register  </div>
        <span class="text-danger">{{ error }}</span>
        <ValidationObserver v-slot="{ passes }">
            <form @submit.prevent="passes(getAccountList)" id="frmProductType" name="frmProductType" class="product-type" method="post">

                <ValidationProvider name="This" :rules="`required`" v-slot="{ errors }">
                    <div class="form-group mb50 mt-5">
                        <label class="input_lbl">Loan Account Number<span class="red-color">*</span></label>
                        <input type="text" v-model="account_no" name="account_no" placeholder="" class="height50 padding10" autocomplete="off">
                        <span class="red-color">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider name="DOB" :rules="`required`" v-slot="{ errors }">
                    <div class="form-group mb50 mt-5">
                        <label class="input_lbl">Date of Birth<span class="red-color">*</span></label>
                        <DatePicker v-model="dob" class="height50 padding10 w-100" />
                        <span class="red-color">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <div class="row mt-5 text-center">
                    <div class="col-lg-12">
                        <button type="submit" id="LOGINDIV" class="main_btn_common"> SUBMIT </button>
                    </div>
                </div>
            </form>
        </ValidationObserver>

        <div class="pleeease-click-me" @click="emitGlobalClickEvent()"></div>

    </div>
</template>
<script>
    import DatePicker from './../plugin/Datepicker.vue';
    import moment from 'moment';
    //import "bootstrap-vue/dist/bootstrap-vue.css";
    //import Vue from 'vue';
    //export const EventBus = new Vue();
    import { EventBus } from './../../event-bus';

    export default {
        components :{
            DatePicker,
        },
        data(){
            return {
                close : `${window.achMandate.baseUrl}/images/ach-mandate/close-icon.png`,
                account_no : '',
                dob : '',
                error : '',
                clickCount: 0
            }
        },
        methods : {
            getAccountList(){

                let payloads = {
                    _token: document.head.querySelector('meta[name="csrf-token"]').content,
                    //'g-recaptcha-response' : this.productsDetails.recaptchaVal,
                    account_number : this.account_no,
                    date_of_birth : moment(this.dob, 'DD-MM-YYYY').format("DD-MMM-YYYY"),
                    module : 'ACH_MANDATE'
                };

                /*axios.post(route('oauth/accounts'), payloads)*/
                axios.post(`/oauth/accounts`, payloads)
                    .then((resp) => {

                        //console.log(resp.data.data);
                        EventBus.$emit('passAccountListEvent', resp.data.data);

                        //localStorage.setItem('accountListData', JSON.stringify(resp.data.data));

                       /* this.$root.$emit('emitAccountList', {
                            accountList : resp.data.data,
                        });*/

                        this.$root.$emit('showHideSendOtpAndVerifyOtpSection', {
                            showAccountDobSection : false,
                            showSendOtp : true,
                            showVerifyOtp : false,
                            message : '',
                        });
                    })
                    .catch((err) => {
                        //debugger;
                        //this.error = err.response.data.message;

                        this.$vbToast(err.response.data.message,'danger');

                        /*if(err.response.status === 422){
                            this.likedText = err.response.data.data;
                        }*/
                    });
            },
            emitGlobalClickEvent() {
                this.clickCount++;
                // Send the event on a channel (i-got-clicked) with a payload (the click count.)
                EventBus.$emit('i-got-clicked', this.clickCount);
            }
        },
        created(){
            this.$root.$on('dob', (data) => {
                console.log('date ####');
                console.log(data.dob);
                this.dob = data.dob;
            });
        }
    }
</script>