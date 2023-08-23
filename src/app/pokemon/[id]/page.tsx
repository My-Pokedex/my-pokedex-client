'use client';

import { useParams, notFound } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_DETAIL } from '@/api/gql';
import { PokemonInfo, CatchButton, Loading } from '@/components';
import { processDetailInfo } from '@/utils/processDetailInfo';

export default function Pokemon() {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id: params.id },
  });

  if (loading) return <Loading className="mt-20" />;
  if (error) return notFound();
  if (!data.basicInfo.length) return notFound();

  const processed = processDetailInfo(data, 'ko');

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
