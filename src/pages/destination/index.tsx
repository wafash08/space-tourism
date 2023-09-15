import Heading from "../../components/typography/heading";
import CarouselDestination from "./carousel-destination";

export default function DestinationPage() {
  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-destination pt-24 md:pt-32 lg:pt-48 pb-8 md:px-10'>
      <div className='flex flex-col items-center md:items-start gap-8 md:gap-14 lg:gap-16'>
        <Heading as='h3' size='xs'>
          <span className='text-secondary/25 mr-4'>01</span> pick your
          destination
        </Heading>
        <div className='px-6 mx-auto'>
          <CarouselDestination />
        </div>
      </div>
    </div>
  );
}
