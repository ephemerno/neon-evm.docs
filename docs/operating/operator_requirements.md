---
title: Operator Requirements
---

### Balance recommendations

First, you must be registered in Solana, which involves creating an account with a balance for storing SOL tokens, and getting the public and private keys.
There is no strict minimum amount of SOL required to run an operator on Neon EVM. However, you should take into account that you will need tokens to create accounts for new users, deploy contracts, and execute transactions.

In addition to the balance for storing SOL tokens, an operator must also have the `NEON_TOKEN_MINT` balance for storing value tokens. These tokens are used to pay funds from users to an operator for the successful execution of transactions. Depending on the chosen configuration, specific values for `NEON_TOKEN_MINT` are indicated in the [table](#neon_token_mint) below.

To create the `NEON_TOKEN_MINT` balance, you can use the following command:
```
spl-token -u <Solana RPC node URL> create-account <NEON_TOKEN_MINT>
```

### Hardware recommendations
We do not have strict hardware recommendations. The device specifications below are based on information obtained from official Solana [documentation](https://docs.solana.com/running-validator/validator-reqs).

The minimum specifications recommended to your Neon EVM proxy:
  * CPU
    * 12 cores
    * 2.8 GHz or faster
    * AVX2 instruction support
  * RAM
    * 128 GB or more
  * Disk space
    * 500 GB or more

> Do not use a public or shared Solana RPC node for your Neon EVM proxy. Use only the device that you control.

In addition to the Neon EVM proxy you need a Solana RPC node. It should be a dedicated RPC node with low latency to interact with your Neon EVM proxy.

The minimum specifications recommended to your Solana RPC node:
  * CPU
    * 16 cores
    * EPYC Gen 2 or Gen 3
    * Core isolation
  * RAM
    * 256 GB memory
    * [Tmpfs](about/terminology.md#tmpfs)
  * Disk space
    * Depends on the transaction history required for storage

### Software recommendations
The following software should be installed on your Neon EVM proxy:
  * OS
    * Ubuntu 20.04 or later
    * macOS Darwin 10.12 or later
  * Docker
  * Docker Compose

### Solana cluster requirements (optional)
If you want to use a local solana cluster, you need to meet the following requirements:
  * Solana cluster with `--enable-rpc-transaction-history` enabled.
  * Solana cluster with `--enable-rpc-bigtable-ledger-storage` enabled.

### Networking
Internet service should be at least 300 Mbps.