import PokemonTitle from './PokemonTitle';
import PokemonImage from './PokemonImage';
import TypeTag from './TypeTag';
import CatchButton from './CatchButton';
import { DefaultProps, Lang, PokemonCardInfo } from '@/types/common';
import Link from 'next/link';

interface PokemonCardProps extends DefaultProps {
  pokemonCardInfo: PokemonCardInfo;
  lang: Lang;
}

export default function PokemonCard({
  pokemonCardInfo,
  lang,
}: PokemonCardProps) {
  const { id, name, types, isCatched } = pokemonCardInfo;

  return (
    <article>
      <h3 className="sr-only">{name}</h3>
      <Link
        href={`/pokemon/${id}`}
        className="relative flex flex-col justify-between w-[16.125rem] h-[15.75rem] p-4 border-4 border-black-50 rounded-2xl bg-white-10 shadow-outer/down">
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
      </Link>
    </article>
  );
}
