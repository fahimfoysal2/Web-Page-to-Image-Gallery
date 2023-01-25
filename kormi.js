console.log('kormi.js loaded');


// if current page loading is complete then log the page title
if (document.readyState === 'complete') {
    function getPageImages() {
        // Array to store the images
        var images = [];

        // Get all the image elements on the page
        var imageElements = document.getElementsByTagName('img');

        // Iterate over the image elements and add them to the images array
        for (var i = 0; i < imageElements.length; i++) {
            var imageUrl = imageElements[i].src;
            images.push(imageUrl);
        }

        console.log(images);

        return images;
    }

    getPageImages();
}