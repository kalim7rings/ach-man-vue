<template>
    <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
</template>
<script>
    import Datepicker from 'vue-datepicker'

    export default {
        components: {
            'date-picker': Datepicker
        },
        data(){
            return {
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'day',
                    SundayFirst: true,
                    /*week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],*/
                    week: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'DD-MM-YYYY',
                    placeholder: 'DD-MM-YYYY',
                    inputStyle: {
                        'display': 'inline-block',
                    },
                    color: {
                        header: '#ccc',
                        /*header: '#cc0000 ',
                         checked: '#F50057', */
                        headerText: '#f00'
                    },
                    buttons: {
                        /*ok: 'Ok',*/
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5, // 0.5 as default
                    dismissible: true // as true as default
                },
                timeoption: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm'
                },
                multiOption: {
                    type: 'multi-day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format:"YYYY-MM-DD HH:mm"
                },
                limit: [{
                    /*type: 'weekday',*/
                    /*available: [1, 2, 3, 4, 5]*/
                },
                    {
                        type: 'fromto',
                        from: '1947-08-15',
                        to: '2020-01-08'
                    }]
            }
        },
        watch: {
            '$data': {
                handler: function(newValue) {
                    //console.log('Current vaules:' + newValue.FirstName + ' ' + newValue.LastName);
                    console.log(newValue.startTime.time);
                    this.$root.$emit('dob', {
                        dob : newValue.startTime.time,
                    });

                },
                deep: true
            }
        },
        methods:{
            showCheck() {

                console.log(this.startTime.time)

                /*if (this.date.time === '') {
                    this.showDay();
                } else {
                    if (this.option.type === 'day' || this.option.type === 'min') {
                        this.checked.oldtime = this.date.time;
                        this.showDay(this.date.time);
                    } else {
                        this.selectedDays = JSON.parse(this.date.time);
                        if (this.selectedDays.length) {
                            this.checked.oldtime = this.selectedDays[0];
                            this.showDay(this.selectedDays[0]);
                        } else {
                            this.showDay();
                        }
                    }
                }
                this.showInfo.check = true;*/
            },
        }
    }
</script>