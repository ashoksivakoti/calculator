let inputScreen = document.getElementById("user-input");
let outputScreen = document.getElementById("result")

function display(num){
    inputScreen.value += num;

}

button.addEventListner('keydown',(e)=>{
    inputScreen.value += num;
})


function calculate(){
    try{
        outputScreen.value = eval(inputScreen.value)
    }
    catch(err){
        alert('Invalid format')
    }
}

function cal(){
    inputScreen.value = "";
    outputScreen.value = "";
}

function del(){
    inputScreen.value = inputScreen.value.slice(0,-1);
    console.log(inputScreen.value)
}