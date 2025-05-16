import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TicketListDto, createComment } from '../api/lib';

import { Ticket } from '../api/types';

import { TICKETS_QUERY_KEY } from '../api/constants';

export default function useCreateComment() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createComment,
    onMutate: ({ ticketId, content }) => {
      queryClient.cancelQueries({ queryKey: [TICKETS_QUERY_KEY] });
      queryClient.cancelQueries({ queryKey: [TICKETS_QUERY_KEY, ticketId] });

      const previousTickets = queryClient.getQueryData([TICKETS_QUERY_KEY]);
      queryClient.setQueryData([TICKETS_QUERY_KEY], (old: TicketListDto) => ({
        ...old,
        tickets: (old?.tickets || []).map((ticket) =>
          ticket.id === ticketId
            ? {
                ...ticket,
                ticket: {
                  ...ticket,
                  comments: [
                    ...(ticket.comments || []),
                    {
                      id: '',
                      content,
                    },
                  ],
                },
              }
            : ticket,
        ),
      }));

      const previousTicket = queryClient.getQueryData([
        TICKETS_QUERY_KEY,
        ticketId,
      ]);
      queryClient.setQueryData(
        [TICKETS_QUERY_KEY, ticketId],
        (old: Ticket) => ({
          ...old,
          comments: [
            ...(old?.comments || []),
            {
              id: '',
              content,
            },
          ],
        }),
      );

      return { previousTickets, previousTicket };
    },
    onSettled: (_data, variables, _context) => {
      console.log(variables);
      // const { ticketId } = variables;
      // queryClient.invalidateQueries({ queryKey: [TICKETS_QUERY_KEY] });
      // queryClient.invalidateQueries({
      //   queryKey: [TICKETS_QUERY_KEY, ticketId],
      // });
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData([TICKETS_QUERY_KEY], context?.previousTickets);
      // queryClient.setQueryData([TICKETS_QUERY_KEY], context?.previousTicket);
    },
  });

  return mutate;
}
