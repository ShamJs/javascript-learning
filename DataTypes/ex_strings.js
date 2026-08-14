function name1(str1){
    if (!str1) return str1;
    return str1[0].toUpperCase()+str1.slice(1)
};
alert(name1('sham'));
alert(name1('marah'));
alert(name1(''));
function name2(str2){
    let strlower=str2.toLowerCase();
    return strlower.includes('go')||strlower.includes('hi')
};
alert(name2('Hitf'));
alert(name2('gone'));
alert(name2('jydx'));
function name3(str3,len){
    return str3.length>len?str3.slice(0,len-1)+'...':str3
};
alert(name3('hello',3));
alert(name3('hi',3));
function money(str){
    return +str.slice(1)
};
alert(money('$123'));