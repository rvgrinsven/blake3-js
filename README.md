# blake3-js

Pure javascript implementation of BLAKE3

**Usage**

    const blake = require("blake3-js");

    blake
      .newRegular()
      .update([0,1,2,3,4,5,6])
      .finalize();

    blake
      .newKeyed("whats the Elvish word for friend")
      .update("input can be in be in text form as well")
      .finalize();

    blake
      .newDeriveKey("BLAKE3 2019-12-27 16:29:52 test vectors context")
      .update([0])
      .finalize();

Note: In keyed mode the key has to be exactly 32 bytes. Accepts both an ASCII string of 32 bytes or a byte array of length 32.

**Tests**

Test vectors from the reference implementation have been used. Run yarn test to run the test suite.

**Limitations**

- Performance is bad, many opportunities to improve this.
  (Will switch to typed arrays for the u32 data type which should improve this a bit)
- UTF-8 support is WIP
