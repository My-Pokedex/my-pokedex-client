'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/api/client';
import { Header } from '@/components';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <h1 className="sr-only">My Pokedex</h1>
      <div className="container-page">{children}</div>
    </ApolloProvider>
  );
}
