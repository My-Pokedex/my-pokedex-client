import PokemonTitle from './PokemonTitle';
import PokemonImage from './PokemonImage';
import TypeTag from './TypeTag';
import CatchButton from './CatchButton';
import { DefaultProps, Lang, PokemonType } from '@/types/common';

type CardType = {
  id: number;
  name: string;
  types: PokemonType[];
  isCatched: boolean;
};

interface PokemonCardProps extends DefaultProps {
  pokemonInfo: CardType;
  lang: Lang;
}

export default function PokemonCard({ pokemonInfo, lang }: PokemonCardProps) {
  const { id, name, types, isCatched } = pokemonInfo;

  return (
    <article className="relative flex flex-col justify-between w-[16.125rem] h-[15.75rem] p-4 border-4 border-black-50 rounded-2xl bg-white-10 shadow-outer/down cursor-pointer">
      <h3 className="sr-only">{name}</h3>
      <PokemonTitle usage="card" id={id} name={name} />
      <PokemonImage
        type="small"
        id={id}
        name={name}
        className="absolute left-2/4 bottom-[3.75rem] -translate-x-2/4"
      />
      <div className="flex justify-center space-x-2">
        {types.map((type) => (
          <TypeTag usage="info" type={type} size="large" lang={lang} />
        ))}
      </div>
      <CatchButton isCatched={isCatched} className="top-4 right-3" />
    </article>
  );
}
