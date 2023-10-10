import expandListener from "./expandListener.js";
import sidebarListener from "./sidebarListener.js";

const toListenExpand = [
    {
        triggerClass: '#brands-list-expand',
        expandableClass: '#brands-list-expandable'
    },
    {
        triggerClass: '#about-us-button-expand',
        expandableClass: '#about-us-text-expandable'
    },
    {
        triggerClass: '#tech-list-expand',
        expandableClass: '#tech-list-expandable'
    },
    {
        triggerClass: '#prices-list-expand',
        expandableClass: '#prices-list-expandable'
    }
];

const toListenSidebar = [
    {
        openerSelector: '.side-menu-open',
        closerSelector: '.side-menu-close',
        targetSelector: '#side-menu',
        openSelector: 'sidebar--open'
    },
    {
        openerSelector: '.side-call-form-open',
        closerSelector: '.side-call-form-close',
        targetSelector: '#side-call-form',
        openSelector: 'sidebar-right--open'
    },
    {
        openerSelector: '.side-feedback-form-open',
        closerSelector: '.side-feedback-form-close',
        targetSelector: '#side-feedback-form',
        openSelector: 'sidebar-right--open'
    }
];

toListenExpand.forEach(({triggerClass, expandableClass}) => {
    expandListener(triggerClass, expandableClass);
})

toListenSidebar.forEach(({openerSelector, closerSelector, targetSelector, openSelector}) => {
    sidebarListener(openerSelector, closerSelector, targetSelector, openSelector);
})
