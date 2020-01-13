import { expect } from "chai";
import { round } from "../src/classes/compress";
import { intu32, u32int } from "../src/util";

describe("#round()", function() {
	it("should pass the test vector", function() {
		let state = [
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
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

		let m = [
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
			intu32(0x123),
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

		expect(round(state, m).map(v => u32int(v))).to.deep.equal([
			1337177307,
			1337177307,
			1337177307,
			1337177307,
			3230963718,
			3230963718,
			3230963718,
			3230963718,
			1025176554,
			1025176554,
			1025176554,
			1025176554,
			2244392000,
			2244392000,
			2244392000,
			2244392000
		]);
	});
});
