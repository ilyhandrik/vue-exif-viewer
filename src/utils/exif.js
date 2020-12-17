import EXIF from 'exif-js';

const getExifData = async (dataUrl) => new Promise((resolve) => {
  const image = new Image();
  image.src = dataUrl;
  setTimeout(() => {
    EXIF.getData(image, function () {
      const exifData = EXIF.getAllTags(this);
      const result = Object.keys(exifData).map((key) => ({
        tag: key,
        value: exifData[key],
      }));
      resolve(result);
    });
  }, 0);
});

export default getExifData;
