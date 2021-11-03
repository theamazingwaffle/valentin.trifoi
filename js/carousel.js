let carousels = document.getElementsByClassName("carousel")

for (let carousel of carousels) {
    carousel.lookingAt = 0;
    carousel.imageCount = carousel.children[2].children.length;
    let images = carousel.children[2].children;
    carousel.children[0].addEventListener('click', _ => {
        carousel.lookingAt = ((carousel.lookingAt - 1) +
                              carousel.imageCount) % carousel.imageCount;
        images[carousel.lookingAt].scrollIntoView(
            {behavior: "smooth", inline: "center", block: "center"});
    });

    carousel.children[1].addEventListener('click', _ => {
        carousel.lookingAt = (carousel.lookingAt + 1) % carousel.imageCount;
        images[carousel.lookingAt].scrollIntoView(
            {behavior: "smooth", inline: "center", block: "center"});
    });
}
