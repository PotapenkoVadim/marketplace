import styles from './drop-down.module.scss';
import { useState, useEffect, useRef, Fragment } from 'react';

export const DropDown = ({ children, menu, isForciblyHide, contentClassName }) => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    if (!isForciblyHide) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const closeDropDown = (event) => {
      const isDropDownChildNode = dropDownRef.current.contains(event.target);
      const isDropDownNode = dropDownRef.current === event.target;
      if (!isDropDownNode && !isDropDownChildNode) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  useEffect(() => {
    if (isForciblyHide) {
      setIsOpen(false);
    }
  }, [isForciblyHide]);

  return (
    <div ref={dropDownRef} className={styles['dropdown']}>
      <div onClick={toggleDropDown} className={styles['dropdown__target']}>
        {children}
      </div>

      <div
        className={`
          ${styles['dropdown__content']}
          ${contentClassName ?? ''}
          ${!isOpen && 'visually-hidden'}
        `}
      >
        {menu.map((item) => (
          <Fragment key={item.key}>{item.node}</Fragment>
        ))}
      </div>
    </div>
  );
};
