import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "launcher-1",
  "title": "作業開始・ローカルランチャー・Codex作業台 サンプル 1",
  "workspace": "D:\\AI\\WindowsApp\\codex-local-launcher-workbench",
  "command": "codex run --dry-run",
  "envProfile": "local",
  "preflight": [
    "git clean",
    "dependency check"
  ]
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "launcher-missing-required",
  "title": "必須項目不足サンプル",
  "command": "codex run --dry-run",
  "envProfile": "local",
  "preflight": [
    "git clean",
    "dependency check"
  ]
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
