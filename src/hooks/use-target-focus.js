import { useRef } from 'react';

export function useTargetFocus() {
  const target = useRef(null);

  const handleAction = () => target.current.focus();

  return [target, handleAction];
}
