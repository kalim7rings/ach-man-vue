<template>
    <date-pick
            v-model="date"
            :format="'DD-MM-YYYY'"
            :isDateDisabled="isFutureDate"
            :editable="true"
            :startWeekOnSunday="true"
    ></date-pick>
</template>

<script>
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';

    export default {
        components: {DatePick},
        data: () => ({
            date: ''
        }),
        methods: {
            isFutureDate(date) {
                const currentDate = new Date();
                return date > currentDate;
            }
        }
    };
</script>