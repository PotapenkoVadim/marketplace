import styles from './layout.module.scss';
import { LayoutHeader } from './_header';
import { LayoutFooter } from './_footer';

export const Layout = ({ children }) => {
  return (
    <div className={styles['layout']}>
      <LayoutHeader />

      <main>
        {children}
      </main>

      <LayoutFooter />
    </div>
  );
};