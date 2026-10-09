const savedIndex = localStorage.getItem('openedAccordion');
const addItem = document.getElementById('addItem');
const container = document.querySelector('.accordion-container');


function initAccordionItem(item) {
    item.addEventListener('click', () => {

        document.querySelectorAll('.accordion-item').forEach(ClickItem => {
            if (ClickItem !== item) {
                ClickItem.querySelector('.accordion-content').classList.remove('active');
                ClickItem.querySelector('.visibility-toggle').innerHTML = '▼';
            }
        });
        
        const content = item.querySelector('.accordion-content');
        const visibilityToggle = item.querySelector('.visibility-toggle');

        content.classList.toggle('active');

        const allItems = Array.from(document.querySelectorAll('.accordion-item'));
        const index = allItems.indexOf(item);

        if (content.classList.contains('active')) {
            visibilityToggle.innerHTML = '▲';
            localStorage.setItem('openedAccordion', index);
        } else {
            visibilityToggle.innerHTML = '▼';
            localStorage.removeItem('openedAccordion');
        }
    });
}


if (savedIndex !== null) {
    const items = document.querySelectorAll('.accordion-item');
    if (items[savedIndex]) {
        items[savedIndex].querySelector('.accordion-content').classList.add('active');
        items[savedIndex].querySelector('.visibility-toggle').innerHTML = '▲';
    }
}


document.querySelectorAll('.accordion-item').forEach(item => {
    initAccordionItem(item);
});


addItem.addEventListener('click', () => {
    const newItem = `
        <div class="accordion-item">
            <div class="accordion-header">
                <h3>What makes everyday moments special?</h3>
                <span class="visibility-toggle">▼</span>
            </div>
            <div class="accordion-content">
                <p>It's the little things that repeat every single day—sharing silent support, laughing at the same silly jokes, and knowing that no matter how ordinary the day is, it's brighter simply because you're sharing it together</p>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', newItem);

    const allItems = document.querySelectorAll('.accordion-item');
    const newlyCreatedItem = allItems[allItems.length - 1];

    initAccordionItem(newlyCreatedItem);
});