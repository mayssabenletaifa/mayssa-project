function myFunction() {
    document.getElementById("r").style.color = "red";
}


function underline() {
    document.getElementById("myP").style.textDecoration = "underline";
}
function bold(){
    document.getElementById("myP").style.fontWeight ="900";
}
function italic(){
    document.getElementById("myP").style.fontStyle="italic";
}
function font(){
    document.getElementById("myP").style.fontFamily=document.getElementById("font").value;
}
function Size(){
    document.getElementById("myP").style.fontSize= document.getElementById("size").value;
}

function Color(){

    document.getElementById("myP").style.color= document.getElementById("color").value;
}

function background(){

    document.getElementById("myP").style.background= document.getElementById("background").value;
}
