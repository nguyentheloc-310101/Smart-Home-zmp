import axios from 'axios';
import { adafruitKey } from 'constant/adafruit-key';

export const getDataFan = async () => {
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device1/data`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log('error fetch led', error);
    return [];
  }
};
