import Link from 'next/link';
import { NAV_LINK_URL } from '@/constants/urls';
import { NAV_LINK_CONTENTS } from '@/constants/contents';

type Destination = 'signin' | 'signout' | 'searchResult' | 'compatibility';

export default function NavLink({ destination }: { destination: Destination }) {
  const textSize = destination === 'signout' ? 'text-base' : 'text-lg';

  return (
    <Link
      href={NAV_LINK_URL[destination]}
      className={`block w-[6rem] h-[3.25rem] leading-[2.75rem] border-4 rounded-[.625rem] bg-navy-10 font-bold ${textSize} text-white-10 text-center shadow-outer/rightdown`}>
      {NAV_LINK_CONTENTS[destination]}
    </Link>
  );
}
