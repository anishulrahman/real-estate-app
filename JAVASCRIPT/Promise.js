let chekeven=new Promise((resolve,reject)=>{
    let num=10;
    if (num%2==0) resolve(num);
    else reject("odd");
})
chekeven.then((message)=> console.log(message))
.catch((error)=>console.log(error));