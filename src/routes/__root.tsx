import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import Header from '../shared/ui/Header';
import { themeClass } from '../apps/styles/theme.css';

export type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: () => <div>Page not found!</div>,
  component: Layout,
});

function Layout() {
  return (
    <>
      <div className={themeClass}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
