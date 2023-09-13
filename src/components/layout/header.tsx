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

  console.log("isExpanded >> ", isExpanded);
  return (
    <header
      onKeyUp={handleKeyUp}
      className='pt-6 pb-6 pl-6 pr-6 flex items-center justify-between bg-transparent'
    >
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className='lg:hidden'>
        <HamburgerButton
          handleClick={handleClick}
          id={NAVIGATION_ID}
          isExpanded={isExpanded}
        />
      </div>

      <nav
        id={NAVIGATION_ID}
        className={clsx(
          "h-screen fixed top-0 right-0 w-2/3 backdrop-filter backdrop-blur-xl bg-secondary/10 transition-fade-in duration-300 ease-in-out",
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
    </header>
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
