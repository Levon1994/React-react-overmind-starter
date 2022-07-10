import { useState, useEffect, useCallback } from 'react';

import Toaster from '@bet-core/ui/Toaster';

import Fetch from 'utils/fetch';
import { useTranslator } from 'utils/translator';

const useFetchData = (initialData, url, disableNotification, disableCurrentNotification, disableRoleNotification) => {
  const { t } = useTranslator();

  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = useCallback(async url => {
    if (!url) return;
    setIsLoading(true);
    setHasError(false);

    const { HasError, AlertMessage, Data, Result } = await Fetch.get(url);
    if ((Data || Result) && !HasError) {
      setData(Data || Result);
    } else {
      setData(initialData);
      setHasError(true);
      !disableNotification && Toaster.error({ title: t('_Error_'), message: disableRoleNotification ? t('_RoleNotFound_') : disableCurrentNotification ? t('_UserWasNotFound_') : AlertMessage });
    }

    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableNotification, t, disableCurrentNotification, disableRoleNotification]);

  useEffect(() => {
    fetchData(url);
  }, [url, fetchData]);

  return [data, fetchData, isLoading, setData, hasError];
};

export default useFetchData;
