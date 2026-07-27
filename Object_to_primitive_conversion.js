//in boolean always true
let user1={name:'sham',age:21};
alert(Boolean(user1));
//ex2
let user2={};
alert(Boolean(user2));
//object to string
let user3={name:'marah'};
alert(user3);//[object object]    Automatically
alert(String(user3));//[object object]    Manually
//object to number
let user4={};
alert(user4-4);//nan
alert(Number(user4));//nan
let user5={num:5};
alert(user5-4);//nan
alert(user5.num-4);//5-4=1
alert(Number(user5));//nan
//hint:str,num,default
//1-hint:string
let user6={name:'a'};
let newUser={};
newUser[user6]=12;
for (key in newUser){
    alert(newUser[key])//[object object]
};
alert(newUser);//[object object]
alert(newUser[user6]);//12
//2-hint:number

let user7={name:'m'};
alert(Number(user7));//nan
alert(+user7);//nan
//obj date
let date=new Date();
alert(typeof(date));//object
//ex2
let date1=new Date(2026,6,25);
let date2=new Date(2026,6,20);
alert(date1-date2);//432000000 :obj date to num : 5 day * 24 hour *60 min * 60 sec * 1000 msec
//3-hint:default num? or str?
let user8={
    name:'d'
};
alert(user8+50);// [object object]50
alert(user8+'hi');// [bject object]hi
//Symbol.toPrimitive
let user9={name:'s',age:21,
    [Symbol.toPrimitive](hint){
        return this.name;
}};
alert(user9);//s
//More than one return statement :
let user10={
    name:'shsh',age:21,
    [Symbol.toPrimitive](hint){
        if(hint=='string'){
            return this.name
        };
        if(hint=='number'){
            return this.age
        };
        return this.age
    }
};
alert(user10);//shsh
alert(+user10);//21
alert(user10+'hi');//shshhi
alert(user10+6);//shsh6
//short if/else to ?:
let user11={name:'sa',age:11,
    [Symbol.toPrimitive](hint){
        return (hint =='string'?this.name:this.age)
    }
};
alert(user11);//sham
alert(+user11);//11
alert(user11+'l');//11l
alert(user11+5);//16
//now :Symbol.toPrimitive but old :toString , valueOf
let user12={name:'randa' , age:22 ,
    toString(){
        return this.name
    },
    valueOf(){
        return this.age
    }
};
alert(user12);//randa
alert(+user12);//22
alert(user12+18);//30
// + and *
let obj={
    toString(){
        return '2'
    }
};
alert(obj*2);//'2'*2 = 2*2 = 4
alert(obj+2);//'2'+ 2 = 22
//External example:
let name=prompt('write your name :');
let age=+prompt('enter your age','18');
let student={
    name:name,
    age:age,
    num:[20,30,35],
    avg(){
        let sum=0;
        for(x in this.num){
            sum+=this.num[x];
        };
        return sum/(x+1)
    },
    textStudent(){
        return `My name is ${this.name} and I am ${this.age} years old`
    }
};
for (key in student){
    alert(student[key])
};
alert(student.avg());
alert(student.textStudent());