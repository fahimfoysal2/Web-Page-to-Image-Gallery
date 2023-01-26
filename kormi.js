// if current page loading is complete then log the page title
if (document.readyState === 'complete') {

    // create a new div element to hold the image gallery
    // and, Add the gallery to the page
    var gallery = document.createElement('div');
    gallery.id = 'lightgallery';
    document.body.appendChild(gallery);

    // create dynamic gallery elements
    let galleryElements = [];

    // Get all the image elements on the page
    var imageElements = document.getElementsByTagName('img');

    // Iterate over the image elements and add them to the galleryElements array
    for (var i = 0; i < imageElements.length; i++) {
        var imageUrl = imageElements[i].src;
        // create a object for each image with src and thumb
        galleryElements.push({
            src: imageUrl,
            thumb: imageUrl
        });
    }

    const dynamicGallery = lightGallery(gallery, {
        plugins: [lgZoom],
        dynamic: true,
        dynamicEl: galleryElements,
        closable: false,
        download: true,
        thumbnail: true,
        showThumbByDefault: true,
        zoom: true,
        fullScreen: true,
        swipeThreshold: 50,
        mode: 'lg-fade',
        cssEasing: 'ease-in-out(0.420, 0.000, 0.580, 1.000)',
    });

    dynamicGallery.openGallery();
}