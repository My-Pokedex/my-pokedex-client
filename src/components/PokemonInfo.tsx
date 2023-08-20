import Link from 'next/link';
import Image from 'next/image';
import PokemonTitle from './PokemonTitle';
import PokemonImage from './PokemonImage';
import TypeTag from './TypeTag';
import InfoTag from './InfoTag';
import {
  DefaultProps,
  Lang,
  PokemonDetailInfo,
  PokemonStat,
} from '@/types/common';
import { convertInfoTagName } from '@/utils/convertInfoTagName';
import { INFO_TAG_STAT_CONTENTS } from '@/constants/contents';
import CommonButton from './CommonButton';

interface PokemonInfoProps extends DefaultProps {
  pokemonDetailInfo: PokemonDetailInfo;
  lang: Lang;
}

export default function PokemonInfo({
  pokemonDetailInfo,
  lang,
}: PokemonInfoProps) {
  const {
    id,
    name,
    types,
    feature,
    description,
    height,
    weight,
    abilities,
    stats,
    evolutionChain,
  } = pokemonDetailInfo;

  const statNames = Object.keys(INFO_TAG_STAT_CONTENTS) as PokemonStat[];

  return (
    <div className="flex flex-col gap-12 p-10 mb-[3.75rem] border-4 rounded-2xl bg-white-10 shadow-outer/down 2cards:min-w-[50.5rem]">
      <div className="flex flex-col items-center gap-5">
        <PokemonTitle usage="detail" id={id} name={name} />
        <PokemonImage size="large" id={id} name={name} className="mt-7" />
        <section className="flex justify-center gap-2">
          <h3 className="sr-only">타입</h3>
          {types.map((type) => (
            <TypeTag usage="info" type={type} size="large" lang={lang} />
          ))}
        </section>
      </div>
      {feature && (
        <section className="flex flex-col items-center gap-3">
          <h3 className="sr-only">특징</h3>
          <p className={TITLE_FONT}>{feature}</p>
          <p className={`leading-5 ${DESCRIPTION_COLOR}`}>{description}</p>
        </section>
      )}
      <div className="flex justify-center gap-[3.75rem]">
        <section className="flex flex-col items-center gap-3">
          <h3 className={TITLE_FONT}>키</h3>
          <p className={DESCRIPTION_COLOR}>{height}</p>
        </section>
        <section className="flex flex-col items-center gap-3">
          <h3 className={TITLE_FONT}>몸무게</h3>
          <p className={DESCRIPTION_COLOR}>{weight}</p>
        </section>
      </div>
      {abilities && (
        <div className="flex flex-wrap justify-center gap-[3.75rem]">
          {abilities.map((abilitiy) => {
            const { isHidden, name, description } = abilitiy;

            return (
              <section className="flex flex-col items-center gap-4">
                <h3 className={TITLE_FONT}>
                  {isHidden ? '숨겨진 특성' : '특성'}
                </h3>
                <InfoTag usage="ability" type={types[0]}>
                  {name}
                </InfoTag>
                <p className={`leading-5 ${DESCRIPTION_COLOR}`}>
                  {description}
                </p>
              </section>
            );
          })}
        </div>
      )}
      <section className="flex flex-col items-center gap-4">
        <h3 className={TITLE_FONT}>기본 능력치</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {statNames.map((stat, index) => (
            <div className="flex flex-col items-center gap-3">
              <InfoTag usage="stat" stat={stat}>
                {convertInfoTagName(stat, lang)}
              </InfoTag>
              <p className={DESCRIPTION_COLOR}>{stats[index]}</p>
            </div>
          ))}
        </div>
      </section>
      {evolutionChain && (
        <section className="flex flex-col items-center gap-4">
          <h3 className={TITLE_FONT}>진화 정보</h3>
          <div className="flex flex-wrap justify-center items-center gap-7 max-1evol:w-[5.75rem]">
            {evolutionChain.map(({ id, name, types }, index) => (
              <>
                <Link
                  href={`/pokemon/${id}`}
                  className="flex flex-col items-center gap-2">
                  <PokemonTitle usage="evolution" id={id} name={name} />
                  <div className="flex items-end mt-5">
                    <PokemonImage size="small" id={id} name={name} />
                  </div>
                  <div className="flex justify-center gap-1">
                    {types.map((type) => (
                      <TypeTag
                        usage="info"
                        type={type}
                        size="small"
                        lang={lang}
                      />
                    ))}
                  </div>
                </Link>
                {index !== evolutionChain.length - 1 && (
                  <Image
                    src="/assets/img/arrow_right.svg"
                    alt="진화 후"
                    width={EVOLUTION_SIZE.width}
                    height={EVOLUTION_SIZE.height}
                    className="max-1evol:rotate-90"
                    style={EVOLUTION_SIZE}
                  />
                )}
              </>
            ))}
          </div>
        </section>
      )}
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        <CommonButton type="area" />
        <CommonButton type="move" />
      </div>
    </div>
  );
}

const TITLE_FONT = 'text-xl font-bold';

const DESCRIPTION_COLOR = 'text-gray-70';

const EVOLUTION_SIZE = {
  width: 28,
  height: 24,
} as const;
