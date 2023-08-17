import { twMerge } from 'tailwind-merge';
import NavLink from './NavLink';
import { DefaultProps } from '@/types/common';

export default function NavBar({ className }: DefaultProps) {
  return (
    <nav
      className={twMerge(
        `relative w-[11.75rem] h-[14.75rem] bg-[url('/assets/img/bg_nav.png')] bg-no-repeat bg-left-top`,
        className,
      )}>
      <ul className="absolute top-[2.0625rem] left-[5rem] flex-col space-y-[.625rem] w-max h-[12.5rem]">
        <li>
          <NavLink destination="signin" />
        </li>
        <li>
          <NavLink destination="searchResult" />
        </li>
        <li>
          <NavLink destination="compatibility" />
        </li>
      </ul>
    </nav>
  );
}
