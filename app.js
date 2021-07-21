var bA=document.querySelector("#billAmount");
var cA=document.querySelector("#cashAmount");

function clickNext(){
    var bill=bA.value;
    
    return bill;
}

function clickSubmit(){
    var billAmt=clickNext();
    var cash=cA.value;
    

    var diff= cash-billAmt;
    console.log(diff);

    if(diff>0){
        
    }
    else if(diff==0){

    }
    else{

    }

}


