import React from 'react';
import BoxInfo from './BoxInfo';

const InfoList = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-x-[0.5rem] bg-[white] p-3">
      <BoxInfo
        name={'Temperature and Humidity'}
        image={
          'https://ucarecdn.com/7fa3d487-294a-4e49-bcd2-6a2f698278e5/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
        }
      />
    </div>
  );
};

export default InfoList;
