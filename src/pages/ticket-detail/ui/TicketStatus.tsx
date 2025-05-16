import useUpdateTicketStatus from '../../../shared/hooks/useUpdateTicketStatus';

import { Ticket } from '../../../shared/api/types';

export default function TicketStatus({
  ticket,
}: {
  ticket: Ticket;
}) {
  const updateTicketStatus = useUpdateTicketStatus();

  const handleClick = async () => {
    await updateTicketStatus({
      id: ticket.id,
      status: ticket.status === 'open' ? 'closed' : 'open',
    });
  };

  return (
    <button type="button" className="status" onClick={handleClick}>
      {ticket.status === 'open' ? 'Open' : 'Closed'}
    </button>
  );
}
