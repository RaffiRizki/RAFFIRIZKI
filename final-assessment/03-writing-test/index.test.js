// test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('1 + 2 = 3', () => assert.strictEqual(sum(1, 2), 3));
test('-1 + 1 = 0', () => assert.strictEqual(sum(-1, 1), 0));
test('0 + 0 = 0', () => assert.strictEqual(sum(0, 0), 0));
test('2 + 2 = 4', () => assert.strictEqual(sum(2, 2), 4));