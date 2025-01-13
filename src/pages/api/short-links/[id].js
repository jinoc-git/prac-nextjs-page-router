import dbConnect from '../../../../db/dbConnect';
import ShortLink from '../../../../db/models/ShortLink';

export default async function handler(req, res) {
  // res.status(200).send(req.query);
  // res.status(200).send(req.body);
  // res.status(200).send(req.cookies);
  // res.status(200).send(req.method);
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'PATCH':
      res.send('short-link 수정');
      break;
    case 'GET':
      const shortLink = await ShortLink.findById(id);
      res.send(shortLink);
      break;
    default:
      res.send();
      break;
  }
}
