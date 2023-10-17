//element selection

const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
   btn.addEventListener("click",(e) => {
      
      //remove class "selected" from all buttons
       buttons.forEach((btn) => {
         btn.querySelector(".color").classList.remove("selected");
      });
      
      //add class selected on correct button
      const button = e.target;
      const buttonId = button.getAttribute("id");

      button.querySelector(".color").classList.add("selected");

      //change iPhone image
      image.classList.add("changing");
      image.setAttribute("src", `img/iphone_${buttonId}.jpg`);
      
      setTimeout(()=> {
         image.classList.remove("changing");
      }, 200);
      
   });
});