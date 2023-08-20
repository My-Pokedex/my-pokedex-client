import PokemonCard from './PokemonCard';
import { DefaultProps, Lang, PokemonCardInfo } from '@/types/common';

interface PokemonCardsProps extends DefaultProps {
  pokemonCardsInfo: PokemonCardInfo[];
  lang: Lang;
}

export default function PokemonCards({
  pokemonCardsInfo,
  lang,
}: PokemonCardsProps) {
  return (
    <section
      className={
        'grid grid-cols-3 gap-4 max-2cards:grid-cols-2 max-1cards:grid-cols-1 mb-[5rem]'
      }>
      <h2 className="sr-only">검색 결과</h2>
      {pokemonCardsInfo.map((pokemonCardInfo) => (
        <PokemonCard pokemonCardInfo={pokemonCardInfo} lang={lang} />
      ))}
    </section>
  );
}
