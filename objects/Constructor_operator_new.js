let admin1={
    name:'sham',
    age:21
};
let admin2={
    name:'s',
    age:22
};
let admin3={
    name:'sh',
    age:23
};
function User(name,age){
    this.name=name,
    this.age=age
};
let u1=new User('s',2);
alert(u1.name);
alert(u1.age);
let person=new function(){
    this.name='j',
    this.age=20
};
alert(person.name);
function Obj(){
    alert(new.target)
};
Obj();
let o=new Obj();
alert(o);
function User5(name){
    if(!new.target){
        return(new User5(name))
    };
    this.name=name
};
let u= new User5('l');
alert(User5('k').name);//or :u.(name);
function Human(){
    this.name='b';
    return{
        name:'v'
    }
};
let h=new Human();
alert(h.name);
function Human2(){
    this.name='j';
    return 'h'//or: return 5 , True, null, undefined
};
let h2=new Human2();
alert(h2.name);
//let user=new User();===let user=new User; :Without parameters
function User6(name){
    this.name=name;
    this.sayHi=function(){
        alert('hello'+' '+this.name)
    }
};
let u6=new User6('sham-af');
u6.sayHi();
function A(){};
function B(){};
let a= new A();
let b=new B();
alert(a==b);
let object={};
function Obj1(){
    return object
};
function Obj2(){
    return object
};
let obj1=new Obj1();
let obj2=new Obj2();
alert(obj1==obj2);
//ex:calculator
function Calculator(){
    this.read=function(){
        this.a=+prompt('enter a num1 :',0);
        this.b=+prompt('enter a num2 ',0)
    };
    this.sum=function(){
        return this.a+this.b
    };
    this.mull=function(){
        return this.a*this.b
    }
};
let c= new Calculator();
c.read();
alert(c.sum());
alert(c.mull());
function Box(start){
    this.total=start;
    this.add=function(){
        this .total+=+prompt('enter a num',0);
    }
};
let box=new Box(1);
box.add();
box.add();
alert(box.total);

