import { useState, useCallback } from 'react';

import Toaster from '@bet-core/ui/Toaster';

import Fetch from 'utils/fetch';
import { createParams } from 'utils';
import { useTranslator } from 'utils/translator';

const useFetchOnce = (initialData, url, disableNotification = true, isGet = false) => {
  const { t } = useTranslator();

  const [count, setCount] = useState(null);
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async reqData => {
    if (!url) return;
    setIsLoading(true);
    setHasError(false);

    const { HasError, AlertMessage: message, Data, Result, Count } = !isGet
      ? await Fetch.post(url, reqData)
      : await Fetch.get(url + createParams(reqData));

    let currentData = initialData;

    if ((Data || Result) && !HasError) {
      currentData = Data || Result;
      setData(currentData);
      setCount(Count);
    } else {
      currentData = initialData;
      setData(currentData);
      setCount(null);
      setHasError(true);
      !disableNotification && message && Toaster.error({ title: t('_Error_'), message });
    }

    setIsLoading(false);
    return currentData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, isGet, t, disableNotification]);

  return [data, fetchData, isLoading, count, hasError];
};

export default useFetchOnce;
