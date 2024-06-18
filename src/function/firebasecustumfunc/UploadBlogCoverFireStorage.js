import fb from "../../Firebase/FireConfig";


const storage = fb.storage(); // Get a reference to the Storage service

const UploadBlogCoverFireStorage = async (imageFile) => {
    if (!imageFile) return; // Handle no image selected case
    let url;
    const storageRef = storage.ref(); // Create a root reference

    // Create a child reference with a unique filename (recommended)
    const filename = `${Date.now()}-${imageFile.name}`;
    const imageRef = storageRef.child('images/cover' + filename);

    try {
        // Upload the image to the storage bucket
        await imageRef.put(imageFile);

        // Get the download URL for the uploaded image
        const downloadURL = await imageRef.getDownloadURL();
        console.log('Image uploaded successfully! URL:', downloadURL);
        url = downloadURL




        // You can store the downloadURL in your database or use it for other purposes
    } catch (error) {
        console.error('Error uploading image:', error);
        // Handle upload errors appropriately
    }
    return url
}
export default UploadBlogCoverFireStorage;