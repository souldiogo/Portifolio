const menunav = document.querySelectorAll('.header nav a');
menunav.forEach(navegar => {
    navegar.addEventListener('click', function() {
        document.querySelector('.header nav a.active')?.classList.remove('active');

        this.classList.add('active')
    })
})