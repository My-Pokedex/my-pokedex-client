import { InfoTag } from '@/components';
import { DefaultProps, Ability, PokemonType } from '@/types/common';

interface AbilityInfoProps extends DefaultProps {
  abilities: Ability[];
  types: PokemonType[];
}

export default function AbilityInfo({ abilities, types }: AbilityInfoProps) {
  return (
    <div className="flex flex-wrap justify-center gap-[3.75rem]">
      {abilities.map((abilitiy) => {
        const { isHidden, name, description } = abilitiy;

        return (
          <section key={name} className="container-info gap-4">
            <h3 className="info-title">{isHidden ? '숨겨진 특성' : '특성'}</h3>
            <InfoTag usage="ability" type={types[0]}>
              {name}
            </InfoTag>
            <p className="leading-5 info-desc">{description}</p>
          </section>
        );
      })}
    </div>
  );
}
