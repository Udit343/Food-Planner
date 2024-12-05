document.getElementById('meal-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const day = document.getElementById('day').value;
    const meal = document.getElementById('meal').value;

    if (day && meal) {
        const mealList = document.getElementById('meal-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${day}:</span> ${meal} <button onclick="this.parentElement.remove()">Remove</button>`;
        mealList.appendChild(listItem);


        this.reset();
    }
});
