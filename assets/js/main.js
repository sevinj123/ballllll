const bgcolor=document.getElementsByClassName("bgcolor")[0];
const circle=document.getElementsByClassName("circle")[0];
let en=0;
let hund=0;

//bu hisse backgroundun hundurluyu eni ve rengidir

function setBoxHeight(el){
    var el=el.previousElementSibling;
    console.log(el.value)
    if(el.value<=600){
        console.log(bgcolor)
        console.log(bgcolor.style)
        bgcolor.style.height=el.value+"px";
        hund=parseInt(el.value); //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("600 den boyuk value daxil etmek olmaz");
    }
}

function setBoxWidth(el){
    var el=el.previousElementSibling;
    if(el.value<=400){
        bgcolor.style.width=el.value+"px";
        en=parseInt(el.value); //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("400 den boyuk value daxil etmek olmaz");
    }
}

function setBoxColor(el){
    var el=el.previousElementSibling;
    bgcolor.style.backgroundColor = el.value;
}

//bu hisse topun hundurluyu eni ve rengidir

function setTopHeight(el){
    var el=el.previousElementSibling;
    if(el.value<=90){
        circle.style.height=el.value+"px";
        hund=parseInt(el.value);  //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("90 den boyuk value daxil etmek olmaz");
    }
}

function setTopWidth(el){
    var el=el.previousElementSibling;
    if(el.value<=90){
        circle.style.width=el.value+"px";
        en=parseInt(el.value);  //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("90 den boyuk value daxil etmek olmaz");
    }
}

function setTopColor(el){
    var el=el.previousElementSibling;
    circle.style.backgroundColor = el.value;
}
