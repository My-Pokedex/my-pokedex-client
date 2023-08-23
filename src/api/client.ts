import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            read(existing) {
              return existing;
            },
            merge(existing = [], incoming = []) {
              const result = [...existing, ...incoming].reduce((acc, cur) => {
                if (
                  acc.findIndex(
                    ({ __ref }: { __ref: string }) => __ref === cur.__ref,
                  ) === -1
                )
                  acc.push(cur);

                return acc;
              }, []);

              return result;
            },
          },
        },
      },
    },
  }),
});

export default client;
