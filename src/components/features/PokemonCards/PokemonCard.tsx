import Link from 'next/link';
import {
  PokemonTitle,
  PokemonImage,
  TypeTagContainer,
  TypeTag,
  CatchButton,
} from '@/components';
import { DefaultProps, Lang, PokemonCardInfo } from '@/types/common';

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
      <Link
        href={`/pokemon/${id}`}
        className="relative flex flex-col justify-between w-[16.125rem] h-[15.75rem] p-4 border-4 border-black-50 rounded-2xl bg-white-10 shadow-outer/down">
        <PokemonTitle usage="card" id={id} name={name} />
        <PokemonImage
          size="small"
          id={id}
          name={name}
          className="absolute left-2/4 bottom-[3.75rem] -translate-x-2/4"
        />
        <TypeTagContainer usage="div">
          {types.map((type) => (
            <TypeTag usage="info" type={type} size="large" lang={lang} />
          ))}
        </TypeTagContainer>
        <CatchButton
          size="small"
          isCatched={isCatched}
          className="top-4 right-3"
        />
      </Link>
    </article>
  );
}
