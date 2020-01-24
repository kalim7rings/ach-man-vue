<template>
    <nav class="navbar navbar-light top-head-fix">
        <div class="container-fluid">
            <div class="be-navbar-header"><a class="top-logo-head" href="#"></a></div>
            <div class="be-right-navbar">
                <div class="dropdown" style="display: inline;">
                    <span class="name-first"> A </span>
                    <a class="btn btn-secondary dropdown-toggle toggle-new" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ashish Lad
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="round_icon col-md-1 pull-right" style="display: inline;">
                    <a href="http://www.hdfc.com/helpline" target="_blank">
                        <img :src="phoneIcon" width="35px;">
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        data(){
            return {
                phoneIcon : `${window.achMandate.baseUrl}/images/ach-mandate/phone-icon.png`,
            }
        }
    }



</script>