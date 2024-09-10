document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.querySelector('.language-toggle');
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Adjust this value to change when the button starts fading

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down and past the threshold
            languageToggle.classList.add('hidden');
        } else if (scrollTop < scrollThreshold) {
            // Near the top of the page
            languageToggle.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);

    // Show the button when hovering near the top of the screen
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 50) { // Adjust this value to change the hover area
            languageToggle.classList.remove('hidden');
        }
    });
});