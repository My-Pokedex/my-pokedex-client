import Link from 'next/link';
import { DefaultProps } from '@/types/common';
import { NAV_LINK_CONTENTS } from '@/constants/contents';
import { LINK_DEFAULT_URL } from '@/constants/urls';

type Destination = 'signin' | 'signout' | 'searchResult' | 'compatibility';

interface NavLinkProps extends DefaultProps {
  destination: Destination;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({ destination, onClick }: NavLinkProps) {
  const textSize = destination === 'signout' ? 'text-base' : 'text-lg';

  return (
    <Link
      href={LINK_DEFAULT_URL[destination]}
      onClick={onClick}
      className={`block w-[6rem] h-[3.25rem] leading-[2.75rem] border-4 rounded-[.625rem] bg-navy-10 font-bold text-white-10 text-center shadow-outer/rightdown ${textSize}`}>
      {NAV_LINK_CONTENTS[destination]}
    </Link>
  );
}
