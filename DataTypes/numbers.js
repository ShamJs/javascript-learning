let num1=10;
alert(num1);
let num2=15.5;
alert(num2);
let num3=-6.7;
alert(num3);
let num4=15438654n
alert(num4);
alert(1_000_000);
alert(5.3e3);
alert(1e-2);
alert(12.2e-4);
alert(255);
alert(0xff);
alert(0x1f);
alert(0b1101);
alert(0o11);
let a=0b11111111;
let b=0o377;
alert(a==b);
let num5=255;
alert(num5.toString(16));
let num6=26;
alert(num6.toString(16));
let num7=255;
alert(num7.toString(2));
let num8=21;
alert(num8.toString(2));
alert(Math.floor(3.1));
alert(Math.floor(-1.1));
alert(Math.ceil(3.1));
alert(Math.ceil(-1.1));
alert(Math.round(3.5));
alert(Math.round(-1.1));
alert(Math.trunc(3.1));
alert(Math.trunc(-1.1));
let num9=1.23456;
alert(Math.floor(num9*1000)/1000);
let num10=12.34;
alert(num10.toFixed(1));
alert(num10.toFixed(3));
alert(0.2+0.1==0.3);//false
alert(0.2+0.1);
let sum1=0.1+0.2;
alert(sum1.toFixed(2));
let sum2=0.1+0.2;
alert(+sum2.toFixed(2));
alert(0.2*10+0.1*10)/10;
alert(0.28*100+0.12*100)/100;
alert(9999999999999999);//10000000000000000
alert(1e500);
-alert(1e500);
alert(isNaN(NaN));
alert(isNaN('str'));
alert(NaN==NaN);//false
alert(NaN===NaN);//false
alert(isFinite(15));
alert(isFinite('12'));
alert(isFinite('str'));
alert(isFinite(Infinity));
alert(isFinite(NaN));
let numb=+prompt('Enter your number : ','0');
alert(isFinite(numb));
alert(isFinite(""));
alert(Number(""));
alert(+(""));
alert(Object.is(NaN,NaN));
alert(+0==-0);
alert(Object.is(+0,-0));
alert(parseInt('100px'));
alert(parseFloat('10.5px'));
alert(parseInt('10.5px'));
alert(parseFloat('6.0px'));
alert(parseFloat('6.3.5'));
alert(parseFloat('a123'));
alert(parseInt('2n9c', 36));
alert(parseInt('0xff'));
alert(Math.random());
alert(Math.random());
alert(Math.max(1,-1,10,7));
alert(Math.min(1,-1,10,7));
alert(Math.pow(2,10));
let numb1=+prompt('enter first number : ','0');
let numb2=+prompt('enter secound number : ','0');
let sum=numb1+numb2;
alert(sum);
alert(6.35.toFixed(1));
alert(1.35.toFixed(1));
alert(Math.round(6.35*10)/10);
function v(){
    let num;
    do{
        num=prompt('enter a num','0')
    }
    while(!isFinite(num));
    if (num===null || num===''){
        return null
    }
    return +num
};
alert(v());
let i=0;
while(i<10){
    i+=0.2;
    alert(i)
    if(i>9.8&&i<10.2)
        {alert(i)};
};
function randomNum(min,max){
    return min+Math.random()*(max-min)
};
alert(randomNum(1,5));
alert(Math.random(1,5));//0 to 1
function rand1(min,max){
    return Math.round((min-0.5+Math.random()*(max-min+1)))
};
alert(rand1(1,3));
function rand2(min,max){
    return Math.floor((min+Math.random()*(max-min+1)))
};
alert(rand2(1,3));