function addToCart(){
    
    
    return{
        messageAmount:"",
        smallPizzaQTY :0,
        mediumPizzaQTY :0,
        largePizzaQTY :0,
        addSmallPizza :0,
        addMediumPizza :0,
        addLargePizza :0,
        Total :0,
        amount:"",
        addSmall(){
            this.smallPizzaQTY++
            this.addSmallPizza+=48.99;
            current = parseFloat(this.addSmallPizza.toFixed(2))
            this.addSmallPizza=current
            this.Total=parseFloat(this.Total.toFixed(2))
            this.Total +=48.99
        },
        decreaseSmall(){
            if(parseFloat(this.addSmallPizza.toFixed(2))>0){
                this.smallPizzaQTY--
                this.addSmallPizza-=48.99;
                current = parseFloat(this.addSmallPizza.toFixed(2))
                this.addSmallPizza=current
                this.Total=parseFloat(this.Total.toFixed(2))
                this.Total -=48.99
            }
            
        },
        addMedium(){
            this.mediumPizzaQTY++
            this.addMediumPizza+=78.99;
            current = parseFloat(this.addMediumPizza.toFixed(2))
            this.addMediumPizza=current
            this.Total=parseFloat(this.Total.toFixed(2))
            this.Total +=78.99
        },
        decreaseMedium(){
            if(parseFloat(this.addMediumPizza.toFixed(2))>0){
                this.mediumPizzaQTY--
                this.addMediumPizza-=78.99;
                current = parseFloat(this.addMediumPizza.toFixed(2))
                this.addMediumPizza=current
                this.Total=parseFloat(this.Total.toFixed(2))
                this.Total -=78.99
            }
        },
        addLarge(){
            this.largePizzaQTY++
            this.addLargePizza+=158.99;
            current = parseFloat(this.addLargePizza.toFixed(2))
            this.addLargePizza=current
            this.Total=parseFloat(this.Total.toFixed(2))
            this.Total +=158.99;
        },
        decreaseLarge(){
            if(parseFloat(this.addLargePizza.toFixed(2))>0){
                this.largePizzaQTY--
                this.addLargePizza-=158.99;
                current = parseFloat(this.addLargePizza.toFixed(2))
                this.addLargePizza=current
                this.Total=parseFloat(this.Total.toFixed(2))
                this.Total -=158.99
            }
        },
        payPizza(){

            if(this.Total<=this.amount){
                this.messageAmount="'Enjoy' your pizzas"
            }else{
                this.messageAmount="Sorry - that is not enough money!"
            }
        },

    }
}
let lolo = addToCart()
