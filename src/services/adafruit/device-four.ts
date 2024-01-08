import axios from 'axios';
import { adafruitKey } from 'constant/adafruit-key';

export const getDataDevice4 = async () => {
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device4/data`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    return res.data;
  } catch (error) {
    console.log('error fetch device 4', error);
    return [];
  }
};
interface Params {
  value: string;
}

export const updateDevice4 = async (params: Params) => {
  console.log(params);
  try {
    const res: any = await axios({
      url: `https://io.adafruit.com/api/v2/theloc3101/feeds/device4/data`,
      method: 'POST',
      data: params,
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': adafruitKey,
      },
    });
    return res.data;
  } catch (error) {
    console.log('error set device 4', error);
    return [];
  }
};
