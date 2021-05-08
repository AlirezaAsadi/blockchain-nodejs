# Simple Blockchain implementation using Node.js


## Installation
`npm i`

## How to run
`npm start`

## Output
```
> npm start
Adding new block: {"from":"0x111","to":"0x222","amount":10}
Mining block...
Mining completed with nonce "96048", new block added to blockchain.


Adding new block: {"from":"0x444","to":"0x555","amount":30}
Mining block...
Mining completed with nonce "17594", new block added to blockchain.


Adding new block: {"from":"0x888","to":"0x111","amount":40}
Mining block...
Mining completed with nonce "17594", new block added to blockchain.


Your entire blockchain: {
    "blockchain": [
        {
            "block": {
                "index": 0,
                "timestamp": "2021-05-08T13:42:53.902Z",
                "previousBlockHash": "-",
                "nonce": 0,
                "transaction": {
                    "from": "0x0",
                    "to": "0x0",
                    "amount": 0
                },
                "hash": "9a009aa0fdbc357370076ca69ee41bc79079bffc0e426bb7db2ee927ecfeeaef"
            }
        },
        {
            "block": {
                "timestamp": "2021-05-08T13:42:53.903Z",
                "nonce": 96048,
                "transaction": {
                    "from": "0x111",
                    "to": "0x222",
                    "amount": 10
                },
                "hash": "000082dfcfbd808ff278e63e54b51d6464621a29e0c3f7e76999a82818052948"
            }
        },
        {
            "block": {
                "timestamp": "2021-05-08T13:42:55.189Z",
                "nonce": 17594,
                "transaction": {
                    "from": "0x444",
                    "to": "0x555",
                    "amount": 30
                },
                "hash": "00000e380af2b8a1384a5230ad0ddec44c3404dbdd363e61727079028497aebd"
            }
        },
        {
            "block": {
                "timestamp": "2021-05-08T13:42:55.416Z",
                "nonce": 17594,
                "transaction": {
                    "from": "0x888",
                    "to": "0x111",
                    "amount": 40
                },
                "hash": "00000e380af2b8a1384a5230ad0ddec44c3404dbdd363e61727079028497aebd"
            }
        }
    ],
    "difficulty": 4
}

```