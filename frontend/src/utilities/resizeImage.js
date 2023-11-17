/**
       * Resize images
       * @param {string} imageSrc - The source of the URL image
       * @param {number} maxWidth - The max width for the resized image
       * @param {number} maxHeight - the max height for the resized image
       * @returns {Promise<string>} - A promise that resolves with data URL of the resized image
       */
const resizeImage = (imageSrc, maxWidth, maxHeight) => {
      return new Promise((resolve) => {
            // here we initiate an image constructor
            const img = new Image();

            // apply the address of the image to the context of the constructor
            img.src = imageSrc;

            // when the image is rendering by in the browser the below logic will run
            img.onload = () => {
                  let width = img.width;
                  let height =img.height;

                  // resizing logic
                  if(width > height) {
                        if(width > maxWidth) { 
                              height *= maxWidth / width;
                              width = maxWidth;
                        }
                  } else {
                        if(height > maxHeight) { 
                              width *= maxHeight / height;
                              height = maxHeight;
                        }
                  }

                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');

                  // apply resized width and height to the canvas
                  canvas.width = width;
                  canvas.height = height;

                  ctx.drawImage(img, 0, 0, width, height);

                  // there could be a path issue here if the purpose of the parameter is to declare path
                  // the images are all located in root/frontend/public/images
                  const resizedImage = canvas.toDataURL('image/png');

                  // I assume we return the resizedImage in the resolve method below?
                  resolve(resizedImage);
            };
      })
};

export default resizeImage;