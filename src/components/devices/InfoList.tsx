import React from 'react';
import BoxInfo from './BoxInfo';
interface InfoListProps {
  temperature: any;
  humidity: any;
}
const InfoList = ({ temperature, humidity }: InfoListProps) => {
  return (
    <div className="p-3">
      <div className="font-[500] text-left text-[20px] py-[10px]">
        General information
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-[0.5rem] bg-[white] gap-[24px] p-3">
        <BoxInfo
          value={temperature}
          name={'Temperature'}
          image={
            'https://ucarecdn.com/7fa3d487-294a-4e49-bcd2-6a2f698278e5/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          type={'temperature'}
        />
        <BoxInfo
          value={humidity}
          name={'Humidity'}
          image={
            'https://ucarecdn.com/dfa56804-67c1-4431-b28f-b45ef063ccb4/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          type={'humidity'}
        />
      </div>
    </div>
  );
};

export default InfoList;
