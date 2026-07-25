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
//

