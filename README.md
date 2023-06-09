# Automatic Background Remover

This is a software project that allows for automatic removal of background from images using a third-party API. The project is designed to be user-friendly, allowing users to simply drag and drop the images they want to process into the form.

## How to Use

Before using the application, it is necessary to set up the necessary credentials in the `.env` file so that the project can access the third-party API. The credentials are provided by the API provider.

To use the application, simply drag and drop the image you want to process into the form. The application will load the image and send it to the third-party API for processing and automatic background removal. Once the process is complete, the resulting background-free image will be displayed on the screen and can be downloaded.

## Features

- Drag and drop images for automatic processing.
- Automatic removal of background from images using a third-party API.
- Downloading of resulting background-free images.

## Configuration

To use the application, it is necessary to set up the necessary credentials in the `.env` file. The credentials are provided by the API provider and should be entered as follows:

```
VITE_CLOUDINARY_CLOUD_NAME=insert_cloud_name_here
VITE_CLOUDINARY_API_KEY=insert_key_here
VITE_CLOUDINARY_UPLOAD_PRESET=insert_upload_preset_here
```

## Technologies

The application is developed using the following technologies:

- React: JavaScript library used to create the user interface.
- Third-party API: used to automatically remove background from images.
- HTML and CSS: used to design and style the user interface.
