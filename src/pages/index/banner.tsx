import React, { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDummyImage } from 'utils/product';
import { Box } from 'zmp-ui';

const imageBanner = [
  'https://ucarecdn.com/fa6e8622-07d9-4502-af45-5568e1396ade/-/preview/500x500/-/quality/smart_retina/-/format/auto/',
  'https://ucarecdn.com/b863d6bf-0fc5-40bd-bd1d-225835df77ee/-/preview/500x500/-/quality/smart_retina/-/format/auto/',
  'https://ucarecdn.com/017c902b-73af-4fe7-bd2a-35469e00be8f/-/preview/500x500/-/quality/smart_retina/-/format/auto/',
  'https://ucarecdn.com/c82fe206-0bfd-4c77-b00c-e024902f5bc9/-/preview/500x500/-/quality/smart_retina/-/format/auto/',
  // // 'https://ucarecdn.com/016e07b4-04be-4dad-8a99-9fae38b0af79/-/preview/500x500/-/quality/smart_retina/-/format/auto/',
];

export const Banner: FC = () => {
  return (
    <Box
      className="bg-white"
      pb={4}>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        autoplay
        loop
        cssMode>
        {imageBanner.map((banner, i) => {
          return (
            <SwiperSlide
              key={i}
              className="px-4">
              <Box
                className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
                style={{ backgroundImage: `url(${banner})` }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
