
//cat gif

const cat = document.querySelector('img');

const imageArray = [
  'img/0.png',
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png'
]

let counter = 0;

function changeImageSrc() {
  counter +=1;

  if(counter === imageArray.length){
    counter = 0;
  }

cat.src = imageArray[counter];
}
setInterval(changeImageSrc, 200);



//Clock

//setare interval update ceas
let interval = setInterval(function() {
  updateTime();
}, 1000);

  function updateTime() {
  let date = new Date();
  document.querySelector('#clock').innerHTML = date.toLocaleTimeString();
  //in fct update time am setat obj date in var date
  //selectie div (querySelector())+ modificare html(.innerHTML)/ intro string cu noul tip in pagina

}
