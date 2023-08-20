import { Logo, SearchInput } from '@/components';
import HeaderLink from './HeaderLink';

export default function Header() {
  return (
    <header className="fixed flex flex-nowrap justify-between items-center w-full h-[5rem] px-[1rem] border-b-4 border-black-50 bg-yellow-50 drop-shadow-lg z-50">
      <div className="flex gap-5 min-w-[27.125rem]">
        <Logo location="header" />
        <SearchInput type="header" />
      </div>
      <ul className="flex gap-6">
        <li>
          <HeaderLink destination="compatibility" />
        </li>
        <li>
          <HeaderLink destination="combinations" />
        </li>
        <li>
          <HeaderLink destination="signin" />
        </li>
      </ul>
    </header>
  );
}
