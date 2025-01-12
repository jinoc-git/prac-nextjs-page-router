export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  switch (req.method) {
    case 'GET':
      res.status(200).send(id);
      break;
    case 'PATCH':
      res.send({ id, ...req.body });
      break;
    case 'DELETE':
      res.status(204).send();
      break;
    default:
      res.send();
      break;
  }
}
