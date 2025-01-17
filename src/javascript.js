const display = document.getElementById("display");

function append(input){
    display.value += input;

}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    
    catch(error){
        display.value='ERROR';
    }
    
}

function cleardisplay(){
    
        display.value="";
    
}

function del(){
    display.value = display.value.slice(0, -1);
}
