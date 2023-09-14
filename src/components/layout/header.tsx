import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import NavText from "../typography/nav-text";
import clsx from "clsx";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const NAVIGATION_ID = "mainNavigation";

  function handleClick() {
    setIsExpanded(isExpanded => !isExpanded);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {
    if (e.code === "Escape") {
      setIsExpanded(false);
    }
  }

  return (
    <header
      onKeyUp={handleKeyUp}
      className='py-6 md:py-0 pl-6 pr-6 md:pr-0 flex items-center justify-between bg-transparent absolute top-0 left-0 w-full'
    >
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      <div className='md:hidden'>
        <HamburgerButton
          handleClick={handleClick}
          id={NAVIGATION_ID}
          isExpanded={isExpanded}
        />
      </div>

      <nav
        id={NAVIGATION_ID}
        className={clsx(
          "md:hidden h-screen fixed top-0 right-0 w-2/3 backdrop-filter backdrop-blur-xl bg-secondary/10 transition-fade-in duration-300 ease-in-out",
          isExpanded ? "visible translate-x-0" : "invisible translate-x-full"
        )}
      >
        <ul className='ml-8 mt-28 flex flex-col gap-8'>
          <li className='border-r-transparent border-r-4 transition-colors duration-150 hover:border-r-secondary'>
            <NavText to='/' classNames='flex items-center gap-3'>
              <span className='font-bold'>00</span>Home
            </NavText>
          </li>
          <li className='border-r-transparent border-r-4 transition-colors duration-150 hover:border-r-secondary'>
            <NavText to='/destination' classNames='flex items-center gap-3'>
              <span className='font-bold'>01</span>Destination
            </NavText>
          </li>
          <li className='border-r-transparent border-r-4 transition-colors duration-150 hover:border-r-secondary'>
            <NavText to='/crew' classNames='flex items-center gap-3'>
              <span className='font-bold'>02</span>Crew
            </NavText>
          </li>
          <li className='border-r-transparent border-r-4 transition-colors duration-150 hover:border-r-secondary'>
            <NavText to='/technology' classNames='flex items-center gap-3'>
              <span className='font-bold'>03</span>Technology
            </NavText>
          </li>
        </ul>
      </nav>

      <div className='hidden md:block relative'>
        <div className='hidden lg:block w-[450px] h-[1px] bg-secondary absolute top-1/2 -translate-y-1/2 z-20 -left-2/4' />
        <NavbarDesktop />
      </div>
    </header>
  );
}

function NavbarDesktop() {
  return (
    <nav className='h-24 lg:w-[830px] md:w-[450px] backdrop-filter backdrop-blur-xl bg-secondary/10'>
      <ul className='flex items-center justify-evenly h-full'>
        <li className='flex h-full items-center border-b-4 border-b-transparent hover:border-b-secondary'>
          <NavText to='/' classNames='flex h-full items-center gap-3'>
            <span className='font-bold hidden lg:inline'>00</span>Home
          </NavText>
        </li>
        <li className='flex h-full items-center border-b-4 border-b-transparent hover:border-b-secondary'>
          <NavText
            to='/destination'
            classNames='flex h-full items-center gap-3'
          >
            <span className='font-bold hidden lg:inline'>01</span>Destination
          </NavText>
        </li>
        <li className='flex h-full items-center border-b-4 border-b-transparent hover:border-b-secondary'>
          <NavText to='/crew' classNames='flex h-full items-center gap-3'>
            <span className='font-bold hidden lg:inline'>02</span>Crew
          </NavText>
        </li>
        <li className='flex h-full items-center border-b-4 border-b-transparent hover:border-b-secondary'>
          <NavText to='/technology' classNames='flex h-full items-center gap-3'>
            <span className='font-bold hidden lg:inline'>03</span>Technology
          </NavText>
        </li>
      </ul>
    </nav>
  );
}

function HamburgerButton({
  handleClick,
  id,
  isExpanded,
}: {
  handleClick: () => void;
  id: string;
  isExpanded: boolean;
}) {
  return (
    <button
      type='button'
      onClick={handleClick}
      aria-expanded={isExpanded}
      aria-label='Menu'
      aria-controls={id}
      className='relative z-50'
    >
      {isExpanded ? (
        // close
        <svg
          width='20'
          height='21'
          viewBox='0 0 20 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group'>
            <rect
              id='Rectangle Copy'
              x='2.5752'
              y='0.954102'
              width='24'
              height='3'
              transform='rotate(45 2.5752 0.954102)'
              fill='#D0D6F9'
            />
            <rect
              id='Rectangle Copy 3'
              x='0.454102'
              y='17.9246'
              width='24'
              height='3'
              transform='rotate(-45 0.454102 17.9246)'
              fill='#D0D6F9'
            />
          </g>
        </svg>
      ) : (
        // hamburger
        <svg
          width='24'
          height='21'
          viewBox='0 0 24 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <g id='Group'>
            <rect id='Rectangle' width='24' height='3' fill='#D0D6F9' />
            <rect
              id='Rectangle Copy'
              y='9'
              width='24'
              height='3'
              fill='#D0D6F9'
            />
            <rect
              id='Rectangle Copy 2'
              y='18'
              width='24'
              height='3'
              fill='#D0D6F9'
            />
          </g>
        </svg>
      )}
    </button>
  );
}
