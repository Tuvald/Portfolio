const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Change text color to black for all links with the same href
        navLinks.forEach(navLink => {
            navLink.classList.remove('hovered');
        });

        // Change text color to white for the clicked link and its matching links - based content in href
        const matchingLinks = document.querySelectorAll(`[href="#${targetId}"]`);
        matchingLinks.forEach(matchingLink => {
            matchingLink.classList.add('hovered');
        });

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


