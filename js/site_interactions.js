// Function to update ARIA attributes - when to show the different menus
// This code is inpired by a contact session from DECO7140. 
const updateAriaAttributes = () => {
    const width = window.innerWidth;
    const header_menu = document.getElementsByClassName("flex-header-menu")[0];
    const footer_menu = document.getElementsByClassName("flex-footer-menu")[0];
    const side_menu = document.getElementsByClassName("flex-side-menu")[0];
    
    if(width <= 600) {
        header_menu.setAttribute("aria-hidden", "true");
        side_menu.setAttribute("aria-hidden", "true");
        footer_menu.setAttribute("aria-hidden", "false");
    } else if(width <= 1194) {
        header_menu.setAttribute("aria-hidden", "true"); 
        side_menu.setAttribute("aria-hidden", "false");
        footer_menu.setAttribute("aria-hidden", "true");
    } else {
        header_menu.setAttribute("aria-hidden", "false");
        side_menu.setAttribute("aria-hidden", "true");
        footer_menu.setAttribute("aria-hidden", "true");
    }
}



// Run this code when the page first loads
updateAriaAttributes();
window.addEventListener("resize", updateAriaAttributes);