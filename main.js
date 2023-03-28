const toggleThemeEl = document.getElementById('switch-theme');
const bodyEl = document.getElementById('home');

toggleThemeEl.addEventListener('click', () => {
    if(toggleThemeEl.checked) {
        bodyEl.style.backgroundColor = '#333'
    } else {
        bodyEl.style.backgroundColor = '#000'
    }
})