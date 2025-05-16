import { createFileRoute } from '@tanstack/react-router';

import TicketsPage from '../../pages/ticket-list/ui/TicketsPage';

import { ticketsQueryOptions } from '../../shared/api/queryOptions';

export const Route = createFileRoute('/tickets/')({
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(ticketsQueryOptions());
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
  component: TicketsPage,
});
