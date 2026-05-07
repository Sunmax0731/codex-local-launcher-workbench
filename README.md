# codex-local-launcher-workbench

Codexローカルランチャーワークベンチ は、ローカルワークスペース、起動コマンド、環境プロファイル、事前チェックをまとめる。

## 対象ユーザー

- ローカル作業環境を複数持つ開発者

## 主な価値

- 必須項目の不足を自動検出します。
- 手動テスト、導入手順、リリース前確認を同じドキュメント体系で確認できます。
- 競合プロダクトと公式標準を基準に、QCDSを実装とドキュメントの両方で評価します。

## 使い方

```powershell
cd D:\AI\WindowsApp\codex-local-launcher-workbench
npm test
node src/cli.mjs samples/sample-input.json manual-output
```

## ドキュメント

- docs/requirements.md
- docs/specification.md
- docs/design.md
- docs/implementation-plan.md
- docs/test-plan.md
- docs/manual-test.md
- docs/installation-guide.md
- docs/user-guide.md
- docs/competitive-benchmark.md
- docs/evaluation-criteria.md
- docs/release-checklist.md
- docs/post-mvp-roadmap.md
- docs/qcds-evaluation.md
