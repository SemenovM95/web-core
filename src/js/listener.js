const button = document.querySelector('#card-section-button-expand');
const listContainer = document.querySelector('#card-section-list-expandable');

const initialHeight = listContainer.clientHeight;

const handler = () => {
    let expanded = false
    return () => {
        expanded ? expandList() : collapseList();
        expanded = !expanded;
    }
}
const expandList = () => {
    const scrollHeight = listContainer.scrollHeight;
    listContainer.style.height = `${scrollHeight}px`;
    button.classList.add('button--expand--expanded');
    button.textContent = 'Свернуть';
}
const collapseList = () => {
    listContainer.style.height = `${initialHeight}px`;
    button.classList.remove('button--expand--expanded');
    button.textContent = 'Показать все';
}

const listenerId = button.addEventListener('click', handler());
