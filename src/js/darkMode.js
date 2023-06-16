var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

var divElements = document.querySelectorAll('.about-box');
var originalColors = Array.from(divElements).map(div => div.style.background);
var footerElement = document.querySelector('footer');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    if (localStorage.getItem('isBackgroundVisible') === 'true') {
        divElements.forEach(function(element) {
            element.style.background = 'transparent';
        });
        if (footerElement)
            footerElement.style.background = 'transparent';
    } else {
        divElements.forEach(function(element, index) {
            element.style.background = originalColors[index];
        });
        if (footerElement)
            footerElement.style.background = 'rgb(255,255,255)';
    }

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('isBackgroundVisible', 'false');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            localStorage.setItem('isBackgroundVisible', 'true');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            localStorage.setItem('isBackgroundVisible', 'true');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('isBackgroundVisible', 'false');
        }
    }

});