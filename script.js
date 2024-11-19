// Sample meal data (can be fetched from the backend)
const meals = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Pizza", price: 8.99 },
    { id: 3, name: "Pasta", price: 7.49 },
    { id: 4, name: "Salad", price: 4.99 }
];

const mealList = document.getElementById('meal-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

// Function to display meals
function displayMeals() {
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
            <span>${meal.name} - $${meal.price.toFixed(2)}</span>
            <button onclick="addToCart(${meal.id})">Add to Cart</button>
        `;
        mealList.appendChild(mealDiv);
    });
}

// Function to add meal to cart
function addToCart(mealId) {
    const meal = meals.find(m => m.id === mealId);
    cart.push(meal);
    updateCart();
}

// Function to update cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

// Initialize the app
displayMeals();
