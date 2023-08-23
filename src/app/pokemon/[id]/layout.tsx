'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/api/client';
import { BackButton, Header } from '@/components';

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container-page">{children}</div>
      <BackButton />
    </ApolloProvider>
  );
}
