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
            <div class="transaction">
                <p>28.06.2021</p>
                <p>-59,00 ₽</p>
            </div>
            <div class="transaction">
                <p>№62686535</p>
                <p>-59,00 ₽</p>
            </div>
            <div class="transaction">
                <p>07.05.2021</p>
                <p>-4 800,00 ₽</p>
            </div>
            <div class="transaction">
                <p>№54221990</p>
                <p>-2 400,00 ₽</p>
            </div>
            <div class="transaction">
                <p>11.05.2021</p>
                <p>-955,84 ₽</p>
            </div>`;
    } else if (type === 'income') {
        transactions.innerHTML = `
            <div class="transaction">
                <p>15.06.2021</p>
                <p>+5 000,00 ₽</p>
            </div>
            <div class="transaction">
                <p>10.05.2021</p>
                <p>+2 000,00 ₽</p>
            </div>`;
    } else if (type === 'expense') {
        transactions.innerHTML = `
            <div class="transaction">
                <p>28.06.2021</p>
                <p>-59,00 ₽</p>
            </div>
            <div class="transaction">
                <p>07.05.2021</p>
                <p>-4 800,00 ₽</p>
            </div>
            <div class="transaction">
                <p>11.05.2021</p>
                <p>-955,84 ₽</p>
            </div>`;
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