import Link from 'next/link';
import { DefaultProps } from '@/types/common';
import { HEADER_LINK_TITLES } from '@/constants/contents';

interface HeaderLinkProps extends DefaultProps {
  destination: 'compatibility' | 'combinations' | 'signin' | 'signout';
}

export default function HeaderLink({ destination }: HeaderLinkProps) {
  return (
    <Link
      href={`/${destination}`}
      title={HEADER_LINK_TITLES[destination]}
      className="block w-[3.25rem] h-[3.25rem] drop-shadow-lg"
      style={{ backgroundImage: `url('/assets/img/${destination}.svg')` }}
    />
  );
}
