import { expect } from "chai";
import ChunkState from "../src/classes/ChunkState";
import { intu32, u32int, intu64, intu8 } from "../src/util";

const key = [
	intu32(0x6a09e667),
	intu32(0xbb67ae85),
	intu32(0x3c6ef372),
	intu32(0xa54ff53a),
	intu32(0x510e527f),
	intu32(0x9b05688c),
	intu32(0x1f83d9ab),
	intu32(0x5be0cd19)
];

let input = [];
for (let i = 0; i < 23; i++) {
	input.push(intu32(0));
}

const lookup = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: "A",
	11: "B",
	12: "C",
	13: "D",
	14: "E",
	15: "F"
};

let input2 = [];
for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		eval("input2.push(intu8(0x" + lookup[i] + lookup[j] + "));");
	}
}

input2 = input2.slice(0, input2.length - 1);

describe("#Chunkstate()", function() {
	it("Chunk State update should pass the test vector for less than 1 block input", function() {
		const chunkState = new ChunkState(key, intu64(0), intu32(0));

		chunkState.update(input);

		expect(
			chunkState.chaining_value.map(val => u32int(val))
		).to.deep.equal([
			1779033703,
			3144134277,
			1013904242,
			2773480762,
			1359893119,
			2600822924,
			528734635,
			1541459225
		]);
	});
	/*
	it("Chunk State update should pass the test vector for larger input", function() {
		const chunkState = new ChunkState(key, intu64(0), intu32(0));

		chunkState.update(input2);

		expect(
			chunkState.chaining_value.map(val => u32int(val))
		).to.deep.equal([
			2925536943,
			2974593456,
			4231892377,
			956807573,
			3967470060,
			224319198,
			344468248,
			3874678914
		]);
	});

	it("Chunk State output should pass the test vector for larger input", function() {
		const chunkState = new ChunkState(key, intu64(0), intu32(0));

		chunkState.update(input2);

		expect(chunkState.output()).to.deep.equal({
			input_chaining_value: [
				2925536943,
				2974593456,
				4231892377,
				956807573,
				3967470060,
				224319198,
				344468248,
				3874678914
			].map(intu32),

			block_words: [
				3284320704,
				3351692740,
				3419064776,
				3486436812,
				3553808848,
				3621180884,
				3688552920,
				3755924956,
				3823296992,
				3890669028,
				3958041064,
				4025413100,
				4092785136,
				4160157172,
				4227529208,
				16711164
			].map(intu32),
			counter: intu64(0),
			block_len: intu32(63),
			flags: intu32(2)
		});
	});*/
});
