let name = prompt('Как вас зовут?');
alert('Привет, '+ name);

let age = Number(prompt('Сколько вам лет?'));
switch (age) {
  case 4:
  case 5:  
  case 6:
    alert('Ути-пути');
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    alert('А ты уроки сделал?');
    break;  
  case 18:
    alert('Уже большой, сам знаешь что делать');
    break;   
  case 30:
    alert('Ложитесь спать, завтра на работу');
    break;  
  
  default:
    alert('Не знаю что и сказать');
    break;
}