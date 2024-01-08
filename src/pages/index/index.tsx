import InfoList from 'components/devices/InfoList';
import { Divider } from 'components/divider';
import React, { useEffect, useState } from 'react';
import { getDataHumid } from 'services/adafruit';
import { Box, Page } from 'zmp-ui';
import { Banner } from './banner';
import { Welcome } from './welcome';

const HomePage: React.FunctionComponent = () => {
  const [humidData, setHumidData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getDataHumid();
      setHumidData(res);
    };
    fetchData();
  }, []);
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Banner />
        <Divider />
        <InfoList />
      </Box>
    </Page>
  );
};

export default HomePage;
