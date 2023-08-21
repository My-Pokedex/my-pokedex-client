import { InfoTag } from '@/components';
import { DefaultProps, Lang, PokemonStat } from '@/types/common';
import { INFO_TAG_STAT_CONTENTS } from '@/constants/contents';
import { convertInfoTagName } from '@/utils/convertInfoTagName';

interface StatInfoProps extends DefaultProps {
  stats: number[];
  lang: Lang;
}

export default function StatInfo({ stats, lang }: StatInfoProps) {
  const statNames = Object.keys(INFO_TAG_STAT_CONTENTS) as PokemonStat[];

  return (
    <section className="container-info gap-4">
      <h3 className="info-title">기본 능력치</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {statNames.map((stat, index) => (
          <div key={index} className="container-info gap-3">
            <InfoTag usage="stat" stat={stat}>
              {convertInfoTagName(stat, lang)}
            </InfoTag>
            <p className="info-desc">{stats[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
