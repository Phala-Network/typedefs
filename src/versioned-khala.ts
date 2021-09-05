/* eslint-disable sort-keys */

import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  "Address": "MultiAddress",
  "LookupSource": "MultiAddress",
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
  },
  "ProxyType": {
    "_enum": [
      'Any',
      'NonTransfer',
      'CancelProxy',
      'Governance',
      'Collator'
    ]
  }
};

// https://khala.subscan.io/event?address=&module=parachainsystem&event=validationfunctionapplied&startDate=&endDate=
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 182238],
    types: {
      "ChainId": "u8",
      ...sharedTypes
    }
  },
  {
    minmax: [182239, undefined],
    types: {
      ...sharedTypes
    }
  },
];

export default versioned;