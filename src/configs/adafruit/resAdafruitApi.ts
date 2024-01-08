import axios from 'axios';

const adaRequest = axios.create({
  baseURL: `https://io.adafruit.com/api/v2/theloc3101`,
  headers: {
    'X-AIO-Key': process.env.ADAFRUIT_KEY,
    'Content-Type': 'application/json',
  },
});

export { adaRequest };
