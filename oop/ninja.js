class Ninja{
    //Member variables / Constructors
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    //other methods
    sayName = () => console.log(this.name)

    showStats = () =>{
        console.log(
            this.name,
            this.strength,
            this.speed,
            this.health
        )
    } 

    drinkSake = () => {
        console.log(
        this.health += 10
        )
    }

}

class Sensei extends Ninja{
    //Member variables / Constructors
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
        //other methods
    speakWisdom(){
        console.log("A wise Message")
        this.drinkSake()
    }

}



const newNinja = new Ninja("Tyray", 100)
newNinja.showStats()
newNinja.drinkSake()

const newSensei = new Sensei("jack")
newSensei.showStats()
newSensei.speakWisdom()
