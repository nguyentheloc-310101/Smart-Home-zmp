import React from 'react';
import { Avatar, Box, Icon } from 'zmp-ui';
interface BoxDeviceProps {
  name: string;
  image: string;
  state?: any;
  value: any;
  type: string;
}
const BoxInfo = ({ name, image, value, type }: BoxDeviceProps) => {
  return (
    <Box className="w-full box-device p-[24px] overflow-hidden h-fit flex flex-col gap-[24px]">
      <Box className="flex items-center justify-between">
        <div className="flex items-center justify-center  gap-[10px] ">
          <Box className=" w-[2.5rem] h-[2.5rem] rounded-[50%] bg-[#D2E0EE] p-[5px]">
            <img
              className="object-contain"
              src={image}
            />
          </Box>
          <div className="title-text-device">{name}</div>
        </div>
        <Icon
          icon={'zi-backup-success-solid'}
          className="text-[green]"
        />
      </Box>

      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <ItemsInfo
            icon={
              type == 'temperature'
                ? 'https://ucarecdn.com/83a0839e-f29f-4724-a717-8a1ee3049146/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
                : 'https://ucarecdn.com/e1e327de-bd6f-4fb7-a558-ce4d0fee3f88/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
            }
            value={value ? value : 0}
            type={type}
          />
        </div>
        <div className="bg-[#F7F7F9] py-[8px] px-[16px] text-[#9A9B9E] font-[700] text-[10px] leading-[14px] rounded-[32px]">
          Details
        </div>
      </div>
    </Box>
  );
};

export default BoxInfo;

interface ItemsInfoProps {
  icon: string;
  value: any;
  type?: any;
}
const ItemsInfo = ({ icon, value, type }: ItemsInfoProps) => {
  return (
    <div>
      <Box className="flex rounded-[50%] gap-[4px]">
        <img
          className="object-contain  w-[24px] h-[24px] "
          src={icon}
        />
        <Box>
          <div className="text-[#75A7F7] font-[700] text-[30px] leading-[22px]">
            {value}{' '}
            {type == 'temperature' ? (
              <span>&deg;C</span>
            ) : type == 'humidity' ? (
              <span>%</span>
            ) : (
              <span></span>
            )}
          </div>
        </Box>
      </Box>
    </div>
  );
};
