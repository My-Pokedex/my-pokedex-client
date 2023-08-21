'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/api/client';
import { Header } from '@/components';

export default function SearchResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container-page">{children}</div>
    </ApolloProvider>
  );
}
