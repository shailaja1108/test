function gettotal(){
var std=[{"sid":1,"name":"shailu","m1":88,"m2":95,"m3":67,"m4":78,"m5":77},
{"sid":3,"name":"sahithy","m1":75,"m2":85,"m3":47,"m4":78,"m5":67},
{"sid":4,"name":"pt","m1":75,"m2":45,"m3":97,"m4":78,"m5":67},
{"sid":5,"name":"kalyani","m1":85,"m2":25,"m3":56,"m4":78,"m5":67}]
std.forEach(function(val,index){
console.log({name:val.name,total:val.m1+val.m2+val.m3+val.m4+val.m5})
})
}
gettotal()


var emp={
    "eid":101,
    "ename":"shailu",
    "grade":"A",
    "sal":35000,
    "position":function(){
    if(emp.sal<=20000)
    return("team leader");
    if(emp.sal>30000)
    return("senior developer");
    if(emp.sal>=10000)
    return("developer");
    }
    }
    var a=emp.position();
    console.log(a);
    
    
