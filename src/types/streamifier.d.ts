declare module "streamifier" {
  interface Streamifier {
    createReadStream(buffer: Buffer): NodeJS.ReadableStream;
  }

  const streamifier: {
    createReadStream(buffer: Buffer): NodeJS.ReadableStream;
  };

  export = streamifier;
}
