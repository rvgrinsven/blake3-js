import { expect } from "chai";
import Output from "../src/classes/Output";
import { intu32, u32int, intu64 } from "../src/util";

const value1 = [
	intu32(0x6a09e667),
	intu32(0xbb67ae85),
	intu32(0x3c6ef372),
	intu32(0xa54ff53a),
	intu32(0x510e527f),
	intu32(0x9b05688c),
	intu32(0x1f83d9ab),
	intu32(0x5be0cd19)
];

const value2 = [
	intu32(0x6a09e667),
	intu32(0xbb67ae85),
	intu32(0x3c6ef372),
	intu32(0xa54ff53a),
	intu32(0x510e527f),
	intu32(0x9b05688c),
	intu32(0x1f83d9ab),
	intu32(0x5be0cd19),
	intu32(0x6a09e667),
	intu32(0xbb67ae85),
	intu32(0x3c6ef372),
	intu32(0xa54ff53a),
	intu32(0x510e527f),
	intu32(0x9b05688c),
	intu32(0x1f83d9ab),
	intu32(0x5be0cd19)
];

describe("#output()", function() {
	it("Chaing value should pass the test vector", function() {
		const output = new Output(
			value1,
			value2,
			intu64(0x123),
			intu32(0),
			intu32(0)
		);

		expect(output.chaining_value().map(val => u32int(val))).to.deep.equal([
			3221707858,
			673585604,
			4049083212,
			4014766351,
			3291938073,
			881747481,
			1288745103,
			2821046997
		]);
	});

	it("Root output bytes value should pass the test vector", function() {
		const output2 = new Output(
			value1,
			value2,
			intu64(0x123),
			intu32(0),
			intu32(0)
		);

		expect(output2.root_output_bytes(23)).to.deep.equal([
			198,
			135,
			190,
			5,
			161,
			169,
			81,
			234,
			215,
			51,
			146,
			213,
			232,
			235,
			114,
			68,
			226,
			62,
			200,
			204,
			181,
			132,
			24
		]);
	});
});
