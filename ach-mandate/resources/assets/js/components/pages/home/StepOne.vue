<template>
    <div class="container-fluid main_bg">
        <div class="main_card pl50">
            <div class="row margin0 pt-3">
                <div class="col-lg-8">
                    <div class="ACh_main_title"> ACH <span class="bold">E- Mandate</span> Registration </div>
                    <span class="ACh_main_title_sub"> We provide the facility to ease the process of paying monthly installments. </span>
                </div>
                <div class="col-lg-4 text-right">
                    <router-link :to="{path: '/step-two'}" tag = 'button' class="main_btn_common btn_fix">NEXT</router-link>

                </div>
            </div>
            <div class="row margin0 mt-5 mr-5 mb-5">
                <div class="col-lg-3 mob_text_center">
                    <img :src="bankIcon" class="w60">
                    <div class="ach_info_text paddinglr15 mt-3"> <span class="short-line"></span> ACH mandate has to be issued from the Bank Account <strong>registered with HDFC Ltd.</strong> as Repayment Accounts as appearing in the Loan Sanction Letter. In case you want to change your bank account please visit the nearest HDFC Ltd. Service Center. </div>
                </div>
                <div class="col-lg-3 mob_text_center">
                    <img :src="otpIcon" class="w60">
                    <div class="ach_info_text paddinglr15 mt-3"> <span class="short-line"></span> Mobile Number/Email Id registered with HDFC Ltd. should be active for <strong>receiving the OTP for ACH Registration.</strong> You may contact any of HDFC Ltd. offices to update contact details if necessary. </div>
                </div>
                <div class="col-lg-3 mob_text_center">
                    <img :src="ifscIcon" class="w60">
                    <div class="ach_info_text paddinglr15 mt-3"> <span class="short-line"></span> <strong>IFSC and MICR</strong> should be verified or updated as mentioned on your Cheque/Passbook, whichever is latest. </div>
                </div>
                <div class="col-lg-3 mob_text_center">
                    <img :src="emiIcon" class="w60">
                    <div class="ach_info_text paddinglr15 mt-3"> <span class="short-line"></span> Maximum Amount per mandate will be twice the EMI (i.e.,EMI X 2 ) or Rs.1 Lakh whichever is lower. The 'maximum amount' is to take care of changes in EMI during the term of the loan. However your account <strong> will normally be debited with 1 EMI per month.</strong> </div>
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
                <div class="col-lg-3 text-center mt-5">
                    <img :src="emailReceiveIcon">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                emailReceiveIcon : `${window.achMandate.baseUrl}/images/ach-mandate/email_receive.png`,
                emiIcon : `${window.achMandate.baseUrl}/images/ach-mandate/EMI_img.png`,
                ifscIcon : `${window.achMandate.baseUrl}/images/ach-mandate/IFSC_img.png`,
                otpIcon : `${window.achMandate.baseUrl}/images/ach-mandate/OTP_img.png`,
                bankIcon : `${window.achMandate.baseUrl}/images/ach-mandate/bank_img.png`,
            }
        }
    }
</script>