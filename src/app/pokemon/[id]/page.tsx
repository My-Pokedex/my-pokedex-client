import InfoTag from '@components/InfoTag';
import { PokemonStat } from '@/types/common';
import { INFO_TAG_STAT_CONTENTS } from '@/constants/contents';
import { convertInfoTagName } from '@/utils/convertInfoTagName';

export default function Pokemon() {
  const tagInfo = Object.keys(INFO_TAG_STAT_CONTENTS) as PokemonStat[];

  return (
    <>
      <InfoTag usage="ability" type="grass">
        심록
      </InfoTag>
      {tagInfo.map((stat) => (
        <InfoTag key={stat} usage="stat" stat={stat}>
          {convertInfoTagName('kr', stat)}
        </InfoTag>
      ))}
    </>
  );
}
