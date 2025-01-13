const { default: mongoose } = require('mongoose');

const shortLinkSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    url: { type: String, default: '' },
    shortUrl: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

const ShortLink =
  mongoose.model['ShortLink'] || mongoose.model('ShortLink', shortLinkSchema);

export default ShortLink;