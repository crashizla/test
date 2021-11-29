window.onload = function() {

    document.querySelector('.preloader-5').classList.add("preloader-5-remove");
    document.querySelector('.preloader').classList.add("preloader-remove");
    document.querySelector('.bgc').classList.add("bgc-remove");

    document.onkeydown = function(event) {
        if (event.ctrlKey && (event.keyCode == 85) || (event.ctrlKey && event.shiftKey && (event.keyCode == 73)) || event.keyCode == 123 || event.keyCode == 67) {
            return false
        }
    }
    document.oncontextmenu = function() {
        return false
    }
}

/*var $page = $('html, body');
$('a[href*="#"]').click(function() {

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});*/