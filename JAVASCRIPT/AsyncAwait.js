function myfunc(){
    const task=new Promise(function(resolve,reject){
        let name="Anish";
        setTimeout(() => {
            if(name=="Anish"){
            resolve("Logged in....");
        }
        else{
            reject("wrong info...");
        }
        },3000);
    })

    return task;
}
function newfunx(){
    console.log("hello from here")
}
async function getname() {
    console.log("getting information....");
    let result=await myfunc();
    console.log(result);
    
}
newfunx()
getname()
newfunx()