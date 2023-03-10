console.log('Its working')

let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let ThemeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; ThemeDots.length > i; i++) {
    ThemeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'css/style/blue.css'
    } if (mode == 'green') {
        document.getElementById('theme-style').href = 'css/style/green.css'
    } if (mode == 'purple') {
        document.getElementById('theme-style').href = 'css/style/purple.css'
    }
    localStorage.setItem('theme', mode)
   
}