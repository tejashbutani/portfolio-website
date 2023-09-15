function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const titleTxt = document.getElementById("project_title_txt");
const linkTxt = document.getElementById("project_link_txt");
const linkBtn = document.getElementById("project_link_btn");

let slideIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Fade out the current image
    slides.forEach((slide) => {
        slide.style.opacity = 0;
    });

    // Fade in the next image
    slides[slideIndex].style.opacity = 1;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    getProjectData(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    getProjectData(slideIndex);
}

function getProjectData(index) {
    var projectName = '';
    var projectLink = '';
    var btnName = '';
    switch (index) {
        case 0:
            projectName = 'CYFO ANTI-HACK APP';
            projectLink = 'https://apps.apple.com/in/app/cyfo-anti-hack/id6450753806';
            btnName = 'View in Store';
            break;
        case 1:
            projectName = 'E Vidhya - Learning APP';
            projectLink = 'https://play.google.com/store/apps/details?id=com.evidhya.learningapp';
            btnName = 'View in Store';
            break;
        case 2:
            projectName = 'InstantUploader';
            projectLink = 'https://apps.apple.com/us/app/instantuploader/id1562937340';
            btnName = 'View in Store';
            break;
        case 3:
            projectName = 'Arihant Electronics';
            projectLink = 'https://play.google.com/store/apps/details?id=com.arihantelect.app.arihant_electronics';
            btnName = 'View in Store';
            break;
        case 4:
            projectName = 'NSDOC';
            projectLink = 'https://play.google.com/store/apps/details?id=com.nyshasolutions.nsdoc.app.nsdoc';
            btnName = 'View in Store';
            break;
        case 5:
            projectName = 'FlirTutor';
            projectLink = '';
            btnName = 'in development';
            break;
        case 6:
            projectName = 'Trading Lust';
            projectLink = '';
            btnName = 'in development';
            break;
        case 7:
            projectName = 'CYFO Admin Dashboard';
            projectLink = '';
            btnName = 'in development';
            break;
        case 8:
            projectName = 'Tic Tac Toe';
            projectLink = 'https://play.google.com/store/apps/details?id=tejashbutani.tictactoe';
            btnName = 'View in Store';
            break;
        default:
            projectName = '';
            projectLink = '';
            btnName = '';
            break;
    }
    titleTxt.textContent = projectName;
    linkTxt.href = projectLink;
    linkBtn.textContent = btnName;
}


showSlide(slideIndex);

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-change every 3 second
setInterval(nextSlide, 3000);
