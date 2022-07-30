var page = 'inicio';
var statusDrop = false
document.addEventListener("scroll", function () {

    var posicaoy = window.pageYOffset;

    var navbar = document.getElementById('navbarmenu')
    if (posicaoy > 5) {
        navbar.classList.add('navigationWrapperScroll')
    } else {
        navbar.classList.remove('navigationWrapperScroll')
    }
});

function changePage(pageToChange) {

    if (pageToChange == 'contato') {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
    }
    if (pageToChange == 'inicio') {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (pageToChange == 'oqueeusei') {
        document.getElementById('whatido').scrollIntoView({ behavior: 'smooth' })
    }

    var navbar = document.getElementById('navbarmenu')

    if (navbar.classList.contains('navigationWrapperShow')){
        navbar.classList.remove('navigationWrapperShow')
       
    }
    


}

function openDropdown() {

    var navbar = document.getElementById('navbarmenu')

    if (!navbar.classList.contains('navigationWrapperShow')) {

        navbar.classList.add('navigationWrapperShow')
    } else {
        navbar.classList.remove('navigationWrapperShow')
    }

}