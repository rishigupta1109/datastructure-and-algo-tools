class Stack{
    arr=[];
    top;
    size;
   constructor(s){
     this.size=s;
     this.top=-1;
   }
   push(value){
     this.arr[++(this.top)]=value;
   }
   pop(){
     let x=this.arr[this.top][0];
     --this.top;
     return x;
   }
   isEmpty(){
     if(this.top==-1){
       return true;
     }
     else{
       return false;
     }
   }
   print(){
     for(let i=0;i<=this.top;i++){
       console.log(this.arr[i]);
     }
   }
 
 }
const reverse=(s)=>{
    let string="";
    for(let i=s.length-1;i>=0;i--){
        string =string.concat(s[i]);
    }
    return string;
}
 const infixToPrefix=(s)=>{
     let Answer_object={outputString:"",outputStack:[],outputStringArray:[]};
     s=reverse(s); 
     let stack=new Stack(s.length);
     let string="";
     for(let i=0;i<s.length;i++){
       if(s[i]==='*'||s[i]==='/'){
         let arr=[s[i],2];
         if(stack.isEmpty()||stack.arr[stack.top][1]<=2){
           stack.push(arr);
         }
         else{
           let x=stack.top;
           for(let i=0;i<=x;i++){
            if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]==')'){
              break;
            }
             string=string.concat(stack.pop());
           }
           stack.push(arr);
         }
        
       }
       else if(s[i]==='+'||s[i]==='-'){
         let arr=[s[i],1];
         if(stack.isEmpty()||stack.arr[stack.top][1]<=1){
           stack.push(arr);
         }
         else{
           let x=stack.top;
           for(let i=0;i<=x;i++){
            if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]==')'){
              break;
            }
               let y=stack.pop();
             
             string=string.concat(y);
           }
           stack.push(arr);
         }
       
       }
       else if(s[i]==='^'){
         let arr=[s[i],3];
         if(stack.isEmpty()||stack.arr[stack.top][1]<=3){
           stack.push(arr);
         }
         else{
           let x=stack.top;
           for(let i=0;i<=x;i++){
            if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]==')'){
              break;
            }
             string=string.concat(stack.pop());
           }
           stack.push(arr);
         }
       
       }
       else if(s[i]===')'){
         let arr=[s[i],0]
        stack.push(arr); 
     }
     else if(s[i]==='('){
      let x=stack.top;
      for(let i=0;i<=x;i++){
        let popped=stack.pop();
        if(popped===')'){
          break;
        }
        string=string.concat(popped);
        }
     }
       else{
         string=string.concat(s[i]);
        
       }
       Answer_object.outputStringArray.push(string);
       if(stack.top!=-1){
         Answer_object.outputStack.push([...stack.arr]);
       }
       else{
        Answer_object.outputStack.push([[" ",0]]);
       }

     }
     let x=stack.top;
     for(let i=0;i<=x;i++){
       string=string.concat(stack.pop());
     }
     string=reverse(string);
     Answer_object.outputString=string;
     return Answer_object;
 }
 const infixToPostfix=(s)=>{
   let Answer_object={outputStack:[],outputStringArray:[],outputString:""};
   let stack=new Stack(s.length);
   let string="";
   for(let i=0;i<s.length;i++){
     if(s[i]=='*'||s[i]=='/'){
       let arr=[s[i],2];
       if(stack.isEmpty()||stack.arr[stack.top][1]<2){
         stack.push(arr);
       }
       else{
         let x=stack.top;
         for(let i=0;i<=x;i++){
           if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]=='('){
            break;
          }
           string=string.concat(stack.pop());
         }
         stack.push(arr);
       }
     }
     else if(s[i]=='+'||s[i]=='-'){
       let arr=[s[i],1];
       if(stack.isEmpty()||stack.arr[stack.top][1]<1){
         stack.push(arr);
       }
       else{
         let x=stack.top;
         for(let i=0;i<=x;i++){
          if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]=='('){
            break;
          }
           string=string.concat(stack.pop());
         }
         stack.push(arr);
       }
     }
     else if(s[i]=='^'){
       let arr=[s[i],3];
       if(stack.isEmpty()||stack.arr[stack.top][1]<3){
         stack.push(arr);
       }
       else{
         let x=stack.top;
         for(let i=0;i<=x;i++){
          if(stack.arr[stack.top][1]<arr[1]||stack.arr[stack.top][0]=='('){
            break;
          }
           string=string.concat(stack.pop());
         }
         stack.push(arr);
       }
     }
     else if(s[i]==='('){
      let arr=[s[i],0]
      stack.push(arr); 
     }
     else if(s[i]===')'){
      let x=stack.top;
      for(let i=0;i<=x;i++){
        let popped=stack.pop();
        if(popped==='('){
          break;
        }
        string=string.concat(popped);
      }
     }
     else{
       string=string.concat(s[i]);
     }
     Answer_object.outputStringArray.push(string);
       if(stack.top!=-1){
         Answer_object.outputStack.push([...stack.arr]);
       }
       else{
        Answer_object.outputStack.push([[" ",0]]);
       }

 
   }
   let x=stack.top;
   for(let i=0;i<=x;i++){
     string=string.concat(stack.pop());
   }
   Answer_object.outputString=string;
   return Answer_object;
 
 }


 export {infixToPrefix};
 export {infixToPostfix};
export {reverse};