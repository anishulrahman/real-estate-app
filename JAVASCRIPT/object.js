let obj={
    name:"anish",
    age:25,
    city:"delhi"
};
obj = new Object();
obj.country="india";
delete obj.city;
let obj1 = {
    name:"rahman",
    age:19
};
obj1 = new Object();
let obj2 ={...obj,...obj1};
console.log(obj2);