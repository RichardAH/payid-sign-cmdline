args = process.argv.slice(2)
if (args.length != 4) {
    console.log("Usage: node ps.js <pay$id.com> <xrpl|btc|etc> <mainnet|testnet> <privatekeyhex|xrplfamilyseed>")
    process.exit(1)
}

const ps = require('payid-sign')

console.log(ps.create_signed_payid(args[0], args[1], args[2], args[3]))
    
