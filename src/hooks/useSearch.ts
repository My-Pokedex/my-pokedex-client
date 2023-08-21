import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
import { GET_LIST } from '@/api/gql';
import { CARDS_LIMIT } from '@/constants/values';

function useSearch() {
  const searchParams = useSearchParams();

  const keyword = searchParams.get('keyword');
  const type = searchParams.get('type');
  const [sortKey, sortValue] = searchParams.get('sort')?.split('-') as string[];

  const variables = {
    limit: CARDS_LIMIT,
    keyword,
    type: type === 'all' ? '' : type,
    sort: { [sortKey]: sortValue },
    lang: 'ko',
  };

  const { loading, error, data, refetch } = useQuery(GET_LIST, {
    variables,
  });

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return { loading, error, pokemonCardsInfo: data?.pokemonCardsInfo };
}

export default useSearch;
