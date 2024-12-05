import { Upload } from './upload';
import { GraphQLUpload } from 'graphql-upload';
import mongoose from 'mongoose';
import { createWriteStream } from 'fs';
import path from 'path';
import { Readable } from 'stream';
import Metadata, { IMetadata } from './schema';
import { finished } from 'stream/promises';
import { GridFSBucket } from 'mongodb';

const bucketName = 'uploads';

const uploadFile = async (
  _:,
  { file, userId }: { file: Upload; userId?: string }
): Promise<IMetadata> => {
  const { createReadStream, filename } = await file;

  // Create a stream to upload the file to GridFS
  const client = await mongoose.connection.getClient();
  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName });

  const stream = createReadStream();
  const uploadStream = bucket.openUploadStream(filename);
  stream.pipe(uploadStream);

  // Wait for the stream to finish
  await finished(uploadStream);

  // Save metadata in the Metadata collection
  const metadata = new Metadata({ filename, userId });
  await metadata.save();

  return metadata;
};

export const resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    uploadFile
  }
};
