let name='sham';
let age=21;
let isTrue=true;
let bigNum=123432134n;
let box1=null;
let box2=undefined;
let id=Symbol('hi');
let obj1={
    name:'sham',
    age:21
};
let obj2={name:'sham',
    age:21,
    sayHi(){
        alert('hello')
    }
};
obj2.sayHi();
let user='sh';
alert(user.toUpperCase());
let number=1.2345;
alert(number.toFixed(2));
let zero1=0;
if(zero1){
    alert('hi')
};
let zero2=new Number(0);
if(zero2){
    alert('hi')
};
alert(String(2));
alert(Number('3'));
alert(Boolean(0));
//alert(null.test); or alert(undefined.test); => errorType
let userA='hani';
userA.age=21;
alert(userA.age);// in 'use strict': TypeError
let userB={name:'hani'};
userB.age=21;
alert(userB.age);