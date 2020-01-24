<template>
    <div class="OTP_main_div">

        <div v-show="accountList">

            <ValidationObserver v-slot="{ passes }">
                <form @submit.prevent="passes(sendOtp)" id="frmSendOtp" name="frmSendOtp" class="product-type" method="post">

                    <div class="row">
                        <div class="col-md-12 otp_title mt-5">
                            Select contact in order to receive an OTP <span class="otp_title_sml"> (One Time Password) </span>
                        </div>

                        <div class="col-md-12 mt-4">
                            <ValidationProvider v-slot="{ errors }" rules="required">
                                <div class="col-md-5 mt-4" style="margin: auto;">
                                    <div class="custom-control custom-radio" v-for="(account, index) in accounts">
                                        <input type="radio" class="custom-control-input" :id="'otpId_'+account.id" :value="account.id" :key="account.id" v-model="otp_id">
                                        <label class="custom-control-label lbl-radio" :for="'otpId_' + account.id">
                                            <span class="mlmr15"> {{account.contact_details}} </span>
                                        </label>
                                    </div>
                                   <!-- <b-form-group label="Individual radios">
                                        <b-form-radio v-for="(account, index) in accounts" v-model="otp_id" name="otp_id" :key="account.id" :value="account.id"> {{account.contact_details}} </b-form-radio>
                                    </b-form-group>-->
                                    <span class="red-color">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
                        </div>


                    </div>

                    <div class="row mt-5 text-center">
                        <div class="col-lg-12">
                            <button type="submit" id="OTPSEND" class="main_btn_common"> SEND OTP </button>
                            <div class="cancel mb-4" block @click="hideModal"> Cancel </div>
                        </div>
                    </div>
                </form>
            </ValidationObserver>


        </div>

        <div class="row mt-2 text-center" v-show="!accountList">
                <h4> {{ message }} </h4>
                <div class="col-lg-12">
                   <div class="cancel mb-4" block @click="hideModal"> Cancel </div>
                </div>
            </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';
    //import { BFormRadioGroup, BFormRadio } from 'bootstrap-vue';
    //import { ValidationObserver, ValidationProvider} from 'vee-validate';
    //import { EventBus } from "~/plugins/lib/event-bus";
    //import { required } from 'vee-validate/dist/rules';
    import { EventBus } from './../../event-bus';

    export default {
        components: {
            //'b-form-group': BFormRadioGroup,
            //'b-form-radio': BFormRadio,
            //ValidationObserver,
            //ValidationProvider
        },
        directives: {
            //'b-modal': VBModal
        },
        data() {
            return {
                accountList: '',
                message: 'Please wait...',
                otp_id : '',
                email: "",
                hasReadTerms: false,
                hasReadTermsCustom: false,
                drink: null,
                value: null,
            }
        },
        methods: {
            hideModal() {
                //this.$root.$emit('closeCampaignOtpModal');
            },
            async getAccountList() {

                console.log("kalim: ");
                console.log(this.accountList);

               /* EventBus.$on('i-got-clicked', clickCount => {
                    console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
                });
*/
                //this.$nuxt.$loading.start();

                //debugger;

                //const currentVersion = 2;
                //let version = localStorage.getItem('version');
                //let accountListData = localStorage.getItem('accountListData');

                //if (!version || version < currentVersion) {
                /*if (!!accountListData) {
                    this.accountList = JSON.parse(accountListData);
                   // this.$nuxt.$loading.finish();
                    return;
                }
*/
                this.$vbToast('Something went wrong.', 'danger');

                /*let payloads = {
                    account_number: this.storeFileNo,
                    //account_number: '987456321',
                    //date_of_birth: moment(String(this.storeDOB)).format('DD-MMM-YYYY'),
                    module: "LOGIN"
                };

                //this.$toast.show('Getting account list... ');

                try {
                    let response = await this.$axios.$post(`/oauth/accounts`, payloads);

                    this.accountList = response.data;

                    localStorage.setItem('accountListData', JSON.stringify(this.accountList));
                    localStorage.setItem('version', currentVersion);

                    this.$toast.success('Successfully authenticated');

                } catch (e) {

                    console.log('error catch..');
                    console.log(e.status);
                    console.log(e.data.message);

                    this.message = e.data.message;
                    this.$toast.error(e.data.message)
                }*/
                //this.$nuxt.$loading.finish();

            },
           /* async sendOtp(){

               // this.$nuxt.$loading.start();

                let payloads = {
                    otp_id: this.otp_id,
                    resend: false
                };

                this.$toast.show('sending OTP... ');

                try {
                    let response = await this.$axios.$post(`/oauth/${this.otp_id}/otp/send`, payloads);

                    this.$toast.success(response.message);

                    this.$root.$emit('showHideSendOtpAndVerifyOtpSection', {
                        showSendOtp : false,
                        showVerifyOtp : true,
                    });

                    this.$root.$emit('setOtpId', {
                        otpId: this.otp_id,
                    });

                   // EventBus.$emit("setOtpId", this.otp_id);
                   /!* EventBus.$emit("setOtpId", {
                        otpId: this.otp_id,
                    });*!/
               // }

            } catch (e) {

                    console.log('error catch..');
                    console.log(e.status);
                    console.log(e.data.message);

                    this.message = e.data.message;
                    this.$toast.error(e.data.message)
                }

                // this.$nuxt.$loading.finish();
            },*/
        },
        mounted() {
            console.log('mounted:kalim');
           /* this.$root.$on('emitAccountList', (data) => {
                console.log('created data.accountList 1 ');
                console.log(data.accountList);
                //this.accountList = data.accountList;
            });*/
           // this.getAccountList();
            /*EventBus.$on('i-got-clicked', clickCount => {
                console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! 123456:)`)
            });*/
            EventBus.$on('passAccountListEvent', accountList => {
                //this.accountList = accountList;
                console.log(`Oh, that's nice. It's gotten clicks! 123456:)`);
                console.log(`${accountList}`);
            });

        },
        created() {
            /*this.$root.$on('emitAccountList', (data) => {
                console.log('created data.accountList 2');
                console.log(data.accountList);
                this.accountList = data.accountList;
            });*/
            EventBus.$on('passAccountListEvent', accountList => {
                //this.accountList = accountList;
                console.log(`Oh, that's nice. It's gotten clicks!:)`);
                console.log(`${accountList}`);
            });
        },
        beforeCreate() {
            console.log('Nothing gets called before me ... !');
        },
        computed: {
            ...mapState(['storeFileNo', 'storeDOB']),
            accounts: function () {
                //console.log("this.computed: ");
                //console.log(this.accountList);
                return this.accountList;
            }
        }
    }
</script>