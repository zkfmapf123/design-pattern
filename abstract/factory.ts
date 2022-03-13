interface AbstractProduct{
    method(params?: any) : void
}

export class A implements AbstractProduct {
    method(params ?:any){
        return "Method of A"
    }

    aaa(){
        return 'aaa'
    }
}

export class B implements AbstractProduct{
    method(params ?:any){
        return "Method of B"
    }

    bbb(){
        return 'bbb'
    }
}

export function createFactory(type: string) : AbstractProduct{

    if(type === 'A'){
        return new A()
    }else if(type === 'B'){
        return new B()
    }else{
        return new A()
    }
}