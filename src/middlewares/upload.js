import multer, { memoryStorage } from "multer";

const storage = memoryStorage(); // Lưu vào RAM
const upload = multer({ storage });

export default upload;
