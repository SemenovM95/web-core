export default function sidebarListener(openerSelector, closerSelector, targetSelector, openClass) {
    
    const triggerElementOpen = document.querySelectorAll(openerSelector);
    const triggerElementClose = document.querySelectorAll(closerSelector);
    const targetElement = document.querySelector(targetSelector);

    if(!triggerElementOpen || !triggerElementClose || !targetElement) return

    const open = () => {
        targetElement.classList.add(openClass);
        document.body.classList.add('no-overflow');
    }
    const close = () => {
        targetElement.classList.remove(openClass);
        document.body.classList.remove('no-overflow');
    }

    triggerElementOpen.forEach(el => el.addEventListener('click', open));
    triggerElementClose.forEach(el => el.addEventListener('click', close));
}