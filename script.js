const vm = new Vue({
    el: "#app",
    data: {
        advice: ""
    },
    methods: {
        getAdvice(){
            fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(json => {
                this.advice = json.slip.advice
            })
        }
    }
})

const vm2 = new Vue({
    el: "#app2",
    data: {
        info: ""
    },
    methods: {
        getAutor(){
            if(input.value == ""){
                autor = "machado de assis"
            }else{
                autor = input.value.split(' ').join('+')
            }

            fetch(`https://pensador-api.vercel.app/?term=${autor}`)
            .then(response => response.json())
            .then(json => {
            const phraseIndex = Math.floor(Math.random() * json.frases.length - 1);
            this.info = json.frases[phraseIndex]
            })
        }
    }
})