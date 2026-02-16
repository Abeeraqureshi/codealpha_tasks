let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");
let title = document.getElementById("lightboxTitle");
let desc = document.getElementById("lightboxDesc");

let currentIndex = 0;
function openLightbox(index){
    currentIndex = index;
    lightbox.style.display="flex"
    lightboxImg.src = images[currentIndex].src;
}
function closeLightbox(){
    lightbox.style.display = "none"
}

function changeImage(step){
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length){
        currentIndex = 0;
    }
    lightboxImg.src = images[currentIndex].src
}





lightboxImg.src = images[currentIndex].src;
title.textContent = images[currentIndex].dataset.title;
desc.textContent = images[currentIndex].dataset.description;


function filterImages(category){
    images.forEach(img => {
        if (category === "all" ||img.classList.contains(category)){
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
