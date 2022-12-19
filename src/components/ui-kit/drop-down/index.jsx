import styles from './drop-down.module.scss';
import { useState, useEffect, useRef } from 'react';
import { DropDownLink } from './_link';

export const DropDown = ({ children, menu }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = (event) => {
    const isDropDownChildNode = dropDownRef.current.contains(event.target);
    const isDropDownNode = dropDownRef.current === event.target;

    if (!isDropDownNode && !isDropDownChildNode) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  return (
    <div ref={dropDownRef} className={styles['dropdown']}>
      <div onClick={toggleDropDown} className={styles['dropdown__target']}>
        {children}
      </div>

      <div className={`${styles['dropdown__content']} ${!isOpen && 'visually-hidden'}`}>
        {menu.map(item => (
          <DropDownLink key={item.key}>
            {item.node}
          </DropDownLink>
        ))}
      </div>
    </div>
  );
};