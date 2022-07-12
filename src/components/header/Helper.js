// function to seet a given theme/ color-scheme
export const setTheme = function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

//function to toggle between light and dark theme
export const toggleTheme = function toggleTheme() {
    setTheme('theme-dark');
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
    }


// immediately invoked function to set the name on initial load
/*const firstSet = function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
};*/