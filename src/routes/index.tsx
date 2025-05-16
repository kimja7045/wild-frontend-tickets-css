import { createFileRoute } from '@tanstack/react-router';

import HomePage from '../pages/(home)/ui/HomePage';

export const Route = createFileRoute('/')({
  component: HomePage,
});
