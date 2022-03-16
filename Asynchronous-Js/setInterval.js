console.log('first one');
// setInterval(()=>{
//   console.log('repeat');
// } , 1000)
let amount = 0;
const timeId = setInterval(()=>{
    amount++;
    console.log(amount);
    if(amount==5){
      clearInterval(timeId)
    }
  } , 1000)
console.log('second one');