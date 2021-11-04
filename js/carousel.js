let carousels = document.getElementsByClassName("carousel");

function calculate_pos(images, index) {
    let sum = 0;
    for (let i = 0; i < index && i < images.length; i++) {
        sum += images[i].width;
    }
    return sum;
}

for (let carousel of carousels) {
    carousel.lookingAt = 0;
    carousel.imageCount = carousel.children[2].children.length;
    let images = carousel.children[2].children;
    let image_container = carousel.children[2];
    carousel.children[0].addEventListener('click', _ => {
        carousel.lookingAt = ((carousel.lookingAt - 1) +
                              carousel.imageCount) % carousel.imageCount;
        let left = calculate_pos(image_container.children, carousel.lookingAt);
        image_container.scrollTo({left: left, behavior: "smooth"});
    });

    carousel.children[1].addEventListener('click', _ => {
        carousel.lookingAt = (carousel.lookingAt + 1) % carousel.imageCount;
        let left = calculate_pos(image_container.children, carousel.lookingAt);
        image_container.scrollTo({left: left, behavior: "smooth"});
    });
    image_container.scrollTo({left: 0});
}
