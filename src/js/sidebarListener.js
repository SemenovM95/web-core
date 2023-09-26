export default function sidebarListener(openerSelector, closerSelector, targetSelector, openPrefix) {
    
    const triggerElementOpen = document.querySelector(openerSelector);
    const triggerElementClose = document.querySelector(closerSelector);
    const targetElement = document.querySelector(targetSelector);

    if(!triggerElementOpen || !triggerElementClose || !targetElement) return

    const targetClass = targetSelector.replaceAll('#', '');

    const openClass = openPrefix ? `${targetClass}--${openPrefix}` : `${targetClass}--open`;

    const open = () => {
        targetElement.classList.add(openClass);
        document.body.classList.add('no-overflow');
    }
    const close = () => {
        targetElement.classList.remove(openClass);
        document.body.classList.remove('no-overflow');
    }

    triggerElementOpen.addEventListener('click', open);
    triggerElementClose.addEventListener('click', close);
}