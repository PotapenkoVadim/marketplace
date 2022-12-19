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

  const logInAsAdmin = () => logIn(userTypes.admin);
  const logInAsCustomer = () => logIn(userTypes.customer);
  const handeClick = isAdmin ? logInAsCustomer : logInAsAdmin;

  useEffect(() => {
    if (user.key !== userTypes.guest.key) {
      const userType = isAdmin
        ? userTypes.customer
        : userTypes.admin;

      setMenu([
        {
          key: userType.key,
          node: <span onClick={handeClick}>Switch to {userType.key}</span>
        },
        {
          key: userTypes.guest.key,
          node: <span onClick={logOut}>Log out</span>
        }
      ]);

    } else {
      setMenu([
        {
          key: userTypes.admin.key,
          node: <span onClick={logInAsAdmin}>Log in as admin</span>
        },
        {
          key: userTypes.customer.key,
          node: <span onClick={logInAsCustomer}>Log in as customer</span>
        }
      ]);
    }
  }, [user, isAdmin]);

  return (
    <DropDown isForciblyHide={isHideMenu} menu={menu}>
      <Avatar
        className={styles['layout__avatar']}
        link={user.avatar} />
    </DropDown>
  );
};