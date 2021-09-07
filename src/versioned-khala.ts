/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  "Address": "MultiAddress",
  "LookupSource": "MultiAddress",
  "Keys": "AccountId",
  "BridgeChainId": "u8",
  "ResourceId": "[u8; 32]",
  "TokenId": "u256",
  "DepositNonce": "u64",
  "ProposalStatus": {
    "_enum": {
      "Initiated": null,
      "Approved": null,
      "Rejected": null
    }
  },
  "ProposalVotes": {
    "votes_for": "Vec<AccountId>",
    "votes_against": "Vec<AccountId>",
    "status": "ProposalStatus",
    "expiry": "BlockNumber"
  }
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 10],
    types: {
      "ChainId": "u8",
      "ProxyType": {
        "_enum": [
          'Any',
          'NonTransfer',
          'CancelProxy',
          'Governance',
          'Collator'
        ]
      },
      ...sharedTypes
    }
  },
  {
    minmax: [11, undefined],
    types: {
      "ProxyType": {
        "_enum": [
          'Any',
          'NonTransfer',
          'CancelProxy',
          'Governance',
          'Collator'
        ]
      },
      ...sharedTypes
    }
  },
];

export default versioned;