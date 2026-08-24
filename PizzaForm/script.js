const orderBtn = document.getElementById('orderBtn');
const container = document.getElementById('container');
const formSection = document.getElementById('FormSection');

orderBtn.addEventListener('click', () => {
    container.classList.add('fly-up');

    setTimeout(() => {
        container.style.display = 'none';
        formSection.classList.remove('hidden');
    }, 2500);
});


setTimeout(() => {
// 1. Отримуємо всі наші елементи піци з DOM
const pizzas = document.querySelectorAll('.flying-pizza');

// 2. Налаштування швидкості (можете змінювати)
const speed = 1; // Пікселів за кадр

// 3. Створюємо масив для зберігання стану кожної піци
const pizzaData = [];

pizzas.forEach((pizza) => {
    // Випадковим чином визначаємо початкову позицію (x, y)
    const startX = Math.random() * (window.innerWidth - 150); // -150 щоб не за межами
    const startY = Math.random() * (window.innerHeight - 150);

    // Випадковим чином визначаємо початковий кут руху (вектор vx, vy)
    // Щоб рух був діагональним та цікавим
    let angle = Math.random() * Math.PI * 2; // випадковий кут від 0 до 360 градусів
    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed;

    // Зберігаємо ці дані
    pizzaData.push({
        element: pizza,
        x: startX,
        y: startY,
        vx: vx, // швидкість по X
        vy: vy, // швидкість по Y
        width: 120, // ширина картинки (має співпадати з CSS)
        height: 120 // висота картинки
    });
});

// 4. Функція анімації (головний цикл)
function animate() {
    // Отримуємо поточні розміри вікна (на випадок, якщо користувач змінить розмір екрана)
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    pizzaData.forEach((data) => {
        // Оновлюємо позицію піци на основі її вектора швидкості
        data.x += data.vx;
        data.y += data.vy;

        // --- ПЕРЕВІРКА ВІДБИВАННЯ ВІД КРАЇВ ---

        // Відбивання від правої або лівої стінки
        if (data.x + data.width > maxWidth || data.x < 0) {
            data.vx = -data.vx; // Міняємо напрямок по X на протилежний
            // Додатково трохи зміщуємо, щоб не застрягло в стінці
            data.x = Math.max(0, Math.min(data.x, maxWidth - data.width));
        }

        // Відбивання від верхньої або нижньої стінки
        if (data.y + data.height > maxHeight || data.y < 0) {
            data.vy = -data.vy; // Міняємо напрямок по Y
            data.y = Math.max(0, Math.min(data.y, maxHeight - data.height));
        }

        // --- ЗАСТОСУВАННЯ НОВОЇ ПОЗИЦІЇ ---

        // Використовуємо translate3d для максимально плавної анімації (це використовує GPU)
        data.element.style.transform = `translate3d(${data.x}px, ${data.y}px, 0)`;
    });

    // Кажемо браузеру, що ми готові до наступного кадру анімації
    requestAnimationFrame(animate);
}

// 5. Запускаємо анімацію
animate();
}, 2500);