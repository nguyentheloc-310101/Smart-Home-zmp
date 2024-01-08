import axios from 'axios';
import { adafruitKey } from 'constant/adafruit-key';

interface Params {
  value: string;
}

export const updateLed = async (params: Params) => {
  console.log(params);
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device2/data`,
      method: 'POST',
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    return res.data;
  } catch (error) {
    console.log('error set device 2', error);
    return [];
  }
};
