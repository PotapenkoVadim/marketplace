import { useState, useEffect } from 'react';
import { configuration } from '@/configuration';

const userTypes = configuration.user.types;

export function useIsAdmin(user) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => setIsAdmin(user.key === userTypes.admin.key), [user]);

  return isAdmin;
}