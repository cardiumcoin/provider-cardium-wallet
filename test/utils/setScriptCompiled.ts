import { type SetScriptArgs } from '@waves/signer';

// script source see `test/utils/setScript.ride`
export const SET_SCRIPT_COMPILED: SetScriptArgs = {
  script:
    'base64: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',
};
