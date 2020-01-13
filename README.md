# blake3-js

Pure javascript implementation of BLAKE3

**Usage**

    const blake = require("blake3-js");

    blake
      .newRegular()
      .update([])
      .finalize();

    blake
      .newKeyed("whats the Elvish word for friend")
      .update([])
      .finalize();

**Tests**

Test vectors from the reference implementation have been used. Run yarn test to run the test suite.

**Limitations**

-   Performance is bad, many opportunities to improve this
-   Derived key hash still WIP.
