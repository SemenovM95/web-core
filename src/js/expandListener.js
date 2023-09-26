export default function expandListener(triggerSelector, expandableSelector) {
    
    const triggerElement = document.querySelector(triggerSelector);
    const expandableElement = document.querySelector(expandableSelector);
    
    if(!triggerElement || !expandableElement) return
    
    const initialText = triggerElement.textContent;
    
    const initialHeight = expandableElement.clientHeight;
    
    const expand = () => {
        const scrollHeight = expandableElement.scrollHeight;
        expandableElement.style.height = `${scrollHeight}px`;
        triggerElement.classList.add('button--expand--expanded');
        triggerElement.textContent = 'Свернуть';
    }
    const collapse = () => {
        expandableElement.style.height = `${initialHeight}px`;
        triggerElement.classList.remove('button--expand--expanded');
        triggerElement.textContent = initialText;
    }
    
    const handler = () => {
        let expanded = false
        return () => {
            expanded ? collapse() : expand();
            expanded = !expanded;
        }
    }

    return triggerElement.addEventListener('click', handler());
}