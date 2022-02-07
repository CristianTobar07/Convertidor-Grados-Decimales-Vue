
const app = Vue.createApp({
    data(){
        return {
            title: "CONVERTIDOR",
            degree:  "",
            minutes: "",
            seconds: "",
        }
    },
    computed:{
        convertir(){
            var a = parseFloat(this.degree);
            var b = parseFloat(this.minutes/60);
            var c = parseFloat(this.seconds/3600);
            var res = a+b+c;
            return (res.toFixed(4));
        }
    }

});
