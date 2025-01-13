import mongoose from 'mongoose';
import dbConnect from '../../../../db/dbConnect';
import QRCode from '../../../../db/models/QRCode';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      res.status(201).send(req.body);
      break;
    case 'GET':
      const props = Object.keys(QRCode.schema.paths);
      console.log(props);

      res.status(200).send([
        {
          id: 'abc',
          title: '위키피디아 next.js',
          url: 'https://en.wikipedia.org/wiki/Next.js',
        },
        {
          id: 'def',
          title: '코드잇 자유게시판판',
          url: 'https://codeit.kr/community/general',
        },
        {
          id: 'ghi',
          title: '코드잇 질문 답변',
          url: 'https://codeit.kr/community/questions',
        },
      ]);
      break;

    default:
      res.status(404).send();
      break;
  }
  res.status(200).send('hi next.js');
}
