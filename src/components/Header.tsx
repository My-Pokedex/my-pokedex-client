import Logo from './Logo';
import SearchInput from './SearchInput';
import HeaderLink from './HeaderLink';

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-nowrap justify-between items-center h-[5rem] px-[1rem] border-b-4 border-black-50 bg-yellow-50 drop-shadow-lg">
      <div className="flex space-x-[1.25rem] min-w-[27.125rem]">
        <Logo location="header" />
        <SearchInput type="header" />
      </div>
      <ul className="flex space-x-[1.5rem]">
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
