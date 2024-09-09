document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('languageToggle');
    let currentLanguage = 'en';

    toggleButton.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'pl' : 'en';
        updateLanguage();
        updateButtonText();
    });

    function updateLanguage() {
        document.querySelectorAll('[data-en][data-pl]').forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        });
    }

    function updateButtonText() {
        toggleButton.textContent = currentLanguage === 'en' ? 'PL' : 'En';
    }
});