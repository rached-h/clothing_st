document.querySelectorAll('.thumbnail img').forEach(img => {
    img.addEventListener('click', function () {
        document.querySelector('.main-img img').src = this.src;
    });
});
document.querySelectorAll('.size').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.size').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});
document.querySelectorAll('.color').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.color').forEach(b => b.classList.remove('selectedC'));
        this.classList.add('selectedC');
    });
});