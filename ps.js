args = process.argv.slice(2)

function print_help_and_exit() {
    console.log("Usage... ")
    console.log("Sign:    node ps.js -sign <pay$id.com> <xrpl|btc|etc> <mainnet|testnet> <private_key_hex|xrpl_family_seed>")
    console.log("Verify:  node ps.js -verify <pay$id.com> <json_payload>")
    process.exit(1)
}

if (args.length < 1)
    print_help_and_exit()

const ps = require('payid-sign')

if (args[0].slice(0,2) == '-v') {
    if (args.length != 3)
        print_help_and_exit()

    console.log(ps.verify_signed_payid(args[1], args[2]))
} else if (args[0].slice(0,2) == '-s') {
    if (args.length != 5)
        print_help_and_exit()
 
    console.log(ps.create_signed_payid(args[1], args[2], args[3], args[4]))
} else 
    print_help_and_exit()
