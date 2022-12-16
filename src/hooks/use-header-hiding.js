import { useEffect } from 'react';
import { configuration } from '../configuration';

export function useHeaderHiding(headerRef) {
  useEffect(() => {
    let lastScroll = 0;
    const defaultOffset = 100;

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => headerRef.current.classList.contains(configuration.header.hidingClass);

    function handleScroll () {
      if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset && !containHide()) {
        headerRef.current.classList.add(configuration.header.hidingClass);
      } else if (scrollPosition() < lastScroll && containHide()) {
        headerRef.current.classList.remove(configuration.header.hidingClass);
      }

      lastScroll = scrollPosition();
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerRef]);
}