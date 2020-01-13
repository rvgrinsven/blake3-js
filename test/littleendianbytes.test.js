import { expect } from "chai";
import Output from "../src/classes/Output";
import {
	little_endian_bytes_from_words,
	words_from_little_endian_bytes,
	intu8,
	u32int,
	intu32
} from "../src/util";

describe("#lebytes()", function() {
	it("should convert from words to le bytes", function() {
		let test = [intu8(0x1), intu8(0x2), intu8(0x3), intu8(0x4)];

		expect(words_from_little_endian_bytes(test).map(u32int)).to.deep.equal([
			67305985
		]);
	});

	it("should convert from words to le bytes", function() {
		expect(
			little_endian_bytes_from_words([intu32(67305985)])
		).to.deep.equal(new Uint8Array([1, 2, 3, 4]));
	});
});
