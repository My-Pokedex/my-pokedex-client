import { DefaultProps } from '@/types/common';
import { convertId } from '@/utils/convertId';

type TitleUsage = 'card' | 'detail' | 'evolution';

interface PokemonTitleProps extends DefaultProps {
  usage: TitleUsage;
  id: number;
  name: string;
}

export default function PokemonTitle({ usage, id, name }: PokemonTitleProps) {
  return (
    <dl
      className={`flex flex-col flex-wrap justify-between ${TITLE_CONTAINER[usage]}`}>
      <dt className="sr-only">도감 번호</dt>
      <dd className={`${TITLE_FONT_SIZE[usage].id}`}>{`No.${convertId(
        id,
      )}`}</dd>
      <dt className="sr-only">이름</dt>
      <dd className={`font-bold ${TITLE_FONT_SIZE[usage].name}`}>{name}</dd>
    </dl>
  );
}

const TITLE_CONTAINER = {
  card: 'items-start h-12 text-black-50',
  detail: 'items-center h-[4.75rem]  text-black-50',
  evolution: 'items-center h-[2.0625rem] text-gray-70',
} as const;

const TITLE_FONT_SIZE = {
  card: {
    id: 'text-base',
    name: 'text-xl',
  },
  detail: {
    id: 'text-xl',
    name: 'text-[2.5rem]',
  },
  evolution: {
    id: 'text-[.75rem]',
    name: 'text-base',
  },
} as const;
