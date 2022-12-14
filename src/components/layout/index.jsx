import { LayoutHeader } from './_header';
import { LayoutFooter } from './_footer';

export const Layout = ({ children }) => {
  return (
    <div>
      <LayoutHeader />

      <main>
        {children}
      </main>

      <LayoutFooter />
    </div>
  );
};