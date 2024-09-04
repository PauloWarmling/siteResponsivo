document.addEventListener('DOMContentLoaded', function() {
    // Alternar o menu ao clicar no ícone
    document.getElementById('mobile-icon').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.overlay').classList.toggle('active');
        document.getElementById('mobile-menu').classList.toggle('active');
    });

    // Fechar o menu clicando fora
    window.addEventListener('click', function(e) {
        var mobileMenu = document.getElementById('mobile-menu');
        var mobileIcon = document.getElementById('mobile-icon');
        var overlay = document.querySelector('.overlay');

        if (mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileIcon.contains(e.target)) {
                overlay.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });

    // Fechar o menu clicando no botão de fechar
    document.getElementById('close').addEventListener('click', function() {
        document.querySelector('.overlay').classList.remove('active');
        document.getElementById('mobile-menu').classList.remove('active');
    });
});