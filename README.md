# PayID-Sign Cmdline

  
## What?
See [PayID-Sign](https://github.com/codetsunami/payid-sign)
  
## How?
```
Usage: node ps.js <pay$id.com> <xrpl|btc|etc> <mainnet|testnet> <privatekeyhex|xrplfamilyseed>
```
## Example
```bash
node ps.js a$b.com xrpl mainnet 'ssnEYuxBmDdFkrJujVLrryAdvNnKK'

{"paymentNetwork":"xrpl","environment":"mainnet","addressDetailsType":"CryptoAddressDetails","addressDetails":{"address":"rHLgKbVWobTG4hahKH7fpzktDYXMoNphrS"},"signature":"3044022013456F17F3F51C4A1187E9B271D722E41F4AFC1174B241E46F30E06346DF501902202C966A0420BA6BBFD280845ABDB36188BDC1C53DC76B66E746C970ED71EDE39B","publicKey":"03C23F21792CC22DCCAB522D5A52E9BE5626F47C1D2D2B5BC270E5D8905B701833"}
``` 
