// SPDX-License-Identifier: Apache-2.0

export default {
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
}
