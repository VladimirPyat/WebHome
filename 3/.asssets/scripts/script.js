let flag=true;
function changeColor() {
  // let element = document.getElementById("el1");
  // if(flag) {
  //   element.classList.add("fire");
  //   flag=false;
  // }
  // else {
  //   element.classList.remove("fire");
  //   flag=true;
  // }
  // console.log(element);
  let element = document.getElementById("el1");
   element.classList.toggle("fire");
  // if (element.textContent=="Новый текст") element.textContent="Старый текст"; 
  // else element.textContent="Новый текст";

  element.textContent=element.textContent=="Новый текст" ? "Старый текст" : "Новый текст";
}


let btn = document.getElementById("btn");
console.log(btn);
//выполняем функцию при нажатии на кнопку
btn.addEventListener('click', changeColor);