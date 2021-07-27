// SPDX-License-Identifier: Apache-2.0

export default {
  "ChainId": "u8",
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
}
