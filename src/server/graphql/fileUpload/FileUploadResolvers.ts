import { Request } from 'express';
import formidable from 'formidable';
import Audio, { IAudio } from '../../models/uploadAudio/type';
import { Context, UploadAudioResponse } from './graphql';

const uploadAudio = async (req: Request): Promise<IAudio | null> => {
  const form = formidable({ multiples: false });

  return new Promise((resolve, reject) => {
    form.parse(
      req,
      async (err, fields: formidable.Fields, files: formidable.Files) => {
        if (err) {
          reject(err);
          return;
        }

        const userId = fields.userId as string; // Get userId from fields
        const file = files.file; // Access the uploaded file
        const filename = file.originalFilename || ''; // Get original filename

        // Save audio information to MongoDB
        const audio = new Audio({ filename, userId });
        await audio.save();

        resolve(audio);
      }
    );
  });
};

export const resolvers = {
  Mutation: {
    uploadAudio: async (
      _: any,
      __: any,
      { req }: Context
    ): Promise<UploadAudioResponse | null> => {
      return await uploadAudio(req);
    }
  }
};
