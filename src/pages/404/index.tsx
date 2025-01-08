import { Link } from 'react-router-dom';
import PlanetSvg from '~/assets/svgs/planet.svg?react';
import AstronautSvg from '~/assets/svgs/astronaut.svg?react';

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen bg-[#25344C] text-white flex items-center justify-center">
      <div className="relative w-full h-full bg-particles bg-center bg-repeat bg-contain stars-animation">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-[100px] font-extrabold">404</h1>
          <p className="text-center text-lg leading-6 max-w-xs font-normal">
            LOST IN{' '}
            <span className="relative inline-block">
              SPACE
              <span className="absolute left-0 bottom-1/2 w-full h-[3px] bg-[#fdba26]" />
            </span>{' '}
            <span className="font-medium text-[#fdba26]">Phong Dev</span>?
            <br />
            Hmm, looks like that page does&apos;t exist.
          </p>
          <div className="relative w-[390px] h-[390px]">
            <AstronautSvg className="absolute w-12 h-12 top-5 right-6 animate-spin astronaut-animation" />
            <PlanetSvg />
          </div>
          <Link to="/" className="mt-6">
            <button className="flex items-center px-4 py-2 border border-white text-white hover:text-[#fdba26] hover:border-[#fdba26] rounded">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
