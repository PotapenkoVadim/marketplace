import styles from './title-invitation.module.scss';
import { ButtonLink } from '@uikit/button/_link';

export const TitleInvitation = ({ title, textLink, link }) => {
  return (
    <div className={styles['title-invitation']}>
      <span className={styles['title-invitation__title']}>{title}</span>
      <ButtonLink color='black' iconVariant='arrow-link'>{textLink}</ButtonLink>
    </div>
  );
};