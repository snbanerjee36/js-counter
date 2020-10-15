// let count = 0;
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){
//  btn.addEventListener('click', function(e){
//   const styles = e.currentTarget.classList;

//   if(styles.contains('decrease')){
//       count--
//   } else if(styles.contains('increase')){
//       count++;
//       value.style.color = "green"
//   }
//   else {
//     count = 0
// }


// if(count > 0){
//     value.style.color = 'green'
// } else if(count<0){
//     value.style.color = 'red'
// } else if (count == 0 ) {
//     value.style.color = '#222'
// }

//   value.textContent = count

//  })
// })


////////////////////// --------option 2-------------------


let count = 0;
const value = document.getElementById("value");

let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');

decrease.addEventListener('click', function(){
  count< 1 ? count = 1: '';
  count--;
  value.textContent = count;  
  

});

increase.addEventListener('click', function(){
  count > 9 ? count = 9: '' ;
  count++;
  value.textContent = count;  
 
})

reset.addEventListener('click', function(){
  count = 0;
  value.textContent =  count
})


////////////////// -------------- option3 -----------------------


let counter = 0;

const result = document.getElementById("result");
const tigger = document.querySelectorAll('.button');

tigger.forEach(function(element){
  element.addEventListener('click', function(e){
   const item = e.currentTarget.classList;

   if(item.contains('btndcrease')){
     counter--
   }  else if(item.contains('btnincrease')){
    counter++
  } else{
    counter = 0
  }

   result.textContent = counter

  })

})
