export default function handler(req, res) {
  // res.status(200).send(req.query);
  // res.status(200).send(req.body);
  // res.status(200).send(req.cookies);
  // res.status(200).send(req.method);
  switch (req.method) {
    case 'PATCH':
      res.send('short-link 수정');
      break;
    case 'GET':
      res.send('short-link 조회');
      break;
    default:
      res.send();
      break;
  }
}
