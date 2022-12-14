import styles from './icon.module.scss';

export const Icon = ({ variant, color }) => {
  return (
    <span className={`
      ${styles['icon']}
      ${styles[`icon__${variant}`]}
      ${styles[`icon_${color}`]}
    `} />
  );
};