var bA=document.querySelector("#billAmount");
var cA=document.querySelector("#cashAmount");
var outp=document.querySelector(".output")

function clickNext(){
    var bill=bA.value;
    
    return bill;
}

function clickSubmit(){
    var billAmt=clickNext();
    var cash=cA.value;
    

    var diff= cash-billAmt;
    console.log(diff);

    if (diff == 0) {
        
        outp.innerHTML="No need Brother";
       
      }
      
    if (diff > 0) {
        
        if (diff >= 2000) {
          var count = Math.floor(diff / 2000);
          diff = diff - 2000 * count;
          var tw = document.querySelector("#twoThousand");
          tw.innerHTML = count;
        }
        if (diff >= 500) {
          var count = Math.floor(diff / 500);
          diff = diff - 500 * count;
          var tw = document.querySelector("#fiveHundred");
          tw.innerHTML = count;
        }
        if (diff >= 100) {
          var count = Math.floor(diff / 100);
          diff = diff - 100 * count;
          var tw = document.querySelector("#hundred");
          tw.innerHTML = count;
        }
        if (diff >= 20) {
          var count = Math.floor(diff / 20);
          diff = diff - 20 * count;
          var tw = document.querySelector("#twenty");
          tw.innerHTML = count;
        }
        if (diff >= 10) {
          var count = Math.floor(diff / 10);
          diff = diff - 10 * count;
          var tw = document.querySelector("#ten");
          tw.innerHTML = count;
        }
        if (diff >= 5) {
          var count = Math.floor(diff / 5);
          diff = diff - 5 * count;
          var tw = document.querySelector("#five");
          tw.innerHTML = count;
        }
        if (diff >= 1) {
          var count = Math.floor(diff / 1);
          diff = diff - 1 * count;
          var tw = document.querySelector("#one");
          tw.innerHTML = count;
        }
      }
    
      if (diff < 0) {
        
        
        outp.innerHTML="Pay the Full Amount first please.";
        
      }
    

}


