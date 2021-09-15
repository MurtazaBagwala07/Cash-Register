var bA=document.querySelector("#billAmount");
var cA=document.querySelector("#cashAmount");
var outp=document.querySelector(".output");
var errorDiv = document.querySelector(".error")

function clickNext(){
    var bill=bA.value;
    if(bill<=0){
      errorDiv.style.display="block";
    }
    else{
      errorDiv.style.display="none";
    var cDisp = document.querySelector(".cashDiv");
    cDisp.style.display="block";
    var tDisp = document.querySelector(".tableDiv");
        tDisp.style.display="none";
    outp.innerHTML=" ";
    
    var resetValues = document.querySelectorAll(".reset");
    // console.log(resetValues)
    for(let i=0;i<resetValues.length;i++){
      resetValues[i].innerHTML="0"
    }
    
    
    return bill;
  }
}

function clickSubmit(){
    var billAmt=clickNext();
    var cash=cA.value;
    
    if(cash<=0){
      errorDiv.style.display="block";
    }
    else{
      errorDiv.style.display="none";
    var diff= cash-billAmt;
    console.log(diff);

    if (diff == 0) {
      var tDisp = document.querySelector(".tableDiv");
      tDisp.style.display="none";
        outp.innerHTML="No need Brother";
       
      }
      
    else if (diff > 0) {
        var tDisp = document.querySelector(".tableDiv");
        tDisp.style.display="block";
        outp.innerHTML="";
        if (diff >= 2000) {
          var count = Math.floor(diff / 2000);
          diff = diff - 2000 * count;
          var tw = document.querySelector(".twoThousand");
          tw.innerHTML = count;
        }
        if (diff >= 500) {
          var count = Math.floor(diff / 500);
          diff = diff - 500 * count;
          var tw = document.querySelector(".fiveHundred");
          tw.innerHTML = count;
        }
        if (diff >= 100) {
          var count = Math.floor(diff / 100);
          diff = diff - 100 * count;
          var tw = document.querySelector(".hundred");
          tw.innerHTML = count;
        }
        if (diff >= 20) {
          var count = Math.floor(diff / 20);
          diff = diff - 20 * count;
          var tw = document.querySelector(".twenty");
          tw.innerHTML = count;
        }
        if (diff >= 10) {
          var count = Math.floor(diff / 10);
          diff = diff - 10 * count;
          var tw = document.querySelector(".ten");
          tw.innerHTML = count;
        }
        if (diff >= 5) {
          var count = Math.floor(diff / 5);
          diff = diff - 5 * count;
          var tw = document.querySelector(".five");
          tw.innerHTML = count;
        }
        if (diff >= 1) {
          var count = Math.floor(diff / 1);
          diff = diff - 1 * count;
          var tw = document.querySelector(".one");
          tw.innerHTML = count;
        }
      }
    
      else {
        var tDisp = document.querySelector(".tableDiv");
        tDisp.style.display="none";
        
        outp.innerHTML="Pay the Full Amount first please.";
        
      }
    }

}


