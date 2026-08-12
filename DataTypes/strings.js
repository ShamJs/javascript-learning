let name1="sham";
alert(name1);
let name2='john';
alert(name2);
let name3=`hello ${name1} welcome`;
alert(name3);
function sumNum(a,b){
    return a+b
};
alert(`1+2= ${sumNum(1,2)}`);
alert(`*Name1:Sham*
*Name2:Marah*`);
alert("a\nb");
alert("a\tb");
alert("abcd\rdcba");
alert('hi\vhi');
alert("\u{1F600}");
alert('hello\\hi');
alert('hello\"hi');
alert('hello\'hi');
alert('[ab\bbcd');
let str1=`a
b`;
let str2='a\nb';
alert(str1==str2);
alert('my \n'.length);
let user='sham';
alert(user[0]);
alert(user.charAt(0));
alert(user[4]);
alert(user.charAt(4));
alert(user.length-1);
let user_name='sham af';
for(char in user_name){
    alert(user_name[char])
};
let str_1='Hi';
str_1[0]='h';
alert(str_1[0]);
str_1='h'+str_1[1];
alert(str_1);
alert('sham'.toUpperCase());
alert('SHAM'.toLowerCase());
alert('sham'[1].toUpperCase());
let str_2="my name is sham";
alert(str_2.indexOf('my'));
alert(str_2.indexOf('k'));
alert(str_2.indexOf('My'));
alert(str_2.indexOf('sham'));
let str_3="hi sama and salma";
alert(str_3.indexOf('sa'));
let str_4='widget with id';
alert(str_4.indexOf('id',2));
let str_5='As s,and as m and as a';
let as='as';
let ind=0;
while(true){
    let str_6=str_5.indexOf(as,ind);
    if(str_6==-1)break;
    alert(str_6);
    ind=str_6+1
};
let str_6='As s as h as a as m';
let as1="as";
let ind2=0;
while((ind2=str_6.indexOf(as1,ind2+1))!=-1){
    alert(ind2)
};
let str_7='ok sham and shams';
alert(str_7.lastIndexOf('sham'));
let str_8="where are you from?"
if (str_8.indexOf('where')){
    alert('ok')
}
else{alert('go')};
if (~str_8.indexOf('where')){
    alert('yes')
}
else{
    alert('no')
};
if (str_8.indexOf('where')!=-1){
    alert('gone')
}
else{
    alert('not')
};
alert(~1);
let name='sham af';
alert(~(name.indexOf('sham')));
alert(~(name.indexOf('j')));
if (~name.indexOf('sham')){
    alert('okey')
}
else{
    alert('not')
};
let name_1='welcome mr john';
alert(name_1.includes('welcome'));
alert(name_1.includes('welcome',3));
alert('hello'.startsWith('he'));
alert('hi sham'.endsWith('am'));
let name_2='welcome';
alert(name_2.slice(0,5));
alert(name_2.slice(0,1));
alert(name_2.slice(6,2));
let name_3="hi sham";
alert(name_3.substring(3,1));
alert(name_3.substring(-1,-3));
alert(name_3.substr(2,2));
alert(name_3.substr(-2,2));
alert('a'>'Z');
alert('a'>'z');
alert('Z'.codePointAt(0));
alert('z'.codePointAt(0));
alert(String.fromCodePoint(90));
let str_s='';
for(let i=65;i<220;i++){
    str_s+=String.fromCodePoint(i)
};
alert(str_s);
alert('banana'.localeCompare('apple'));
alert('apple'.localeCompare('apple'));
alert('apple'.localeCompare('banana'));
alert('😂'.length);
alert('𝒳'.length);
alert('𝒳'.charCodeAt(0).toString(16));
alert("s\u0307\u0323");
let s1='s\u0307\u0323'
let s2='s\u0323\u0307';
alert(s1==s2);
alert(s1.normalize()==s2.normalize());
alert('S\u0307\u0323'.normalize()=='\u1e68');