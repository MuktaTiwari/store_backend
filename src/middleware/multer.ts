// middleware/upload.ts
import multer from "multer";

// Store in memory for Cloudinary upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
