# Lisk Service client
[![Lisk service client version](https://img.shields.io/github/package-json/v/liskscan/lisk-service-client?color=green)](https://github.com/liskscan/lisk-service-client)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Lisk service compatibility](https://img.shields.io/badge/lisk--service-0.7.0--beta.0-blue)](https://github.com/liskhq/lisk-service)



This repository houses the TypeScript client for [Lisk service](https://github.com/liskhq/lisk-service), enabling seamless integration of Lisk blockchain data into your applications.

### Installation
To add this package to your project, use either of the following commands:

#### Using npm:
```cli
npm install --save @liskscan/lisk-service-client
```
#### Using yarn:
```cli
yarn add @liskscan/lisk-service-client
```

### Getting started
To start using the Lisk Service Client, you need to create a new service client:
```js
const service = new LiskService({
  url: "service.lisk.com",
  disableTLS: true,     // default false
  disableWs: true,      // default false
  disableEvents: true   // default false
})
```
## Usage
### HTTP Fetching
Retrieve blockchain blocks with a simple HTTP get request:
```js
const getBlocks = async () => {
  const blocks = await service.get("blocks", { limit: 25 })
  if (blocks.status === "success") {
    console.log(blocks.data)
  }
}
getBlocks()
```
### WS RPC Fetching
Leverage RPC over WebSockets to retrieve transactions:
```js
const getTransactions = async () => {
  const transactions = await service.rpc("get.transactions", { limit: 10 })
  if (transactions.status === "success") {
    console.log(transactions.data)
  }
}
getTransactions()
```````

## Subscribing to Blockchain Events
Get real-time blockchain event updates:
```js
service.subscribe("update.generators", (data) => {
  console.log(data)
})
```````

# License
Copyright 2023 Liskscan BV.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
