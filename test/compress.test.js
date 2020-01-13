import { expect } from "chai";
import compress from "../src/classes/compress";
import { intu32, u32int, intu64 } from "../src/util";

describe("#round()", function() {
	it("should pass the test vector", function() {
		let chainingValues = [
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123)
		];

		let block = [
			intu32(0x1),
			intu32(0x2),
			intu32(0x3),
			intu32(0x4),
			intu32(0x5),
			intu32(0x6),
			intu32(0x7),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123)
		];

		expect(
			compress(
				chainingValues,
				block,
				intu64(0xfffffffff),
				intu32(0x123),
				intu32(0x123)
			).map(val => u32int(val))
		).to.deep.equal([
			3030228490,
			2005513707,
			1063995171,
			378677973,
			2186330813,
			2589337328,
			3983162518,
			3886179579,
			926876222,
			3890369417,
			3464277498,
			1343355143,
			2637735229,
			202109464,
			2048171527,
			3120239894
		]);
	});
});
