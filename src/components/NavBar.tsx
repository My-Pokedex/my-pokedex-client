import NavLink from './NavLink';

export default function NavBar() {
  return (
    <nav
      className={`relative w-[11.75rem] h-[14.75rem] bg-[url('/assets/img/nav_bg.png')] bg-no-repeat bg-left-top`}>
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
