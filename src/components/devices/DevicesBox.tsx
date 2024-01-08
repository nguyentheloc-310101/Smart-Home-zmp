import React, { useEffect, useState } from 'react';
import { Box, Switch } from 'zmp-ui';
interface DevicesBoxProps {
  name: string;
  image: string;
  state?: any;
  value: any;
  type: string;
  onHandleChange?: any;
}
const DevicesBox = ({
  name,
  image,
  value,
  type,
  onHandleChange,
}: DevicesBoxProps) => {
  const [checkedSwitch, setCheckedSwitch] = useState<boolean>(false);
  useEffect(() => {
    if (value == '0') {
      setCheckedSwitch(false);
    } else if (value == '1') {
      setCheckedSwitch(true);
    }
  }, [value]);
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
        <Switch
          checked={checkedSwitch}
          onChange={onHandleChange}
          //   defaultChecked={checkedSwitch}
        />
      </Box>

      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <ItemsInfo
            value={value ? value : '0'}
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

export default DevicesBox;

interface ItemsInfoProps {
  value: any;
  type: any;
}
const ItemsInfo = ({ value, type }: ItemsInfoProps) => {
  return (
    <div>
      <Box>
        {type == 'LED' || type == 'FAN' || type == 'unknown' ? (
          <div>
            {' '}
            {value == '0' ? (
              <span className="font-[700] text-[red]">OFF</span>
            ) : (
              <span className="font-[700] text-[green]">ON</span>
            )}
          </div>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};
