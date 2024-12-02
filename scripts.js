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





function flipCard() {
    const card = document.querySelector('.card-flip');
    card.classList.toggle('flipped'); // Переключает класс "flipped"
}
