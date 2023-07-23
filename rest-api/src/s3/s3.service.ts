import { Injectable } from '@nestjs/common';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  getObject = async () => {
    // const command = new GetObjectCommand({
    //   Bucket: 'mapdiary-pictures',
    //   Key: 'littleVictories.jpeg',
    // });
  };
}
