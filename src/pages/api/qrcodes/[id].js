import QRCode from '../../../../db/models/QRCode';

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  switch (req.method) {
    case 'GET':
      const qrCode = await QRCode.findById(id);
      res.status(200).send(qrCode);
      break;
    case 'PATCH':
      const updatedQRCode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedQRCode);
      break;
    case 'DELETE':
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();
      break;
    default:
      res.send();
      break;
  }
}
