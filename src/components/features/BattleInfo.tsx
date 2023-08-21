import { TypeTag } from '@/components';
import { BATTLE_INFO_TITLES, BATTLE_INFO_CONTENTS } from '@/constants/contents';
import { DefaultProps, Lang, PokemonType } from '@/types/common';

type InfoUsage = 'attack' | 'defense';

interface BattleInfoProps extends DefaultProps {
  usage: InfoUsage;
  type: PokemonType;
  lang: Lang;
}

export default function BattleInfo({ usage, type, lang }: BattleInfoProps) {
  const battleInfo = Object.entries(BATTLE_INFO_CONTENTS[type][usage]).sort(
    (a, b) => +b[0] - +a[0],
  );

  return (
    <section className="flex flex-col items-center gap-6 px-9 pt-9 pb-12 mx-5 border-4 rounded-2xl bg-white-10 shadow-outer/down">
      <h3 className="mb-2 text-2xl text-black-50 font-bold">
        {BATTLE_INFO_TITLES[lang][usage]}
      </h3>
      {battleInfo.map((info) => {
        const [effect, types] = info as [string, PokemonType[]];

        return (
          <section
            key={effect}
            className="flex grow justify-center items-center gap-4 ">
            <h4 className="text-xl text-gray-70 font-bold whitespace-nowrap">
              {`${effect}${lang === 'kr' ? '배' : 'x'} :`}
            </h4>
            <div className="container-type flex-wrap">
              {types.map((type) => (
                <TypeTag
                  key={type}
                  usage="info"
                  type={type}
                  size="large"
                  lang={lang}
                />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
