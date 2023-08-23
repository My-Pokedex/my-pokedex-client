'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/api/client';
import { BackButton, Header } from '@/components';

export default function SearchResultLayout({
  children,
  cards,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container-page">
        {children}
        {cards}
      </div>
      <BackButton />
    </ApolloProvider>
  );
}
