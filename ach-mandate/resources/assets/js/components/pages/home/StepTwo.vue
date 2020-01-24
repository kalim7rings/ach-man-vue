<template>
    <div class="container-fluid main_bg">
        <div class="main_card pl50">
            <div class="row margin0 pt-3">
                <div class="col-lg-8">
                    <div class="ACh_main_title"> ACH <span class="bold">E- Mandate</span> Registration </div>
                </div>
                <div class="col-lg-4 text-right">
                    <button type="button" class="main_btn_common btn_fix" v-b-modal.login-with-account-no-modal> REGISTER NOW </button>
                </div>
            </div>
            <div class="row margin0 mt-4 mr-5">
                <div class="col-lg-3">
                    <div class="ACh_info_one mob_text_center">
                        <img :src="icons.ach1">
                        <div class="ach_info_text"> Authentication for E-Mandate requires an <strong> Active Net banking log-in.</strong> Some banks do provide it through your Debit Card too. </div>
                    </div>
                    <div class="ACh_info_two mob_text_center">
                        <img :src="icons.ach2">
                        <div class="ach_info_text"> ACH Registration Process may take a <strong> maximum of 10 days.</strong> Post Dated Cheques may have to be submitted for the intervening period to nearest HDFC Ltd. Service Center. </div>
                    </div>
                </div>
                <div class="col-lg-5 mob_hide"> <img :src="icons.achInfo" width="100%" class="ach_img_main"> </div>
                <div class="col-lg-4">
                    <div class="ACh_info_thr mob_text_center">
                        <img :src="icons.ach3">
                        <div class="ach_info_text"> The <strong> maximum amount </strong> for an E-Mandate is Rs.1 Lac. For an amount above Rs.1 lac, you will have to issue a paper mandate. </div>
                    </div>
                    <div class="ACh_info_four mob_text_center">
                        <img :src="icons.ach4">
                        <div class="ach_info_text"> Mandates are generally presented on the 'Strike Date' mentioned in your mandate. If the strike date falls on a Bank Holiday, the mandate will be presented on the <strong>next working day.</strong> Sometimes due to other technical reasons, the mandate may be presented a few days later also. Therefore you are advised to <strong>maintain adequate balance </strong> until the mandate is presented. </div>
                    </div>
                </div>
            </div>
            <div class="row process_card">
                <div class="col-lg-3 border-right">
                    <img :src="icons.process1" class="float-left">
                    <div class="display-table"> The 'From Date' is the <strong>first strike date</strong> ie. the first Date of Payment.  </div>
                </div>
                <div class="col-lg-3 border-right">
                    <img :src="icons.process2" class="float-left">
                    <div class="display-table"> The available strike dates in a month are the<strong> 5th, 10th, 15th, 20th, 25th, 27th, or the Last day of the month.</strong> </div>
                </div>
                <div class="col-lg-3 border-right">
                    <img :src="icons.process3" class="float-left">
                    <div class="display-table"> <strong>Separate E-Mandate</strong> has to be submitted for each Loan Account. </div>
                </div>
                <div class="col-lg-3">
                    <img :src="icons.process4" class="float-left">
                    <div class="display-table"> This facility requires a 10 digit <strong>personal Indian Mobile Number</strong> to receive SMS. However, it is not mandatory. </div>
                </div>
            </div>

            <div class="row note_list margin0">
                <div class="col-lg-9">
                    <div class="ach_note_title"> E-Mandate cannot be issued under the following situations. </div>
                    <span class="note_ach"> Loan Repayment is through arrangements with builder or any special scheme. </span>
                    <span class="note_ach"> The bank details displayed online are not as per your bank records. </span> <br>
                    <span class="note_ach"> You have opted to split the EMI Payment between you and Co-Borrowers or pay through more than one Bank account. </span> <br>
                    <span class="note_ach"> Your bank (i.e. the Bank from which the E Mandate is to be issued) is not registered with NPCI for API E-Mandate. </span>
                    <span class="ach_note_red"> Note : Please do not share your Netbanking Log-in ID and passwords to anyone. Also do not share your debit card number, CVV and PIN Number. </span>
                </div>
                <div class="col-lg-3 text-center mt-5"> <img :src="icons.emailReceive"> </div>
            </div>
        </div>

        <login-popup-modal/>


        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-lgs">
                <div class="modal-content">
                    <!-- Modal body -->
                    <div class="modal-body">
                        <div class="OTP_inner_main_card">
                            <div class="login_div">
                                <img src="images/close-icon.png" data-dismiss="modal" class="close_icon">
                                <div class="col-md-12 ACH_log_title mt-5"> <span class="w300">ACH</span> Mandate Register  </div>
                                <div class="form-group mb50 mt-5">
                                    <label class="input_lbl">Loan Account Number<span class="red-color">*</span></label>
                                    <input type="text" name="account_no" placeholder="" class="height50 padding10" autocomplete="off">
                                    <span>  </span>
                                </div>
                                <div class="form-group mb50 mt-5">
                                    <label class="input_lbl">Date of Birth<span class="red-color">*</span></label>
                                    <input type="text" name="account_no" placeholder="" class="height50 padding10" autocomplete="off">
                                    <span>  </span>
                                </div>

                                <div class="row mt-5 text-center">
                                    <div class="col-lg-12">
                                        <button type="button" id="LOGINDIV" class="main_btn_common"> SUBMIT </button>
                                        <div class="acc_log_text mb-4"> Already have an account?Login </div>
                                    </div>
                                </div>
                            </div>
                            <div class="OTP_main_div">
                                <div class="row">
                                    <img src="images/close-icon.png" class="close_icon" data-dismiss="modal">
                                    <div class="col-md-12 otp_title mt-5">
                                        <span class="w300">Select</span> the contact on which<br> to send the OTP
                                    </div>
                                    <div class="col-md-12 mt-4 text-center">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio1" name="example1">
                                            <label class="custom-control-label lbl-radio" for="customRadio1"> <span class="mlmr15"> rahulXXXX@gmail.com </span></label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio2" name="example1">
                                            <label class="custom-control-label lbl-radio" for="customRadio2"> <span class="mlmr15"> rahulXXXX@gmail.com </span></label>
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customRadio3" name="example1">
                                            <label class="custom-control-label lbl-radio " for="customRadio3"> <span class="mlmr15"> rahulXXXX@gmail.com </span></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5 text-center mb-4">
                                    <div class="col-lg-12">
                                        <button type="button" id="OTPSEND" class="main_btn_common"> SEND OTP </button>
                                    </div>
                                </div>
                            </div>
                            <div class="OTP_div">
                                <div class="row">
                                    <img src="images/close-icon.png" class="close_icon" data-dismiss="modal">
                                    <div class="col-md-12 mt-5 otp_title">
                                        <span class="w300">Enter</span> OTP
                                    </div>
                                    <div class="col-md-12 otp_sub_title text-center mt-3">
                                        Enter the 4 digit OTP sent on <strong> rahulXXXX@gmail.com </strong>
                                    </div>
                                    <div class="OTP_input_div mt-5">
                                        <input type="password" class="OTP-form-control otp_input">
                                        <input type="password" class="OTP-form-control otp_input">
                                        <input type="password" class="OTP-form-control otp_input">
                                        <input type="password" class="OTP-form-control otp_input">
                                    </div>
                                    <div class="col-md-12 mt-3 text-center OTP_exp"> OTP Expires in 1:51 </div>
                                </div>
                                <div class="row mt-4 text-center">
                                    <div class="col-md-12">
                                        <span class="cancel"> Resend OTP </span>
                                    </div>
                                    <div class="col-lg-12 mt-4">
                                        <button class="main_btn_common"> SUBMIT </button>
                                    </div>
                                    <div class="col-md-12 mt-3 mb-5">
                                        <span id="OTPBACK" class="otp_resend"> Back </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>

    //import { mapState, mapMutations } from 'vuex';
    import LoginPopUp from './../../modal/LoginPopUp.vue';
    import { BModal, VBModal} from 'bootstrap-vue';
    //import { ValidationProvider } from "vee-validate";

    export default {
        data(){
            return {
                icons : {
                    ach1 : `${window.achMandate.baseUrl}/images/ach-mandate/ACH_one.png`,
                    ach2 : `${window.achMandate.baseUrl}/images/ach-mandate/ACH_two.png`,
                    ach3 : `${window.achMandate.baseUrl}/images/ach-mandate/ACH_thr.png`,
                    ach4 : `${window.achMandate.baseUrl}/images/ach-mandate/ACH_four.png`,
                    process1 : `${window.achMandate.baseUrl}/images/ach-mandate/process_one.png`,
                    process2 : `${window.achMandate.baseUrl}/images/ach-mandate/process_two.png`,
                    process3 : `${window.achMandate.baseUrl}/images/ach-mandate/process_thr.png`,
                    process4 : `${window.achMandate.baseUrl}/images/ach-mandate/process_four.png`,
                    emailReceive : `${window.achMandate.baseUrl}/images/ach-mandate/email_receive.png`,
                    close : `${window.achMandate.baseUrl}/images/ach-mandate/close-icon.png`,
                    achInfo : `${window.achMandate.baseUrl}/images/ach-mandate/ACH_info.png`,
                },

            }
        },
        components: {
            'b-modal': BModal,
            'login-popup-modal': LoginPopUp,
            //ValidationProvider
        },
        directives: {
            'b-modal': VBModal
        },
        methods: {
          //  ...mapMutations(['SET_REF_CODE', 'SET_SOURCE_CODE', 'SET_CAMPAIGN_MODE', 'SET_DOB', 'SET_FILE_NO', 'SET_AFTER_LOGIN_PAGE_URL', 'SET_SUMMARY_FLAG']),
            async getDobAndAccountNo(){

                let payloads = {
                    source_code   :  this.storeSourceCode,
                    ref_code      :  this.storeRefCode,
                    campaign_mode :  this.storeCampaignMode,
                    template_id   :  '',
                };

                try{
                    let response = await this.$axios.$post(`/campaign/pre-approved-loan/landing-page`, payloads);

                    console.log("@@response : ");
                    console.log(response);

                    if(response.RETURN_CODE == '0'){

                        this.SET_DOB(response.DOB);
                        this.SET_FILE_NO(response.FILE_NO);
                        this.SET_AFTER_LOGIN_PAGE_URL(response.AFTER_LOGIN_PAGE);

                        let summaryFlag = response.SUMMARY_FLAG === 'Y' ? 'Y' : 'N';
                        this.SET_SUMMARY_FLAG(summaryFlag);
                        this.$nuxt.$loading.finish();
                        return;
                    }
                    this.$toast.error(response.RETURN_MESSAGE);

                }catch (e){

                    this.$nuxt.$loading.finish();
                    console.log(e.status);

                    this.$toast.error(e.data.message, {
                        position: "top-center",
                        duration : 7000,
                    });
                    //this.$toast.show('Error', {icon: "fingerprint"});
                    //this.$toast.error('Something went wrong, Try again later.');
                }
            },
            async getDobAndAccountNo2(){

                let payloads = {
                    insta_id   :  41,
                };

                try {
                    let response = await this.$axios.$post(`http://192.168.10.95/nitin/insta-loan-micro-services/public/v1/mini-form/documents`, payloads);

                    console.log("@@response : ");
                    console.log(response);

                }catch (e){
                    console.log(e);
                }
            },
            /*setRefcode(){
                this.SET_REF_CODE(this.$route.query.ref_code);
            },
            setSourceCode(){
                this.SET_SOURCE_CODE(this.$route.query.source_code);
            },
            setCampaignMode(){
                this.SET_CAMPAIGN_MODE(this.$route.query.campaignmode);
            },
            abortIfRefcodeAndSourceCodeNotExist(){

                if( this.$route.query.ref_code === undefined || this.$route.query.source_code === undefined){
                    alert('ref_code not set');
                    return;
                }

                this.$nextTick(() => {
                    this.$nuxt.$loading.start();
                });

                this.setRefcode();
                this.setSourceCode();
                this.setCampaignMode();
                this.getDobAndAccountNo();
            },*/
            async getAccountList() {

                this.$nuxt.$loading.start();

                const currentVersion = 2;
                let version = localStorage.getItem('version');
                let accountListData = localStorage.getItem('accountListData');

                //if (!version || version < currentVersion) {
                if (!!version && !!accountListData) {
                    this.accountList = JSON.parse(accountListData);
                    this.$nuxt.$loading.finish();
                    return;
                }

                let payloads = {
                    account_number: this.storeFileNo,
                    //account_number: '987456321',
                    date_of_birth: moment(String(this.storeDOB)).format('DD-MMM-YYYY'),
                    module: "LOGIN"
                };

                this.$toast.show('Getting account list... ');

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
                }

                this.$nuxt.$loading.finish();

                /* await this.$axios.$post(`/oauth/accounts`, payloads)
                     .then((response) => {

                         console.log(' response..');
                         console.log(response);

                         this.accountList = response.data;

                         console.log('this.accountList1');
                         console.log(this.accountList);

                         //this.app.$axios.setHeader('JWTAuthorization', `Bearer ${token}`);
                         //Cookie.set('jwt', token);
                         //commit('setAction', { key: 'jwt', value: token });
                         //dispatch('getUser');
                     })
                     .catch(e)
                     {
                         console.log('error catch..');
                         console.log(e.status);
                         console.log(e.data.message);
                     };*/

            },
        },
        mounted(){
        //    this.abortIfRefcodeAndSourceCodeNotExist();
        },
        computed:{
         //   ...mapState(['storeRefCode','storeSourceCode','storeCampaignMode', 'storeFileNo', 'storeDOB']),
        },
        created() {
            console.log('created called .... !');
            //this.abortIfRefcodeAndSourceCodeNotExist();

        },
    }
</script>