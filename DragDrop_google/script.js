const dragItems = document.querySelectorAll('.drag-item');
let currenItem


function handleDragStart(e) { //коли беремо ел. викликається драг старт
    console.log('Drag start');
    currenItem = this
    this.classList.add('isDrag');

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML );
}


function handleDragEnter(e) {//подія від того елемента на який ми наводимось
    console.log('Drag enter');

    if(this !== currenItem && currenItem !== null) {
        this.classList.add('drag-over');
    }
}


function handleDragOver(e) { // подія від того елемента на який ми наводимось
    // console.log('Drag over');

    if(e.preventDefault) e.preventDefault();
    e.dataTransfer.effectAllowed = 'move';
    return false
}

function handleDragLeave(e) { // подія від того елемента на який ми наводимось
    console.log('Drag leave');
    this.classList.remove('drag-over');
}


function handleDrop(e) {  //закінчення, коли успішно - наведення на інший елемент
    e.preventDefault();         //пподія від того елемента на який ми наводимось

    if(this !== currenItem && currenItem !== null) {
        currenItem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false
}


function handleDragEnd(e) { // коли у будь якому випадку закінчився драгінг
    dragItems.forEach(item =>{
        item.classList.remove('drag-over');
        item.classList.remove('isDrag');
    })
}



dragItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
})















