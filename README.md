# PayID-Sign Cmdline

  
## What?
See [PayID-Sign](https://github.com/codetsunami/payid-sign)
  
## How?
### Signing
```bash
node ps.js -sign 'a$b.com' xrpl mainnet 'ssnEYuxBmDdFkrJujVLrryAdvNnKK'

{"paymentNetwork":"xrpl","environment":"mainnet","addressDetailsType":"CryptoAddressDetails","addressDetails":{"address":"rHLgKbVWobTG4hahKH7fpzktDYXMoNphrS"},"signature":"3045022100A8A30964C14A2000A2B835CCDE630228876311F9FDB4CD079029D1E6EB33B1FA022001B8188A7982D18532D689DB139B02A4C1CF09A1F8A3D5AD29DAD128610B72F4","publicKey":"03C23F21792CC22DCCAB522D5A52E9BE5626F47C1D2D2B5BC270E5D8905B701833"}
``` 

### Verifying
```bash
node ps.js -verify 'a$b.com' '{"paymentNetwork":"xrpl","environment":"mainnet","addressDetailsType":"CryptoAddressDetails","addressDetails":{"address":"rHLgKbVWobTG4hahKH7fpzktDYXMoNphrS"},"signature":"3045022100A8A30964C14A2000A2B835CCDE630228876311F9FDB4CD079029D1E6EB33B1FA022001B8188A7982D18532D689DB139B02A4C1CF09A1F8A3D5AD29DAD128610B72F4","publicKey":"03C23F21792CC22DCCAB522D5A52E9BE5626F47C1D2D2B5BC270E5D8905B701833"}'

true
```

