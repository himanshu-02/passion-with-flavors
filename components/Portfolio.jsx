import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Cooking Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczOxjWAa5-3a8Dl0BbbnI1xtJgIGkMFRAZiKtvib8W_wS-GEusb06vi_vacLC4LWDf9yggNuo40d5LQJ86gtJL5H7_r-38t3gqGUC1aOeUcWzf9FJh9y6Px0ipawIsqx05Cy48BpMmO9_Oop54cCHSGzmw=w1287-h965-s-no?authuser=1'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczNZ9GVabFhYYTSB8dQT1m5VW-KzIjUqvtCgqDP9x0PZwxOk2_5XFsVBQR5Ijverusjy4Slobyt5Q-X2c3Q7sKM9iAhOQupTu5copeNQdiWzXTz1WpXfAXsuMdhHodDfiVfS0bNfOnHJ20vuWw2Fzu68Dg=w1287-h965-s-no?authuser=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczPYocyXQ3tkqSWUTN0IrW5IA9C1Cw02eIDd7jfpKRKXVCY3ZNGH5ZE58a4eKNsuvdzzpPyiAPMhldYHuoRTglO4RpWllxwoLqomhBfbaXiPqmvPp57q28DEYasYG68wnfEw1Sx7DZkF01GgARh2zmWnag=w1307-h980-s-no?authuser=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczPy_jC2Elllv_MClhr1h4CPTQCoMjH3sKLOOdVPeD7zK7dDuUQH_b3382ZPNWlTr3_-xRjpQtvzaLTUqrqmBDuO7YUUlj1qgVlc04sAhl_3gcNwlBXzE8ZeT662dbrShnXqNLs7gPv7_wOnZEZoo2FIvA=w1465-h980-s-no?authuser=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://lh3.googleusercontent.com/pw/AP1GczOrmPOkG7yxhFJ8FrE10H5-FJnLece17jE1w7aVk1pKs1i5j1TVXb0HPDw72KwBlEZ_Sy6d4IrMeZcxq12lXM73s7jb9GLxd_iKrjJMutmEInCYmfv8V0QcEvE9dn4yb-tCpqcu0L3eiKwayD9guzrKNg=w928-h696-s-no?authuser=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
