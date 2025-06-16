const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("IncreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const myList = document.getElementById("myList");
const myNum = document.getElementById("myNum");
const myremove = document.getElementById("myremove");

let count = 0;


increaseBtn.addEventListener('click', function () {
  count++;

  const numbers = [10, 20, 30, 40, 50, 60];
  for (let i = 0; i < numbers.length; i++) {

    let numarr = numbers[i];
    if (count == numarr) {



      const node = document.createElement("li");

      const d = new Date();
      const textnode = document.createTextNode(d.toLocaleTimeString());

      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      //const numbernode = document.createTextNode(count);

      const numbernode = document.createElement("li");
      const mynumnode = document.createTextNode(count);
      numbernode.appendChild(mynumnode);
      document.getElementById("myNum").appendChild(numbernode);

      
       const closenode = document.createElement("li");
      const  myclosetxt = document.createTextNode("\u00D7");
      closenode.appendChild(myclosetxt);
      document.getElementsById("myclose").appendChild(closenode);
      
     
      document.getElementById("myNum").addEventListener("click", function () {
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {


          close[i].onclick = function () {

            const element = document.getElementById("myList");
            element.remove();
            const Numelement = document.getElementById("myNum");
            Numelement.remove();
        
            close[i].remove();
            var div = this.parentElement;
            div.style.display = "none";

          }
        }
      });



      /*
          removeBtn.addEventListener('click', function () {
            myList.removeChild(node);
            myNum.removeChild(numbernode);
            myList.removeChild(removeBtn);
            myNum.removeChild(removeBtn);
    
    
    
       
    
      
          });*/


    }
  }

















  countSpan.textContent = count;
  increseBtn.addEventListener('click', function () {
    decreaseBtn.style.display = 'inline-block';
  });
});

resetBtn.onclick = function () {
  count = 0;
  countSpan.textContent = count;
}

decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
  else {
    var x = document.getElementById("decreaseBtn");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }

  }
}

