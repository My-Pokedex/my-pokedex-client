import { PokemonTitle, PokemonImage, TypeTag } from '@/components';
import { DefaultProps, Lang, PokemonBasicInfo } from '@/types/common';

interface BasicInfoProps extends DefaultProps, PokemonBasicInfo {
  lang: Lang;
}

export default function BasicInfo({ id, name, types, lang }: BasicInfoProps) {
  return (
    <div className="container-info gap-5">
      <PokemonTitle usage="detail" id={id} name={name} />
      <PokemonImage size="large" id={id} name={name} className="mt-7" />
      <section className="container-type">
        <h3 className="sr-only">타입</h3>
        {types.map((type) => (
          <TypeTag usage="info" type={type} size="large" lang={lang} />
        ))}
      </section>
    </div>
  );
}
