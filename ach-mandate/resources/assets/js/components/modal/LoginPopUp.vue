<template>
    <b-modal id="login-with-account-no-modal" ref="login-with-account-no-modal"
             no-close-on-esc
             no-close-on-backdrop
             hide-header
             hide-footer
             no-fade
             centered
             title="">
        <div class="modal-dialog modal-lgs">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="OTP_inner_main_card">
                        <img :src="close" data-dismiss="modal" @click="hideModal" class="close_icon">

                        <login-with-account-no v-if="accountNoDobToggle"/>
                        <account-list v-else-if="sendOtpToggle"/>
                        <!-- <verify-otp :propsOtpId="otpId" v-else-if="verifyOtpToggle"/>-->

                        otpId kalim :  {{ otpId }}

                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>
<script>

    import LoginWithAccountNo from './../auth/LoginWithAccountNo.vue';
    import AccountList from './../auth/AccountList.vue';
  //  import VerifyOtp from './../auth/VerifyOtp.vue';
    import { BModal, VBModal } from 'bootstrap-vue';

    export default {
        components: {
            'login-with-account-no': LoginWithAccountNo,
            'account-list': AccountList,
           // 'verify-otp': VerifyOtp,
            'b-modal': BModal,
        },
        directives: {
            'b-modal': VBModal
        },
        data(){
            return {
                close : `${window.achMandate.baseUrl}/images/ach-mandate/close-icon.png`,
                showAccountDobSection : true,
                showSendOtp : false,
                showVerifyOtp : false,
                //showVerifyOtp : false,
                otpId : '',
            }
        },
        methods: {
            hideModal() {
                this.$refs['login-with-account-no-modal'].hide();
            },
            showModal() {
                this.$refs['my-modal'].show()
            },
            /*hideModal() {
                this.$refs['campaign-modal'].hide();
                //this.$refs['my-modal'].hide()
                // this.$bvModal.hide('campaign-otp-modal');
            },*/
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['my-modal'].toggle('#toggle-btn')
            }
        },
        created() {
            /*this.$root.$on('closeCampaignOtpModal', (data) => {
                this.$refs['campaign-modal'].hide();
            });*/
            this.$root.$on('showHideSendOtpAndVerifyOtpSection', (data) => {
                
                console.log("showHideSendOtpAndVerifyOtpSection: ");
                console.log("data: " + data);
                
                this.showAccountDobSection = data.showAccountDobSection;
                this.showSendOtp = data.showSendOtp;
                this.showVerifyOtp = data.showVerifyOtp;
            });
            this.$root.$on('setOtpId', (data) => {
                console.log('created data.otpId');
                console.log(data.otpId);

                //self.otpId = data.otpId;
                this.otpId = data.otpId;

                console.log('created this.otpId');
                console.log(this.otpId);
            });
        },
        computed: {
            accountNoDobToggle(){
                return this.showAccountDobSection;
            },
            sendOtpToggle(){
                console.log("this.showSendOtp: " + this.showSendOtp);
                return this.showSendOtp;
            },
            verifyOtpToggle(){
                return this.showVerifyOtp;
            },
        },
        mounted(){
            localStorage.removeItem('accountListData');
        }
    }
</script>