import BodyText from "../../components/typography/body-text";
import Heading from "../../components/typography/heading";
import ExploreButton from "./explore-button";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-home pb-12 md:pb-24 lg:pb-32'>
      <div className='w-10/12 max-w-[1110px] pt-[112px] md:pt-[200px] lg:pt-[380px] flex flex-col lg:flex-row lg:justify-between items-center lg:items-end gap-20 md:gap-36 lg:gap-0 mx-6 md:mx-auto'>
        <div className='max-w-[450px] text-center lg:text-left flex flex-col gap-4 md:gap-6'>
          <Heading size='xs' as={"h3"} color='gray'>
            So, you want to travel to
          </Heading>
          <Heading size='xl'>Space</Heading>
          <BodyText color='gray'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </BodyText>
        </div>
        <div>
          <ExploreButton>Explore</ExploreButton>
        </div>
      </div>
    </div>
  );
}
