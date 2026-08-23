let arr1=new Array();
let arr2=[];
let arr3=['apple','banana','lemon'];
alert(arr3[0]);
alert(arr3[1]);
alert(arr3[2]);
arr3[2]='orange';
arr3[3]='grapes';
alert(arr3);
alert(arr3.length);
let arr4=['sham',true,function(){return('hi')},{name:'marah'}];
alert(arr4[3].name);
alert(arr4[2]());
alert(arr4.length);
let arr5=['a','b','c'];
arr5.push('cc');
alert(arr5);
arr5.pop();
alert(arr5);
arr5.shift();
alert(arr5);
arr5.unshift('aa');
alert(arr5);
let arr6=[1,2,3,4];
alert(arr6.pop());
let x=arr6.shift();
alert(x);
arr6.unshift(1,1,1);
arr6.push(3,2,1);
alert(arr6);
let arr7=['a','b','c'];
let arr_2=arr7;
arr7.push('v');
alert(arr_2);
let arr_1=[]
arr_1[99999] = "A";
arr_1.name = "Sham";
let number=[1,2,3,4,5];
for (let i=0;i<number.length;i++){
    alert(number[i])
};
for (let num of number){
    alert(num)
};
for (let j in number){
    alert(number[j])
};
let arr8=[];
arr8[123]='app';
alert(arr8.length);
let arr9=[9,6,3,0];
alert(arr9.length);
arr9.length=2;
alert(arr9);
arr9.length=5;
alert(arr9);
arr9.length=0;
alert(arr9);
let array_1=new Array('apple','banana');
alert(array_1);
let array_2=new Array(2);
alert(array_2);
alert(array_2.length);
alert(array_2[0]);
let array_3=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
alert(array_3[1][1]);
let array_4=[2,4,6,8];
alert(String(array_4));
alert([]+1);
alert([8]+12);
alert([1,2]+7);
let a0=[];
let b=[];
alert(a0==b);
let a1=[];
let b1=a1;
alert(a1==b1);
alert([]==0);
alert([]=='0');
let a2=[1,2,3];
let b2=[1,4,3];
alert(a2==b2);
alert(a2===b2);
for (let i=0;i<a2.length;i++){
    if (a2[i]!=b2[i]){
        alert('no')
    }
    else{
        alert(`yes for a ${a2},${b2}`)}
};
let fruits_1=['apple','banana'];
let fruits_2=fruits_1;
fruits_2.push('orange');
alert(fruits_1.length);
let fruits_3=['banana','apple'];
let fruits_4=['banana','apple'];
fruits_4.push('orange');
alert(fruits_3.length);
alert(fruits_4.length);
let numb=[1,2];
numb.push(3);
numb[Math.floor((numb.length-1)/2)]=8;
alert(numb.shift());
numb.unshift(4,5);
alert(numb);
let numb1=[1,2];
numb1.push(function(){
    alert(this)
});
alert(numb1[2]());
function a(){
    let numbers=[];
    while(true){
        let ent=prompt('enter your number', '0');
        if(ent===''||ent===null||!isFinite(ent))break;
        numbers.push(+ent)
    }
    let sum=0;
    for(num of numbers){
        sum+=num
    }
    return sum
};
alert(a());
function aa(arr){
    let sum=0;
    let max=0;
    for(let i of arr){
        sum+=i;
        max=Math.max(sum,max)
        if(sum<0){
        sum=0
    }}
    return max
};
alert(aa([-1,4,8,0,11]));