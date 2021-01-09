const images = document.querySelectorAll("img");
const img = document.createElement("img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

images.forEach(image => {
    image.addEventListener("click", e => {lightbox.classList.add('active') 
    img.src = image.src;
    img.className = "lightboxImage";
    lightbox.appendChild(img);  
    })
})

lightbox.addEventListener("click", e =>{if(e.target == e.currentTarget) lightbox.classList.remove('active')});
