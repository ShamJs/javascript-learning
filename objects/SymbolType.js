let id=Symbol('l');
let id1=Symbol('k');
let id2=Symbol('k');
alert(id1==id2);
//alert(id); typeError symbol != string
alert(id.toString());
alert(id.description);
let user={name:'sham', age:21};
let id3=Symbol('hi');
user[id3]=1;//not: user['id3']=1;
alert(user[id3]);
for (key in user){
    alert(user[key])
};
let id4=Symbol();
let user1={
    name:'sh',
    [id4]:2
};
alert(user1[id4]);
//ex3
let id5='age';
let user2={
    name:'hi',
    [id5]:11
};
alert(user2[id5]);
let id6=Symbol();
let user3={
    lastName:'ghana',
    age:21,
    [id6]:1234
};
alert(Object.keys(user3));
let id7=Symbol();
let user4={
    name:'hello',
    [id7]:321
};
let copy=Object.assign({},user4);
alert(copy[id7]);
alert(copy.name);
alert(Object.keys(user4));
let id01=Symbol('f');
let id02=Symbol('f');
alert(id01==id02);
let id03=Symbol.for('f');
let id04=Symbol.for('f');
alert(id03==id04);
alert(id04.toString());
alert(Symbol.keyFor(id04));
// if : let id04=Symbol('f); => alert(Symbol.keyFor(id04)); :undefined
/* 
later:
Symbol.iterator :How to loop through the elements in order
Symbol.toPrimitive :defines how an object is converted into a primitive value such as a string or a number
*/




