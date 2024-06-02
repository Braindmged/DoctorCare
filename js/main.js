document.addEventListener('DOMContentLoaded', function() {
    const menuBTN = document.querySelector('.menu__btn');
    const menuClose = document.querySelector('.menu__close-btn');
    const menuList = document.querySelector('.menu__list');
    const overlay = document.getElementById('overlay');

    if (menuBTN && menuClose && menuList && overlay) {
        menuBTN.addEventListener('click', () => {
            menuList.classList.toggle('menu__list--open');
            overlay.classList.toggle('overlay--active');
        });

        menuClose.addEventListener('click', () => {
            menuList.classList.remove('menu__list--open');
            overlay.classList.remove('overlay--active');
        });

        overlay.addEventListener('click', () => {
            menuList.classList.remove('menu__list--open');
            overlay.classList.remove('overlay--active');
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const phoneInput = document.getElementById('phone');
        const phonePattern = /^\+7\d$/;
        if (!phonePattern.test(phoneInput.value)) {
            alert('Номер телефона должен начинаться с +7 и содержать 11 цифр.');
            return;
        }
        form.submit();
    });
});

document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('active');
    });
});

document.querySelectorAll('[data-close]').forEach(button => {
    button.addEventListener('click', function() {
        var modalId = this.getAttribute('data-close');
        document.getElementById(modalId).classList.remove('active');
    });
});


document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});


document.getElementById('open-review-modal').addEventListener('click', function() {
    document.getElementById('review-modal').classList.add('active');
});


document.querySelector('.modal-close').addEventListener('click', function() {
    document.getElementById('review-modal').classList.remove('active');
});

document.getElementById('review-modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.remove('active');
    }
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        let value = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => {
            s.classList.remove('selected');
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('selected');
            }
        });
    });
});




