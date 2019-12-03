const jimp = require('jimp');

const fileName = './textQRCode.png'

jimp.read(fileName, (err, image) => {
    if (err) {
        console.error(err);
    }
    image.blur(2).write(fileName);
});