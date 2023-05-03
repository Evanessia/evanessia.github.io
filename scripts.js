/*eslint-env browser*/

function onClickButton() {
    if(document.getElementById("Info").innerHTML == "Hello my friend!"){
        document.getElementById("Info").innerHTML = "Here text."
    }else{
        document.getElementById("Info").innerHTML = "Hello my friend!"
    }
    
}