import TicketStatus from './TicketStatus';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

import useTicket from '../../../shared/hooks/useTicket';

export default function TicketDetail({
  ticketId,
}: {
  ticketId: string;
}) {
  const ticket = useTicket({ ticketId });

  return (
    <div className="ticket-detail">
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <TicketStatus ticket={ticket} />
      <CommentList comments={ticket.comments} />
      <CommentForm ticketId={ticket.id} />
    </div>
  );
}
