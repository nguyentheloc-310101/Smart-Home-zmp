import InfoList from 'components/devices/InfoList';
import { Divider } from 'components/divider';
import React, { useEffect, useState } from 'react';
import {
  getDataDevice3,
  getDataDevice4,
  getDataHumid,
  getDataLed,
  getDataTemp,
} from 'services/adafruit';
import { Box, Page } from 'zmp-ui';
import { Banner } from './banner';
import { Welcome } from './welcome';
import DevicesList from 'components/devices/DevicesList';
import { getDataFan } from 'services/adafruit/get-data-fan';

const HomePage: React.FunctionComponent = () => {
  const [humidData, setHumidData] = useState<any[]>([]);
  const [tempData, setTempData] = useState<any[]>([]);
  const [ledData, setLedData] = useState<any[]>([]);
  const [fanData, setFanData] = useState<any[]>([]);

  const [device3Data, setDevice3Data] = useState<any[]>([]);
  const [device4Data, setDevice4Data] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const humid = await getDataHumid();
      const temp = await getDataTemp();
      const led = await getDataLed();
      const fan = await getDataFan();
      const device3 = await getDataDevice3();
      const device4 = await getDataDevice4();

      setFanData(fan);
      setLedData(led);
      setHumidData(humid);
      setTempData(temp);
      setDevice3Data(device3);
      setDevice4Data(device4);
    };
    fetchData();
  }, []);
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Banner />
        <Divider />
        <Divider />

        <InfoList
          temperature={humidData[0]?.value}
          humidity={tempData[0]?.value}
        />
        <Divider />
        <Divider />

        <DevicesList
          ledData={ledData[0]?.value}
          fanData={fanData[0]?.value}
          device3Data={device3Data[0]?.value}
          device4Data={device4Data[0]?.value}
        />
      </Box>
    </Page>
  );
};

export default HomePage;
