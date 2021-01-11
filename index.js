const images = document.querySelectorAll("img");
const img = document.createElement("img");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);
let imageIndex = document.createElement("div");
imageIndex.className = "imageIndex";
const nextArrow = document.createElement("div");
nextArrow.className = "nextArrow";
const previousArrow = document.createElement("div");
previousArrow.className = "previousArrow";
let index;

images.forEach(image => {
    image.addEventListener("click", () => {lightbox.classList.add('active')
        img.src = image.src;
        img.className = "lightboxImage";
        index = image.getAttribute('img__id');
        console.log(index);
        imageIndex.innerHTML = "Image " + index + " of " + images.length;
        nextArrow.innerHTML = "next";
        previousArrow.innerHTML = "previous"
        lightbox.append(img, imageIndex);
        imageIndex.append(previousArrow, nextArrow);
    })
})

const nextImage = () =>{
    index++;
    if (index > 8) index = 0;
    img.src = images[index].src;
}

const previousImage = () =>{
    index--;
    if (index < 0 ) index = 8;
    img.src = images[index].src;
}

previousArrow.addEventListener('click', previousImage);
nextArrow.addEventListener('click', nextImage);
lightbox.addEventListener("click", e =>{if(e.target == e.currentTarget) lightbox.classList.remove('active')});
