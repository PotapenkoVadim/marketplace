import styles from './layout.module.scss';
import { useState, useEffect } from 'react';
import { DropDown } from '@uikit/drop-down';
import { Avatar } from '@uikit/avatar';
import { useUserStore } from '@/store';
import { useIsAdmin } from '@hooks';
import { configuration } from '@/configuration';

const userTypes = configuration.user.types;

export const LayoutHeaderAvatar = ({ isHideMenu }) => {
  const [menu, setMenu] = useState([]);

  const { user, logIn, logOut } = useUserStore((state) => state);

  const isAdmin = useIsAdmin(user);

  useEffect(() => {
    const logInAsAdmin = () => logIn(userTypes.admin);
    const logInAsCustomer = () => logIn(userTypes.customer);

    if (user.role !== userTypes.guest.role) {
      const userType = isAdmin ? userTypes.customer : userTypes.admin;
      const handeClick = isAdmin ? logInAsCustomer : logInAsAdmin;

      setMenu([
        {
          key: userType.role,
          node: (
            <span
              className={styles['layout__header__menu-link']}
              onClick={handeClick}
            >
              Switch to {userType.role}
            </span>
          ),
        },
        {
          key: userTypes.guest.role,
          node: (
            <span
              className={styles['layout__header__menu-link']}
              onClick={logOut}
            >
              Log out
            </span>
          ),
        },
      ]);
    } else {
      setMenu([
        {
          key: userTypes.admin.role,
          node: (
            <span
              className={styles['layout__header__menu-link']}
              onClick={logInAsAdmin}
            >
              Log in as admin
            </span>
          ),
        },
        {
          key: userTypes.customer.role,
          node: (
            <span
              className={styles['layout__header__menu-link']}
              onClick={logInAsCustomer}
            >
              Log in as customer
            </span>
          ),
        },
      ]);
    }
  }, [user, isAdmin, logIn, logOut]);

  return (
    <DropDown isForciblyHide={isHideMenu} menu={menu}>
      <Avatar className={styles['layout__avatar']} link={user.avatar} />
    </DropDown>
  );
};
