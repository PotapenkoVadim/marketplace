import { useState, useEffect } from 'react';
import { configuration } from '@/configuration';

const userTypes = configuration.user.types;

export function useIsCustomer(user) {
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => setIsCustomer(user.role === userTypes.customer.role), [user]);

  return isCustomer;
}
