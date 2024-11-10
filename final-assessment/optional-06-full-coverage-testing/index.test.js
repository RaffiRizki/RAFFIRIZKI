import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('jumlah dari dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5); 
});

test('jumlah dari dua angka negatif', () => {
  assert.strictEqual(sum(-1, -1), 0); 
});

test('jumlah dari satu angka positif dan satu angka negatif', () => {
  assert.strictEqual(sum(5, -3), 0); 
});

test('jumlah dengan tipe non-angka', () => {
  assert.strictEqual(sum('2', '3'), 0); 
  assert.strictEqual(sum(null, 3), 0); 
  assert.strictEqual(sum(undefined, 3), 0); 
});

test('jumlah nol dan angka lainnya', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5); 
});

test('jumlah dari dua nol', () => {
  assert.strictEqual(sum(0, 0), 0); 
});
