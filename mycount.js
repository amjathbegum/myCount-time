const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("IncreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const myList = document.getElementById("myList");
const myNum = document.getElementById("myNum");
const myclose = document.getElementById("myclose");

let count = 0;



increaseBtn.addEventListener('click', function () {
  count++;

  const numbers = [10, 20, 30, 40, 50, 60];
  for (let i = 0; i < numbers.length; i++) {

    let numarr = numbers[i];
    if (count == numarr) {


      var span = document.createElement("SPAN");
      const node = document.createElement("li");
      const d = new Date();
      const textnode = document.createTextNode(d.toLocaleTimeString());
      node.appendChild(textnode);
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      span.appendChild(node);
       

   

      document.getElementById("myList").appendChild(node);
      //const numbernode = document.createTextNode(count);


      document.getElementById("myList").addEventListener("click", function () {
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {

          close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

          }
        }
      });



      const numbernode = document.createElement("li");
      const mynumnode = document.createTextNode(count);
      numbernode.appendChild(mynumnode);
      document.getElementById("myNum").appendChild(numbernode);




      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      node.appendChild(span);
      numbernode.appendChild(span);


       const  ul =document.querySelector('.this-list');

       for (let i=0;i<5;i++){
        let li = document.createElement('li');
        li.textContent = 'Item $ {i+1'
       }
      


      /*      
           const closenode = document.createElement("li");
          const  myclosetxt = document.createTextNode("\u00D7");
          closenode.appendChild(myclosetxt);
          document.getElementsById("myclose").appendChild(closenode);
          */

      document.getElementById("myNum").addEventListener("click", function () {
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {

          close[i].onclick = function () {
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

