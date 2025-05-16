import { Link } from '@tanstack/react-router';

import { Ticket } from '../../../shared/api/types';

export default function TicketItem({
  ticket,
}: {
  ticket: Ticket;
}) {
  return (
    <li>
      <div className="title">
        <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
      </div>
      <div className="status">
        Status:
        <span>{ticket.status === 'open' ? 'Open' : 'Closed'}</span>
      </div>
      <div className="comments">
        Comments:
        <span>{ticket.comments.length}</span>
      </div>
    </li>
  );
}
