import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PokemonTitle, PokemonImage, TypeTag } from '@/components';
import { DefaultProps, Lang, Evolution } from '@/types/common';

interface EvolutionInfoProps extends DefaultProps {
  evolutionChain: Evolution[];
  lang: Lang;
}

export default function EvolutionInfo({
  evolutionChain,
  lang,
}: EvolutionInfoProps) {
  return (
    <section className="container-info gap-4">
      <h3 className="info-title">진화 정보</h3>
      <div className="flex flex-wrap justify-center items-center gap-7 max-1evol:w-[5.75rem]">
        {evolutionChain.map(({ id, name, types }, index) => (
          <Fragment key={id}>
            <Link
              href={`/pokemon/${id}`}
              className="flex flex-col items-center gap-2">
              <PokemonTitle usage="evolution" id={id} name={name} />
              <div className="flex items-end mt-5">
                <PokemonImage size="small" id={id} name={name} />
              </div>
              <div className="container-type gap-1">
                {types.map((type) => (
                  <TypeTag
                    key={type}
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
          </Fragment>
        ))}
      </div>
    </section>
  );
}

const EVOLUTION_SIZE = {
  width: 28,
  height: 24,
} as const;
