import Link from '../models/Link.js';
import { nanoid } from 'nanoid';
import UAParser from 'ua-parser-js';

export const createLink = async (req, res) => {
  const { longUrl, alias, expirationDate } = req.body;
  const shortCode = alias || nanoid(6);
  const shortUrl = `https://yourdomain.com/${shortCode}`;

  const newLink = new Link({
    longUrl,
    shortCode,
    userId: req.user.email,
    alias,
    expirationDate
  });

  await newLink.save();
  res.json({ shortUrl });
};

export const redirectLink = async (req, res) => {
  const { code } = req.params;
  const link = await Link.findOne({ shortCode: code });

  if (!link) return res.status(404).send('Not found');

  link.clicks += 1;

  const parser = new UAParser(req.headers['user-agent']);
  const device = parser.getDevice().type || 'desktop';
  const browser = parser.getBrowser().name;

  link.analytics.push({
    timestamp: new Date(),
    ip: req.ip,
    device,
    browser,
  });

  await link.save();
  res.redirect(link.longUrl);
};

export const getLinks = async (req, res) => {
  const links = await Link.find({ userId: req.user.email });
  res.json(links);
};
