import axios from 'axios';
import { adafruitKey } from 'constant/adafruit-key';

export const getDataDevice3 = async () => {
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device3/data`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    return res.data;
  } catch (error) {
    console.log('error fetch device 3', error);
    return [];
  }
};
interface Params {
  value: string;
}

export const updateDevice3 = async (params: Params) => {
  console.log(params);
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device3/data`,
      method: 'POST',
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    return res.data;
  } catch (error) {
    console.log('error set device 3', error);
    return [];
  }
};
