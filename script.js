function calculate(){


let current =
Number(document.getElementById("current").value);



let target =
Number(document.getElementById("target").value);



let price = (target-current)*0.8;



if(price < 0){

price = 0;

}



document.getElementById("price").innerHTML =
price.toFixed(2);



}