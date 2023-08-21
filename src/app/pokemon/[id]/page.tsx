import { PokemonInfo, CatchButton } from '@/components';
import { processDetailInfo } from '@/utils/processDetailInfo';
import pokemonDefault from '@/mocks/pokemonDefault.json';
import pokemonException from '@/mocks/pokemonException.json';

export default function Pokemon() {
  const processed = processDetailInfo(pokemonDefault.data, 'ko');

  return (
    <main className="relative mx-5 my-8">
      <h2 className="sr-only">{`${processed.name}의 상세 정보`}</h2>
      <PokemonInfo pokemonDetailInfo={processed} lang="ko" />
      <CatchButton
        size="large"
        isCatched={false}
        className="absolute top-6 right-6"
      />
    </main>
  );
}
