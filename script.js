const display = document.getElementById('display');

function displayText(input){
    display.innerHTML += input;
}

function clearText(){
    document.getElementById('display').innerHTML = "";
}

function calculate(){
    try{
        display.innerHTML = eval(display.innerHTML);
    }
    catch(error){
        display.innerHTML = "Error";
    }
}