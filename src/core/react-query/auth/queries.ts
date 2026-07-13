import { useQuery } from '@tanstack/react-query';

import { axios, axiosV2 } from '@/core/axios';
import { transformApiKeys } from '@/core/react-query/auth/helpers';

import type { AuthToken } from '@/core/types/api/authToken';
import type { OidcConfigType } from '@/core/react-query/auth/types';

export const useApiKeyQuery = () =>
  useQuery<AuthToken[]>({
    queryKey: ['auth', 'apikey'],
    queryFn: () => axiosV2.get('auth'),
    // Because we cannot delete other users' keys just using the device name even if we are an admin, we are only showing current user's keys
    select: transformApiKeys,
  });

export const useOidcConfigQuery = () =>
  useQuery<OidcConfigType>({
    queryKey: ['auth', 'oidc', 'config'],
    queryFn: () => axios.get('Auth/Oidc/Config'),
  });
