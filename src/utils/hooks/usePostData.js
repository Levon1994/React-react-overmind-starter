import { useCallback } from 'react';

import Toaster from '@bet-core/ui/Toaster';

import Fetch from 'utils/fetch';
import { useTranslator } from 'utils/translator';

const usePostData = (url, disableNotification, successMessage) => {
  const { t } = useTranslator();

  return useCallback(async data => {
    if (!url) return {};

    const { HasError, AlertMessage, Message, Data, Result, ErrorDescription } = await Fetch.post(url, data);

    if (!disableNotification) {
      !HasError
        ? Toaster.success({ title: t('_Success_'), message: successMessage || AlertMessage || t('_OperationHasCompletedSuccessfully_') })
        : Toaster.error({ title: t('_Error_'), message: AlertMessage || Message || ErrorDescription });
    }

    return {
      hasError: HasError,
      data: Data || Result,
      message: AlertMessage,
    };
  }, [url, disableNotification, t, successMessage]);
};

export default usePostData;
