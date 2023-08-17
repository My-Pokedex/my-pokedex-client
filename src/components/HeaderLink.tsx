import Link from 'next/link';
import { DefaultProps } from '@/types/props';

interface HeaderLinkProps extends DefaultProps {
  destination: 'compatibility' | 'combinations' | 'signin' | 'signout';
}

export default function HeaderLink({ destination }: HeaderLinkProps) {
  return (
    <Link
      href={`/${destination}`}
      className="w-[3.25rem] h-[3.25rem] drop-shadow-lg"
      style={{ backgroundImage: `url('/assets/img/${destination}.svg')` }}
    />
  );
}
