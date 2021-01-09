const images = document.querySelectorAll("img");
const img = document.createElement("img");
let imageIndex = document.createElement("div");
imageIndex.className = "imageIndex";
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

images.forEach((image, index) => {
    image.addEventListener("click", e => {lightbox.classList.add('active') 
    img.src = image.src;
    img.className = "lightboxImage";
    img.index = index+1;
    imageIndex.innerHTML = "Image " + img.index + " of " + images.length;
    lightbox.appendChild(img);
    lightbox.appendChild(imageIndex);
    })
})

lightbox.addEventListener("click", e =>{if(e.target == e.currentTarget) lightbox.classList.remove('active')});
