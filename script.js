

let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const modal = document.getElementById("imgModal");
const img = document.getElementById("popupImg");
const modalImg = document.getElementById("modalImg");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
