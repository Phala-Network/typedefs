// SPDX-License-Identifier: Apache-2.0

export default {
    "Address": "MultiAddress",
    "LookupSource": "MultiAddress",
    "ChainId": "u8",
    "ResourceId": "[u8; 32]",
    "TokenId": "u256",
    "DepositNonce": "u64",
    "RawSolution": "RawSolutionWith24",
    "EcdsaPublicKey": "[u8; 33]",
    "WorkerPublicKey": "EcdsaPublicKey",
    "ContractPublicKey": "EcdsaPublicKey",
    "MessageOrigin": {
      "_enum": {
        "Pallet": "Vec<u8>",
        "Contract": "H256",
        "Worker": "EcdsaPublicKey",
        "AccountId": "H256",
        "MultiLocation": "Vec<u8>"
      }
    },
    "Attestation": {
      "_enum": {
        "SgxIas": "AttestationSgxIas"
      }
    },
    "AttestationSgxIas": {
      "raReport": "Vec<u8>",
      "signature": "Vec<u8>"
    },
    "SenderId": "MessageOrigin",
    "Path": "Vec<u8>",
    "Topic": "Path",
    "Message": {
      "sender": "SenderId",
      "destination": "Topic",
      "payload": "Vec<u8>"
    },
    "SignedMessage": {
      "message": "Message",
      "sequence": "u64",
      "signature": "Vec<u8>"
    },
    "MachineId": "[u8; 16]",
    "PRuntimeInfo": {
      "version": "u32",
      "machine_id": "MachineId",
      "pubkey": "WorkerPublicKey",
      "features": "Vec<u32>"
    },
    "PoolState": {
      "_enum": {
        "Ready": null,
        "Mining": null
      }
    },
    "PoolInfo": {
      "owner": "AccountId",
      "cap": "Option<Balance>",
      "commission": "Permill",
      "state": "PoolState",
      "total_raised": "Balance"
    },
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
    "Kitty": {
      "id": "Hash",
      "dna": "Hash",
      "price": "Balance",
      "gen": "u64"
    },
    "WorkerStateEnum": {
      "_enum": {
        "Empty": null,
        "Free": null,
        "Gatekeeper": null,
        "MiningPending": null,
        "Mining": "BlockNumber",
        "MiningStopping": null
      }
    },
    "WorkerInfo": {
      "machineId": "Vec<u8>",
      "pubkey": "Vec<u8>",
      "lastUpdated": "u64",
      "state": "WorkerStateEnum",
      "score": "Option<Score>",
      "confidenceLevel": "u8",
      "runtimeVersion": "u32"
    },
    "Score": {
      "overallScore": "u32",
      "features": "Vec<u32>"
    },
    "StashInfo": {
      "controller": "AccountId",
      "payoutPrefs": "PayoutPrefs"
    },
    "PayoutPrefs": {
      "commission": "u32",
      "target": "AccountId"
    },
    "BlockRewardInfo": {
      "seed": "U256",
      "onlineTarget": "U256",
      "computeTarget": "U256"
    },
    "RoundInfo": {
      "round": "u32",
      "startBlock": "BlockNumber"
    },
    "RoundStats": {
      "round": "u32",
      "onlineWorkers": "u32",
      "computeWorkers": "u32",
      "fracTargetOnlineReward": "u32",
      "totalPower": "u32",
      "fracTargetComputeReward": "u32"
    },
    "StashWorkerStats": {
      "slash": "Balance",
      "computeReceived": "Balance",
      "onlineReceived": "Balance"
    },
    "MinerStatsDelta": {
      "numWorker": "i32",
      "numPower": "i32"
    },
    "PayoutReason": {
      "_enum": {
        "OnlineReward": null,
        "ComputeReward": null
      }
    }
}
