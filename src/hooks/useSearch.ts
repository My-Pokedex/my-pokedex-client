import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
import { usePageStore } from '@/stores';
import { GET_LIST } from '@/api/gql';
import { CARDS_LIMIT } from '@/constants/values';

function useSearch() {
  const searchParams = useSearchParams();
  const { page, isLastPage, increasePage, setLastPage } = usePageStore();
  const observerTarget = useRef(null);

  const keyword = searchParams.get('keyword');
  const type = searchParams.get('type');
  const [sortKey, sortValue] = searchParams.get('sort')?.split('-') as string[];

  const variables = {
    limit: CARDS_LIMIT,
    keyword,
    type: type === 'all' ? '' : type,
    sort: { [sortKey]: sortValue },
    lang: 'ko',
    offset: page * CARDS_LIMIT,
  };

  const { loading, error, data, refetch, fetchMore, client } = useQuery(
    GET_LIST,
    {
      variables,
      fetchPolicy: 'cache-and-network',
    },
  );

  const getMoreCards = () => {
    increasePage();

    fetchMore({
      variables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.pokemonCardsInfo.length) {
          setLastPage(true);

          return;
        }
      },
    });
  };

  useEffect(() => {
    async () => await client.resetStore();

    setLastPage(false);
    refetch();
  }, [searchParams]);

  useEffect(() => {
    if (observerTarget.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) getMoreCards();
        },
        { threshold: 1 },
      );
      observer.observe(observerTarget.current);

      return () => observer.disconnect();
    }
  }, [getMoreCards]);

  return {
    loading,
    error,
    isLastPage,
    observerTarget,
    pokemonCardsInfo: data?.pokemonCardsInfo,
  };
}

export default useSearch;
