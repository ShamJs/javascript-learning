let user1={name:'sham',age:21};
alert(Boolean(user1));
let user2={};
alert(Boolean(user2));
let user3={name:'marah'};
alert(user3);
alert(String(user3));
let user4={};
alert(user4-4);
alert(Number(user4));
let user5={num:5};
alert(user5-4);
alert(user5.num-4);
alert(Number(user5));
let user6={name:'a'};
let newUser={};
newUser[user6]=12;
for (key in newUser){
    alert(newUser[key])
};
alert(newUser);
alert(newUser[user6]);
let user7={name:'m'};
alert(Number(user7));
alert(+user7);
let date=new Date();
alert(typeof(date));//object
let date1=new Date(2026,6,25);
let date2=new Date(2026,6,20);
alert(date1-date2);//432000000 :obj date to num : 5 day * 24 hour *60 min * 60 sec * 1000 msec
let user8={
    name:'d'
};
alert(user8+50);
alert(user8+'hi');
let user9={name:'s',age:21,
    [Symbol.toPrimitive](hint){
        return this.name;
}};
alert(user9);
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
alert(user10);
alert(+user10);
alert(user10+'hi');
alert(user10+6);
let user11={name:'sa',age:11,
    [Symbol.toPrimitive](hint){
        return (hint =='string'?this.name:this.age)
    }
};
alert(user11);
alert(+user11);
alert(user11+'l');
alert(user11+5);
//now :Symbol.toPrimitive but old :toString , valueOf
let user12={name:'randa' , age:22 ,
    toString(){
        return this.name
    },
    valueOf(){
        return this.age
    }
};
alert(user12);
alert(+user12);
alert(user12+18);
let obj={
    toString(){
        return '2'
    }
};
alert(obj*2);
alert(obj+2);
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