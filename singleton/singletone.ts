/**
 * default singleton
 */
export class Singleton {
    
    private static singletone : Singleton

    private constructor(){

    }

    public static getInstance() : Singleton{

        if(!Singleton.singletone){
            console.log("new")
            this.singletone = new Singleton()
        }

        console.log("already new")
        return Singleton.singletone
    }
}

/**
 * example Singletone
 */

export class Person {
    constructor(
        private name :string,
        private age : number
    ){}

    public showInfo(){
        console.log(`name : ${this.name}, age : ${this.age}\n`)
    }

    public setName(name :string){
        this.name = name
    }
}

export class PersonSingletoen {
    
    private static singleToen: Person

    private constructor(){

    }

    public static getInstance(name: string, age:number) : Person{
        
        if(!PersonSingletoen.singleToen){
            this.singleToen = new Person(name, age)
        }

        return PersonSingletoen.singleToen
    }
}