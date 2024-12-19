let next = document.querySelector('.next')
let back = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

next.onclick = () => moveItemsOnClick('next')
back.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next') {
        list.appendChild(listItems[0])  // coloca item no inicio da lista
        thumb.appendChild(thumbItems[0])
        container.classList.add('next') // mesmo que criar classe no css
    } else {
        list.prepend(listItems[listItems.length - 1])  // coloca item no final da lista
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {  // remove classes com efeito depois de 3 seg
        container.classList.remove('next')
        container.classList.remove('back')
    }, 2000);
}