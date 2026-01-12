const Task=new Promise(function(resolve,reject){
let ans=true;
    if(ans==true){
        resolve("answer is true")
    }
    else{
        reject("answer is false");
    }

})
Task.then(function(msg){
    console.log(msg)
}).catch(function(error){
    console.log(error)
})