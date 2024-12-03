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
const fullCardNumber = "1234 5678 9101 7368";
const maskedCardNumber = "**** ** ** 7368";

const fullCardCVV = "CVV   375";
const maskedCardCVV = "CVV   ***";

let isMasked = true;

function toggleCardDetails() {
    // Получаем элементы
    const cardNumberElement = document.getElementById("card-number");
    const cardCVVElement = document.getElementById("card-cvv");

    if (!cardNumberElement || !cardCVVElement) {
        console.error("Элементы 'card-number' или 'card-cvv' не найдены!");
        return;
    }

    // Переключение между замаскированным и полным видом
    if (isMasked) {
        cardNumberElement.textContent = fullCardNumber;
        cardCVVElement.textContent = fullCardCVV;
    } else {
        cardNumberElement.textContent = maskedCardNumber;
        cardCVVElement.textContent = maskedCardCVV;
    }

    isMasked = !isMasked; // Переключение состояния
}
