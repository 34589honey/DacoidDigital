import UAParser from 'ua-parser-js';

const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();

  return {
    device: result.device.type || 'desktop',
    browser: result.browser.name || 'Unknown',
    os: result.os.name || 'Unknown',
  };
};

export default getDeviceInfo;
