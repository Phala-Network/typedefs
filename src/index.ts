// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import phalaDev from './phala-dev';

import khala from './khala';
import khalaDev from './khala-dev';

import versionedKhala from './versioned-khala';

// alphabetical
export const typesChain = {
  'Khala': khala,
  'Khala Testnet': khalaDev,
  'Khala Local Testnet': khalaDev,
  'Phala PoC-Next': phalaDev,
  'Phala Local Testnet': phalaDev,
  'Phala Integration Test': phalaDev,
  'Phala Staging Testnet': phalaDev,
  'Phala Development': phalaDev,
};

export {
  phalaDev,

  khala,
  khalaDev,

  versionedKhala,
}
