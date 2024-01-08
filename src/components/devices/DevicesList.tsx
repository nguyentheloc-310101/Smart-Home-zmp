import React, { useEffect, useState } from 'react';
import DevicesBox from './DevicesBox';
import { updateLed } from 'services/adafruit/update-led';
import { updateFan } from 'services/adafruit/update-fan';
import { updateDevice3, updateDevice4 } from 'services/adafruit';
interface DeviceListProps {
  ledData: any;
  fanData: any;
  device3Data: any;
  device4Data: any;
}

const DevicesList = ({
  ledData,
  fanData,
  device3Data,
  device4Data,
}: DeviceListProps) => {
  const [valueLed, setValueLed] = useState<any>(ledData);
  const [valueFan, setValueFan] = useState<any>(fanData);
  const [valueDevice3, setValueDevice3] = useState<any>(fanData);

  const [valueDevice4, setValueDevice4] = useState<any>(fanData);

  useEffect(() => {
    setValueLed(ledData);
    setValueFan(fanData);
    setValueDevice3(device3Data);
    setValueDevice4(device4Data);
  }, [ledData, fanData, device3Data, device4Data]);

  const handleToggleLed = async (value: boolean) => {
    if (value) {
      setValueLed('1');
      await updateLed({ value: '1' });
    } else if (!value) {
      setValueLed('0');
      await updateLed({ value: '0' });
    }
  };
  const handleToggleFan = async (value: boolean) => {
    if (value) {
      setValueFan('1');
      await updateFan({ value: '1' });
    } else if (!value) {
      setValueFan('0');
      await updateFan({ value: '0' });
    }
  };

  const handleToggleDevice3 = async (value: boolean) => {
    if (value) {
      setValueDevice3('1');
      await updateDevice3({ value: '1' });
    } else if (!value) {
      setValueDevice3('0');
      await updateDevice3({ value: '0' });
    }
  };

  const handleToggleDevice4 = async (value: boolean) => {
    if (value) {
      setValueDevice4('1');
      await updateDevice4({ value: '1' });
    } else if (!value) {
      setValueDevice4('0');
      await updateDevice4({ value: '0' });
    }
  };
  return (
    <div className="p-3">
      <div className="font-[500] text-left text-[20px] py-[10px]">
        All devices control
      </div>
      <div className="flex items-center justify-center flex-wrap bg-[white] gap-[24px] ">
        <DevicesBox
          name={'Light Bulb'}
          image={
            'https://ucarecdn.com/47c8fc70-9315-4f0a-8755-a34928669e9c/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          value={valueLed}
          type={'LED'}
          onHandleChange={async (value) => {
            await handleToggleLed(value.target?.checked);
          }}
        />
        <DevicesBox
          name={'Fan'}
          image={
            'https://ucarecdn.com/47c8fc70-9315-4f0a-8755-a34928669e9c/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          value={valueFan}
          type={'FAN'}
          onHandleChange={async (value) => {
            await handleToggleFan(value.target?.checked);
          }}
        />
        <DevicesBox
          name={'Device 3'}
          image={
            'https://ucarecdn.com/47c8fc70-9315-4f0a-8755-a34928669e9c/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          value={valueDevice3}
          type={'unknown'}
          onHandleChange={async (value) => {
            await handleToggleDevice3(value.target?.checked);
          }}
        />
        <DevicesBox
          name={'Device 4'}
          image={
            'https://ucarecdn.com/47c8fc70-9315-4f0a-8755-a34928669e9c/-/preview/500x500/-/quality/smart_retina/-/format/auto/'
          }
          value={valueDevice4}
          type={'unknown'}
          onHandleChange={async (value) => {
            await handleToggleDevice4(value.target?.checked);
          }}
        />
      </div>
    </div>
  );
};

export default DevicesList;
