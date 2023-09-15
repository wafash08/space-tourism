import clsx from "clsx";
import BodyText from "../../components/typography/body-text";
import Heading from "../../components/typography/heading";
import SubHeading from "../../components/typography/sub-heading";

export default function CarouselDestination() {
  return (
    <div className='max-w-[1100px]'>
      {/* scroller */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-14'>
        <div className='w-[170px] md:w-[300px] lg:flex-1'>
          <img src='/images/moon.webp' alt='Moon' />
        </div>
        <div className='flex flex-col gap-5 md:gap-8 lg:flex-1'>
          {/* pagination */}
          <nav className='text-secondary flex items-center justify-center lg:justify-start gap-5 md:gap-8 flex-wrap'>
            <CarouselControl isActive={true}>moon</CarouselControl>
            <CarouselControl>mars</CarouselControl>
            <CarouselControl>europe</CarouselControl>
            <CarouselControl>titan</CarouselControl>
          </nav>
          {/* end pagination */}
          <div className='flex flex-col gap-8'>
            {/* deskripsi */}
            <div className='text-center lg:text-left flex flex-col md:gap-2'>
              <Heading size='l'>moon</Heading>
              <BodyText color='gray'>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </BodyText>
            </div>
            <div className='border-t border-t-[#383B4B] text-center lg:text-left flex flex-col md:flex-row md:justify-center md:items-center lg:justify-start gap-8 md:gap-16 py-8'>
              <div className='flex flex-col gap-3'>
                <SubHeading variant='small'>avg. distance</SubHeading>
                <SubHeading>384,400 km</SubHeading>
              </div>
              <div className='flex flex-col gap-3'>
                <SubHeading variant='small'>Est. travel time</SubHeading>
                <SubHeading>3 days</SubHeading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CarouselControlProps = {
  children: React.ReactNode;
  isActive?: boolean;
};

function CarouselControl({ children, isActive }: CarouselControlProps) {
  return (
    <button
      type='button'
      className={clsx(
        "uppercase font-barlow-condensed text-sm md:text-base tracking-[2.36px] md:tracking-[2.7px] px-1 py-2 border-b-[3px] border-b-transparent transition-colors hover:border-b-[#979797]",
        isActive && "border-b-secondary"
      )}
    >
      {children}
    </button>
  );
}
