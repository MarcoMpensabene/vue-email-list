const { createApp } = Vue

createApp({
    data() {
        return {
            randomMail : "" ,
            randomArrayMail: [],
        }
    },
    methods:{
        getData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((mail) => {
                for (let i = 0 ; i < 10 ; i++){
                    this.randomMail = mail.data.response;
                    this.randomArrayMail.push(this.randomMail);
                }})
        }
    },

    created(){
        this.getData();
    },
}).mount('#app')