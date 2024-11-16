const menuItems = [
    { id: 1, name: 'LargePizza', price: 700, image: '2021-11-05.jpg' },
    { id: 2, name: 'ZingerBurger', price: 300, image: 'burger.jpg' },
    { id: 3, name: 'Nuggets', price: 180, image: 'Nuggets.jpg' },
    { id: 4, name: ' Lava Pasta', price: 450, image: 'pasta.jpg' },
];

const order = [];
const menuContainer = document.querySelector('.menu-items');
const orderContainer = document.querySelector('.order-items');
const totalPriceElement = document.getElementById('total-price');

// Display menu items
function displayMenu() {
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name}</p>
        <p>${item.price.toFixed(2)}</p>
        <button onclick="addToOrder(${item.id})">Add to Order</button>
      `;
        menuContainer.appendChild(menuItem);
    });
}

// Add item to order
function addToOrder(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    order.push(item);
    updateOrder();
}

// Update order and total price
function updateOrder() {
    orderContainer.innerHTML = '';
    let total = 0;

    order.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
        <p>${item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      `;
        orderContainer.appendChild(orderItem);
        total += item.price;
    });

    totalPriceElement.innerText = total.toFixed(2);
}

displayMenu();
