/* FLIP FIELD JS */

    let fieldFlipped = false;

    function flipField() {
        var now = new Date();
        now.setTime(now.getTime() + (5 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + now.toUTCString();
        document.cookie = "flipped=true; " + expires + "; path=/";
        saveFieldFlip();
    }
    
    function unflipField() {
        document.cookie = 'flipped=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        saveFieldFlip();
    }
    
    function saveFieldFlip() {
        if (confirm('Press "OK" to refresh the page. A refresh is required to change your field view.')) {
            location.reload();
        } else {
            let startFieldRedVal = $("#startFieldRed").prop("checked");
            let startFieldBlueVal = $("#startFieldBlue").prop("checked");
            $("#startFieldRed").prop("checked", !startFieldRedVal);
            $("#startFieldBlue").prop("checked", !startFieldBlueVal);
            $("#startFieldRed").prop("disabled", true);
            $("#startFieldBlue").prop("disabled", true);
            $("#viewWillChange").css("display", "inline");
        }
    }
    
    function getCookie(name) {
        let cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookiePair = cookieArray[i].split('=');
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }
    
    var userCookie = getCookie('flipped');
    if (userCookie) {
        $("#startFieldRed").prop("checked", true);
        $("#imageCanvas").addClass("flip");
        fieldFlipped = true;
    } else {
        $("#startFieldBlue").prop("checked", true);
        $("#imageCanvas").removeClass("flip");
        fieldFlipped = false;
    }


/* QR CODE JS */

    // var qrcode = new QRCode(document.getElementById("qrcode"), {
    // 	width : 100,
    // 	height : 100
    // });
    
    // function makeCode () {		
    // 	var elText = document.getElementById("text");
    	
    // 	if (!elText.value) {
    // 		alert("Input a text");
    // 		elText.focus();
    // 		return;
    // 	}
    	
    // 	qrcode.makeCode(elText.value);
    // }
    
    // makeCode();
    
    // $("#text").
    // 	on("blur", function () {
    // 		makeCode();
    // 	}).
    // 	on("keydown", function (e) {
    // 		if (e.keyCode == 13) {
    // 			makeCode();
    // 		}
    // 	});


/**
 * FIELD INPUT JS
 * Add your overlay to the overlaySources array below.
 * Your image must be 1266x591.
 * It must contain a single solid shape on a transparent background.
 */
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    const overlaySources = ['./assets/field/A1.png', 
                            './assets/field/A2.png',
                            './assets/field/A3.png',
                            './assets/field/B1.png',
                            './assets/field/B2.png',
                            './assets/field/B3.png',
                            './assets/field/B4.png',
                            './assets/field/B5.png',
                            './assets/field/C1.png',
                            './assets/field/C2.png',
                            './assets/field/C3.png',
                            './assets/field/bArrow.png',
                            './assets/field/rArrow.png'];
    const overlays = [];
    const buffer = 20;
    let baseImageLoaded = false;
    let scaleFactor = 1;

    // Load base image
    const baseImage = new Image();
    baseImage.src = './assets/field/field2024.jpg';
    baseImage.onload = () => {
        canvas.width = baseImage.naturalWidth;
        canvas.height = baseImage.naturalHeight;
        scaleFactor = canvas.offsetWidth / baseImage.naturalWidth;
        baseImageLoaded = true;
        loadOverlays();
    };
    
    function loadImage(src) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                console.error("Failed to load image:", src); // Log if an image fails to load
            };
            img.src = src;
        });
    }
    
    async function loadOverlays() {
        for (const src of overlaySources) {
            const greenOverlay = await loadImage(src);
            const redSrc = './assets/field/-' + src.split('/').pop();
            const redOverlay = await loadImage(redSrc);
    
            overlays.push({
                green: greenOverlay,
                red: redOverlay,
                state: 'disabled',
                nonTransparentAreas: analyzeImage(greenOverlay) // Call analyzeImage after the image is loaded
            });
        }
        
        redrawOverlays();
    }
    
    window.addEventListener('resize', function() {
        // Update scale factor on resize
        scaleFactor = canvas.offsetWidth / baseImage.naturalWidth;
        redrawOverlays();
    });

    // Click event on canvas
    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left) / scaleFactor;
        const y = (event.clientY - rect.top) / scaleFactor;

        overlays.forEach(overlay => {
            if (isClickInNonTransparentArea(x, y, overlay.nonTransparentAreas)) {
                // Toggle states
                if (overlay.state === 'disabled') {
                    overlay.state = 'green';
                } else if (overlay.state === 'green') {
                    overlay.state = 'red';
                } else {
                    overlay.state = 'disabled';
                }
                redrawOverlays();
            }
        });
    });


    // This function should analyze the image and return the non-transparent areas
    // This can be complex depending on the shape of the non-transparent parts
    // For simplicity, let's assume rectangular areas
    // Return format: [{ x: 10, y: 10, width: 100, height: 100 }, ...]
    function analyzeImage(image) {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
    
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let cords = {'x': null, 'y': null, 'xEnd': null, 'yEnd': null};
    
        // Iterate over every pixel to find non-transparent ones
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const alpha = data[(y * canvas.width + x) * 4 + 3];
                if (alpha !== 0) {
                    
                    // This pixel is non-transparent
                    // Add logic to group non-transparent pixels into rectangles
                    if (cords['x'] == null || x < cords['x']) {
                        cords['x'] = x;
                    } else if (cords['xEnd'] == null || x > cords['xEnd']) {
                        cords['xEnd'] = x;
                    }
                    if (cords['y'] == null || y < cords['y']) {
                        cords['y'] = y;
                    } else if (cords['yEnd'] == null || y > cords['yEnd']) {
                        cords['yEnd'] = y;
                    }
                    
                }
            }
        }
        
        // Return rectangles approximating non-transparent areas
        return fieldFlipped ? [{
            x: canvas.width - cords.xEnd - buffer,
            y: canvas.height - cords.yEnd - buffer,
            width: cords.xEnd - cords.x + buffer * 2,
            height: cords.yEnd - cords.y + buffer * 2
          }] : [{
            x: cords.x - buffer,
            y: cords.y - buffer,
            width: cords.xEnd - cords.x + buffer * 2,
            height: cords.yEnd - cords.y + buffer * 2
          }];
    }

    function isClickInNonTransparentArea(x, y, areas) {
        // Check if the (x, y) coordinates are within any of the non-transparent areas
        return areas.some(area => x >= area.x && x <= area.x + area.width && y >= area.y && y <= area.y + area.height);
    }
    
    function redrawOverlays() {
        if (!baseImageLoaded) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0);
    
        overlays.forEach(overlay => {
            let imageToDraw;
            let applyGrayscale = false;
    
            switch(overlay.state) {
                case 'green':
                    imageToDraw = overlay.green;
                    break;
                case 'red':
                    imageToDraw = overlay.red;
                    break;
                default: // 'disabled'
                    imageToDraw = overlay.green; // Use green as default for disabled state
                    applyGrayscale = true;
            }
    
            ctx.globalAlpha = applyGrayscale ? 0.4 : 0.98;
            ctx.globalCompositeOperation = applyGrayscale ? 'luminosity' : 'source-over';
            ctx.drawImage(imageToDraw, 0, 0);
            ctx.globalCompositeOperation = 'source-over'; // Reset filter for next drawing
            ctx.globalAlpha = 1.0; // Reset alpha
        });
    }