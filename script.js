window.onscroll = function() {
var navbar = document.getElementById('navbar');
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('scrolled');
} 
else{
    navbar.classList.remove('scrolled');
}
};
