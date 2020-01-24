<template>
    <div class="container-fluid main_bg">
        <div class="main_card">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left_panel_Convert">
                        <h3 class="sub_title"> Welcome to </h3>
                        <h1 class="main_title"> ACH E-Mandate Registration </h1>
                        <p class="ACH_info_text">
                            Welcome to our <strong> ACH E-Mandate </strong> facility using the authentication of your Bank's Net banking log-in or Debit card PIN, instead of filling up and signing the physical mandate. This facility is available for Savings Bank account with some Banks. <br> Thanks to NPCI and the relevant Banks for this utility.
                        </p>
                        <div class="">
                            <router-link :to="{path: '/step-one'}" tag = 'button' class="main_btn_common">GET STARTED!</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img :src="mainImage" class="img_main">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mainImage : `${window.achMandate.baseUrl}/images/ach-mandate/main_img.png`,
                b : '',
            }
        }
    }
</script>