const text = document.getElementById('field');
document.getElementById('add').addEventListener('click', () => {
  if (!text.value) {
    return
  }
  //display cart item
  display()
  //set in local storage
  addToLocal()
  //refresh input filed
  text.value = '';
});

//display in ui
const display = (name) => {
  const container = document.getElementById('list');
  const item = document.createElement('li');
  if (!name) {
    item.innerText = text.value;
  } else {
    item.innerText = name;
  }
  container.appendChild(item);
}

//local storage e cart name kono key ase naki thkle oidake parse and na thkle empty object jehutu local storage e value object stringify kore rakte hoy;
const getCart = () => {
  let cartObj;
  const cartValue = localStorage.getItem('cart')
  if (cartValue) {
    cartObj = JSON.parse(cartValue);
  } else {
    cartObj = {};
  }
  return cartObj;
};


//add to local
const addToLocal = () => {
  let cart = getCart();//get object
  if (cart[text.value]) {
    cart[text.value]++
  } else {
    cart[text.value] = 1;
  }
  const cartStringify = JSON.stringify(cart)//local storage e data srtingify kore set kora lage
  localStorage.setItem('cart', cartStringify)//data saved to local storage
};



// local storage er value er object theke key gulo niye display te sthayi kora
for (const name in getCart()) {
  display(name)
}


//order korle cart or local storage theke remove
document.getElementById('order').addEventListener('click', () => {
  document.getElementById('list').textContent = '';
  localStorage.removeItem('cart');
})