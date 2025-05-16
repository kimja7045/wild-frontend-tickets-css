import { FormEvent } from 'react';

import TextArea from '../../../shared/ui/TextArea';
import TextField from '../../../shared/ui/TextField';
import SubmitButton from '../../../shared/ui/SubmitButton';

import useCreateTicket from '../../../shared/hooks/useCreateTicket';

export default function TicketForm() {
  const createTicket = useCreateTicket();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    await createTicket({ title, description });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="add-ticket-form">
      <TextField label="Title" name="title" placeholder="Title" />
      <TextArea
        label="Description"
        name="description"
        placeholder="Description"
      />
      <SubmitButton label="Add Ticket" />
    </form>
  );
}
