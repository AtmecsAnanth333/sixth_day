export var x:string="Hi there";
export function myfunc():void{
   console.log("Its me");
}
export class myclass{
   a:number;
   b:number;
   constructor(a:number,b:number){
      this.a=a;
      this.b=b;
   }
   add=()=>{
      return(this.a+this.b);
   }
}
