import { DefaultProps } from '@/types/common';
import { convertIdToOrder } from '@/utils/convertIdToOrder';

type TitleUsage = 'card' | 'detail' | 'evolution';

interface PokemonTitleProps extends DefaultProps {
  usage: TitleUsage;
  id: number;
  name: string;
}

export default function PokemonTitle({ usage, id, name }: PokemonTitleProps) {
  const containerStyle = `flex flex-col flex-wrap justify-between ${TITLE_CONTAINER[usage]}`;
  const orderStyle = `${TITLE_FONT_SIZE[usage].id}`;
  const nameStyle = `font-bold ${TITLE_FONT_SIZE[usage].name}`;

  const order = convertIdToOrder(id);

  return (
    <>
      {usage === 'detail' ? (
        <section className={containerStyle}>
          <h3 className="sr-only">도감 번호</h3>
          <p className={orderStyle}>{order}</p>
          <h3 className="sr-only">이름</h3>
          <p className={nameStyle}>{name}</p>
        </section>
      ) : (
        <div className={containerStyle}>
          <p className={orderStyle}>{order}</p>
          {usage === 'card' && <h3 className={nameStyle}>{name}</h3>}
          {usage === 'evolution' && <h4 className={nameStyle}>{name}</h4>}
        </div>
      )}
    </>
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
