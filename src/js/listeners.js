import expandListener from "./expandListener.js";
import sidebarListener from "./sidebarListener.js";

const toListenExpand = [
    {
        triggerClass: '#card-section-button-expand',
        expandableClass: '#card-section-list-expandable'
    },
    {
        triggerClass: '#about-us-button-expand',
        expandableClass: '#about-us-text-expandable'
    }
];

const toListenSidebar = [
    {
        openerSelector: '#side-menu-button-open',
        closerSelector: '#side-menu-button-close',
        targetSelector: '#side-menu'
    }
];

toListenExpand.forEach(({triggerClass, expandableClass}) => {
    expandListener(triggerClass, expandableClass);
})

toListenSidebar.forEach(({openerSelector, closerSelector, targetSelector}) => {
    sidebarListener(openerSelector, closerSelector, targetSelector);    
})