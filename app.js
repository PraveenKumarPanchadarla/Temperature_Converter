let first=document.getElementById("first");
// let last=document.getElementById("last");



function calc(value){
    if(value!=""){
        x=(value*9/5)+32;
        document.getElementById("last").value= x;
    }
    else{
        document.getElementById("last").value="";
    }
}

function calced(value){
    if(value!=""){
        y= (value-32)*5/9;
        document.getElementById("first").value= y;
    }
    else{
        document.getElementById("first").value="";
    }
}