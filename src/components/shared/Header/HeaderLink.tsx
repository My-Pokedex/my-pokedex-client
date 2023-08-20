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
      className={`block w-9 h-9 bg-cover drop-shadow-lg hover:scale-105 transition-all ease-in ${HEADER_LINK_BG[destination]}`}
    />
  );
}

const HEADER_LINK_BG = {
  compatibility: `bg-[url('/assets/img/compatibility.svg')]`,
  combinations: `bg-[url('/assets/img/combinations.svg')]`,
  signin: `bg-[url('/assets/img/signin.svg')]`,
  signout: `bg-[url('/assets/img/singout.svg')]`,
} as const;
