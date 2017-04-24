var popup = document.querySelector('.post-form');
var login = popup.querySelector('[name=name]');
var overlay = document.querySelector('.modal-overlay');
var link = document.querySelector('.popup-btn');

link.addEventListener('click', function(event) {
     event.preventDefault();
     popup.classList.add('post-form-show');
     overlay.classList.add('modal-overlay-show');
     login.focus();
});

var close = document.querySelector('.close-cross');

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('post-form-show');
    overlay.classList.remove('modal-overlay-show');
});
