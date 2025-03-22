document.addEventListener("DOMContentLoaded", function () {
    const leftGallery = document.querySelector(".left-gallery");
    const rightGallery = document.querySelector(".right-gallery");

    function pauseAnimation(element) {
        element.style.animationPlayState = "paused";
    }

    function resumeAnimation(element) {
        element.style.animationPlayState = "running";
    }

    // Pause animation on hover
    leftGallery.addEventListener("mouseover", () => pauseAnimation(leftGallery));
    leftGallery.addEventListener("mouseleave", () => resumeAnimation(leftGallery));

    rightGallery.addEventListener("mouseover", () => pauseAnimation(rightGallery));
    rightGallery.addEventListener("mouseleave", () => resumeAnimation(rightGallery));
});
