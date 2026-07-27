let user1={address:{phone:7}};
alert(user1.address?user1.address.phone:undefined);
alert(user1.name?user1.name.lastName:undefined);
let html=document.querySelector('.elem')?document.querySelector('.elem').innerHTML:undefined;
alert(html);
let user2={};
alert(user2.name && user2.name.lastName);
let user3=null;
alert(user3?.name.name2);
let user4=null;
let x=0;
user4?.num(0);
alert(x);
let user4={
    name:'go',
    num(x1){
        x1++;
        return x1
    }
};
alert(user4?.num(0));
let user5={
    name:'sham',
    num(){
        x2++
    }
};
let x2=0;
user5?.num();
alert(x2);
let user6={
    name:'sham',
    num(x3){
        x3++
        return x3
    }
};
let x3=0;
alert(user6.num(x3));
let admin1={
    go(){
        return('hi')
    }
};
alert(admin1.go?.());
let admin2={};
alert(admin2.go?.());
let human1={
    name:'shsh'
};
let human2=null;
let key='name';
alert(human1?.[key]);
alert(human2?.[key]);
//with delete bot not edit
//delete g?.name; error not found
let person={name:'john', age:21};
delete person?.name;
for(key in person){
    alert(person[key])
};
