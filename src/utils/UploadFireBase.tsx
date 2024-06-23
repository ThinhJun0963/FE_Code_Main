import { UploadResult, getDownloadURL, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

const upload = async (file: File) => {

  const date = new Date();
  //same file name can cause conflict => using date like a key
  const storageRef = ref(storage, `images/${date + file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        reject("Something went wrong!" + error.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default upload;

//--------------Get clinic images from firebase storage----------------
export const fetchClinicImages = async (folderPath: string) => {
  const folderRef = ref(storage, folderPath);
  try {
    // List all images in the folder
    const { items } = await listAll(folderRef);

    // Get download URLs for each image
    const imageUrls = await Promise.all(items.map(async (item) => {
      const imageUrl = await getDownloadURL(item);
      return imageUrl;
    }));

    return imageUrls;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

//--------------Upload clinic images to firebase storage----------------
export const uploadClinicImages = (file: File): Promise<string> => {
  if (file == null) return Promise.reject("No file");

  //Set different clinicId for each folder in firebase storage
  //To test go to homepage and click on the clinic cards
  const clinicId = 1;
  const timestamp = Date.now();
  const imageRef = ref(storage, `clinics/${clinicId}/pictures/${timestamp}_${file.name}`);

  console.log("Uploading image:", imageRef.fullPath);
  return uploadBytes(imageRef, file)
    .then((result: UploadResult) => {
      const downloadURL = getDownloadURL(result.ref);
      return downloadURL;
    })
    .catch((reason) => {
      console.error("Error uploading image:", reason);
      throw reason;
    });
};