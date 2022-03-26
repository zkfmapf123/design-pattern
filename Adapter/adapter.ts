export class Adapter {
    public method() : void{
        console.log('method')
    }
}

export interface Target{
    call() : void
}

export class Ada implements Target {
    
    call() : void {
        console.log("before Adapter")
        const a : Adapter = new Adapter()
        a.method()
    }
}

