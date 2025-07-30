import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OtherSub = () => {
  return (
    <div className="text-gray-80 ml-6 p-[0.10px]">
      <ul className="ani flex items-center justify-start gap-5 p-2">
        <Link
          href="https://www.ecofarmsafrica.com/"
          className="flex items-center  justify-center gap-3  rounded-sm bg-slate-100 px-[5px] py-[2px] "
        >
          <Image
            src="/ecofarmsa.png"
            width={40}
            height={40}
            alt="tan ecofarms african"
          />
          <h2 className="text-gray-90 ">Ecofarms Africa LTD</h2>
        </Link>
        <Link
          href="https://valkem.vercel.app/"
          className="flex flex-col items-center justify-center gap-3   rounded-sm bg-slate-100 p-2 lg:flex-row"
        >
          <Image
            src="/valkem.png"
            width={80}
            height={80}
            alt="valkem procurements"
          />
          <h2 className="flex flex-col items-center justify-center text-gray-90 ">
            Valkem Engineering and Technology Services
          </h2>
        </Link>
        {/* <li className="flex flex-col items-center justify-center   rounded-sm bg-slate-100 p-2 ">
          <Image src="/valkem.png" width={80} height={80} alt="" />
          <h2 className="flex flex-col items-center justify-center text-gray-90 ">
            Valkem Engineering and Technology{' '}
            <span className="block">Services</span>
          </h2>
        </li> */}
        {/* <li className="flex flex-col items-center justify-center gap-3 rounded-sm bg-slate-100 p-1 lg:flex-row">
          <Image src="/tanlogo.png" width={80} height={80} alt="" />
          <h2>TAN Life Sciences</h2>
        </li> */}
      </ul>
    </div>
  );
};

export default OtherSub;
