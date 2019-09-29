//首先知道属性位于哪个类
//再去找属性，属性可以看作类里的索引值

export function Emoji(){
    //target就是component,属性作为key值，value跟在key后面

    return function(target:object,key:string){
        let val=target[key];
        const getter=()=>{
            return val;
        }
        const setter=(value:string)=>{
            val=`ll${value}ll`;
        }
        Object.defineProperty(target,key,{
            get:getter,//属性访问符get就是一个函数
            set:setter,
            enumerable:true,//可列举的
            configurable:true//可配置的
        })
    }
}

//es6 return (target:object,key:string)=>{}

//多一个入参：属性描述符 descriptor:PropertyDescriptor
export function Confirmable(message:string){
    return function(target:object,key:string,descriptor:PropertyDescriptor){
        //先把原来的函数放到一个变量里
        const original=descriptor.value;

        descriptor.value=function(...args:any){
            const allow=window.confirm(message);
            if(allow){
                const result=original.apply(this,args);
                return result;
            }
            return null;
        };
        //构造完descriptor后再返回回去
        return descriptor;
    }

}