import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmxncce2d',
  api_key: '728513818533528',
  api_secret: 'rQch-xvd0qnO4qQL4Cp2_cUlDtg',
});

export const cloudHandler = {
  uploadFile: async (buffer) => {
    const uploadResult = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'auto' }, (error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(buffer);
    });

    return uploadResult.url;
  },
};
