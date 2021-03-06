import { ApolloQueryPipe } from './ApolloQueryPipe';
import { Apollo, ApolloQuery } from './ApolloDecorator';
import { Angular2Apollo, defaultApolloClient } from './Angular2Apollo';
import { ApolloQueryObservable } from './ApolloQueryObservable';
import { ApolloModule } from './ApolloModule';

export const APOLLO_PROVIDERS: any[] = [
  Angular2Apollo,
];

export {
  Apollo,
  ApolloModule,
  ApolloQuery,
  ApolloQueryObservable,
  ApolloQueryPipe,
  Angular2Apollo,
  defaultApolloClient
};
