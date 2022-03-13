interface AbstractPerson{
    see(who: string) :void
    speak(sound: string) : void
}

class Mother implements AbstractPerson{
    see(who: string): void {
        console.log(`my role is mom i see ${who}`)
    }
    speak(sound: string): void {
        console.log( `my role is mom : ${sound}`)
    }
    
}

class Fahter implements AbstractPerson{
    see(who: string): void {
        console.log(`my role is father i see ${who}`)
    }
    speak(sound: string): void {
        console.log( `my role is father : ${sound}`)
    }
}

type ParentType = "Father" | "Mother"

export const createFamilyFactory = (type: ParentType) =>{
    
    if(type === 'Father'){
        return new Fahter()
    }

    if(type === 'Mother'){
        return new Mother()
    }
}