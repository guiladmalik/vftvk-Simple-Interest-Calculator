var slider = document.getElementById ("myrange");
var output = document.getElementById ("value");
var result= document.getElementById("result");
var presult= document.getElementById("principal_result");
var rresult= document.getElementById("range_result");
var yresult= document.getElementById("years_result");
let currentyear= new Date().getFullYear();

var anountContainer = document.getElementById("amount-button");
anountContainer.style.display = "none";

output.innerHTML= slider.value;
 
slider.oninput = function() {
    output.innerHTML= this.value;  
}

var principal = document.getElementById("principal");
var range = slider.value;
var years = document.getElementById("years");



const getRange = (event)=> {
    range = event.target.value;
}

const compute = () =>{ 

    if(Number(principal.value)  < 1 ){
        anountContainer.style.display = "block";
        return;
    }
    presult.innerHTML= "If you deposit "+ principal.value;
    rresult.innerHTML= "at an interest rate of "+range+"%";
    let interest = principal.value * years.value * range /100;
    result.innerHTML ="you will recieve an amount of " +interest;
    let year = currentyear + Number(years.value);
    yresult.innerHTML="in the year "+year+ "."; 

}

const amountButton = () => {
    anountContainer.style.display = "none";
    principal.focus();
}