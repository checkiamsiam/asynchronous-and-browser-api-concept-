document.getElementById('alert').addEventListener('click', function () {
  alert('alert is very simple to understand')
})
document.getElementById('confirm').addEventListener('click', function () {
  const returnResult = confirm('did it or cancel');
  console.log(returnResult);
})
document.getElementById('prompt').addEventListener('click', function () {
  let returnResult = prompt('type your name');
  if (returnResult == 'siam') {
    alert('hello boosssss')
  } else {
    alert(`Hello!! ${returnResult}`)
  }
  console.log(returnResult);
})