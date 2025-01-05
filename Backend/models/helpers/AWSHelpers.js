const {
  S3Client,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  PutObjectCommand,
  GetObjectCommand
} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
require('dotenv').config();

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const params = {
  Bucket: process.env.AWS_INPUT_BUCKET,
};

const postCloudStorage = multerS3({
  s3,
  bucket: process.env.AWS_INPUT_BUCKET,
  contentType: (req, file, abCallback) => {
    abCallback(null, file.mimetype);
  },
  contentDisposition: 'attachment',
  metadata(request, file, abCallback) {
    const fieldname = file.fieldname.split(' ').join('_');
    abCallback(null, { fieldname });
  },
  key(request, file, abCallback) {
    const r = Math.random().toString(36).substring(7);
    const { ext } = path.parse(file.originalname);
    let newFileName = `${Date.now() + r}-${path.parse(file.originalname).name}`;
    const fullPath = `post/${newFileName}${ext}`;
    abCallback(null, fullPath);
  },
});


exports.postUpload = multer({
  storage: postCloudStorage,
});

exports.generateSignedURL = async (body) => {
  Object.assign(params, body);
  const command = new PutObjectCommand(params);
  return await getSignedUrl(s3, command, {
    expiresIn: 3000,
  });
};

exports.removeFile = async (filePath) => {
  if (filePath) {
    params.Key = filePath;
    const command = new DeleteObjectCommand(params);
    try {
      let response = await s3.send(command);
      console.log("File deleted successfully.");
      return response
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  }
};
exports.removeAllFiles = async (files) => {
  try {
    const deleteCommand = new DeleteObjectsCommand({
      Bucket: params.Bucket,
      Delete: {
        Objects: files,
        Quiet: false,
      },
    });
    const response = await s3.send(deleteCommand);
    console.log("Successfully deleted the files:", response.Deleted);
  } catch (error) {
    console.error("Error deleting the files:", error);
  }
};

exports.getFileAsBase64 = async (filePath) => {
  params.Key = filePath;
  const command = new GetObjectCommand(params);
  try {
    const response = await s3.send(command);
    const chunks = [];
    for await (const chunk of response.Body) {
      chunks.push(chunk);
    }
    const objectData = Buffer.concat(chunks).toString("base64");
    return objectData;
  } catch (error) {
    console.error("Error retrieving object:", error);
  }
};
