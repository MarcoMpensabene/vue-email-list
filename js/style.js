const { createApp } = Vue

createApp({
    data() {
        return {
        randomMail : [] ,
        }
    },
    methods:{
        getData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((randomMail) => {
                this.randomMail = randomMail.data.response
            })
        }
    },

    created(){
        this.getData();
    },
}).mount('#app')