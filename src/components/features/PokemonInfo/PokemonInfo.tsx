import { CommonButton } from '@/components';
import BasicInfo from './BasicInfo';
import FeatureInfo from './FeatureInfo';
import AbilityInfo from './AbilityInfo';
import HWInfo from './HWInfo';
import StatInfo from './StatInfo';
import EvolutionInfo from './EvolutionInfo';
import { DefaultProps, Lang, PokemonDetailInfo } from '@/types/common';

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

  return (
    <div className="flex flex-col gap-12 p-10 max-w-[50.5rem] mb-[3.75rem] border-4 rounded-2xl bg-white-10 shadow-outer/down 2cards:min-w-[50.5rem]">
      <BasicInfo id={id} name={name} types={types} lang={lang} />
      {feature && <FeatureInfo feature={feature} description={description} />}
      <HWInfo height={height} weight={weight} />
      {abilities && <AbilityInfo abilities={abilities} types={types} />}
      <StatInfo stats={stats} lang={lang} />
      {evolutionChain && (
        <EvolutionInfo evolutionChain={evolutionChain} lang={lang} />
      )}
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        <CommonButton type="area" lang={lang} />
        <CommonButton type="move" lang={lang} />
      </div>
    </div>
  );
}
