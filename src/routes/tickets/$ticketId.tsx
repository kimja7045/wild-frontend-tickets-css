import { createFileRoute } from '@tanstack/react-router';

import TicketDetail from '../../pages/ticket-detail/ui/TicketDetail';

import { ticketQueryOptions } from '../../shared/api/queryOptions';

export const Route = createFileRoute('/tickets/$ticketId')({
  loader: async ({ context: { queryClient }, params: { ticketId } }) => {
    queryClient.ensureQueryData(ticketQueryOptions(ticketId));
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
  component: TicketPage,
});

function TicketPage() {
  const { ticketId } = Route.useParams();

  return <TicketDetail ticketId={ticketId} />;
}
