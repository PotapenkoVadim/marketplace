import styles from './drop-down.module.scss';

export const DropDownLink = ({ children }) => {
  return (
    <span className={styles['dropdown__link']}>
      {children}
    </span>
  );
};