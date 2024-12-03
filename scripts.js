function showTransactions(type) {
    // Удаляем активный класс у всех вкладок
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));

    // Добавляем активный класс к нажатой вкладке
    if (type === 'all') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
    } else if (type === 'income') {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
    } else if (type === 'expense') {
        document.querySelector('.tab:nth-child(3)').classList.add('active');
    }

    // Получаем элемент списка транзакций
    const transactions = document.getElementById('transactions');
    transactions.innerHTML = ''; // Очищаем список

    // Заполняем список в зависимости от типа
    if (type === 'all') {
        transactions.innerHTML = `
           `;
    } else if (type === 'income') {
        transactions.innerHTML = `
           `;
    } else if (type === 'expense') {
        transactions.innerHTML = `
            `;
    }
}



// Обработчик нажатия на кнопку "Выйти"
document.getElementById('logoutButton').addEventListener('click', function() {
    // Перенаправляем на другую страницу (например, "login.html")
    window.location.href = 'index.html';
});





// Данные карты
const fullCardNumber = "4444 5378 9101 7368";
const maskedCardNumber = "* * * *   * * * *   7368";
let isMasked = true;

function toggleCardNumber() {
    const cardNumberElement = document.getElementById("card-number");

    if (!cardNumberElement) {
        console.error("Элемент с ID 'card-number' не найден!");
        return;
    }

    if (isMasked) {
        // Показываем полный номер карты
        cardNumberElement.textContent = fullCardNumber;
    } else {
        // Скрываем номер карты
        cardNumberElement.textContent = maskedCardNumber;
    }
    isMasked = !isMasked;
}
