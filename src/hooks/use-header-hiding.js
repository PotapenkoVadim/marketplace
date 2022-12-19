import { useState, useEffect } from 'react';
import { configuration } from '@/configuration';

export function useHeaderHiding(headerRef) {
  const [isHeaderHide, setIsHeaderHide] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const defaultOffset = 100;

    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () =>
      headerRef.current.classList.contains(configuration.header.hidingClass);

    function handleScroll() {
      if (
        scrollPosition() > lastScroll &&
        scrollPosition() > defaultOffset &&
        !containHide()
      ) {
        headerRef.current.classList.add(configuration.header.hidingClass);

        setIsHeaderHide(true);
      } else if (scrollPosition() < lastScroll && containHide()) {
        headerRef.current.classList.remove(configuration.header.hidingClass);

        setIsHeaderHide(false);
      }

      lastScroll = scrollPosition();
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);

  return isHeaderHide;
}
