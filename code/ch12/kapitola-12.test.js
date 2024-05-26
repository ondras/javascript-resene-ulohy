import test from "node:test";
import assert from "node:assert";
import validateUsername from "./validate-username.js";


test("funkce validateUsername", () => {
	assert.strictEqual(validateUsername("test"), true);
	assert.strictEqual(validateUsername("0test"), false);
	assert.strictEqual(validateUsername("123 ahoj"), false);
	assert.strictEqual(validateUsername(""), false);
	assert.strictEqual(validateUsername(), false);
	assert.strictEqual(validateUsername("a b"), true);
	assert.strictEqual(validateUsername("a"), true);
});
