# 要件定義

## 目的

ローカル作業の開始コマンド、環境プロファイル、事前確認をまとめる。

## 対象ユーザー

- 100本公開計画の制作、検証、公開を短い周期で回す開発者。
- AIエージェント作業の結果を、手動確認と公開前証跡に落とし込みたいユーザー。

## MVP機能

- 入力データを読み込み、対象項目を一覧化する。
- 必須項目 `workspace`, `command`, `envProfile`, `preflight` の不足を検出する。
- 結果を JSON と Markdown のレポートとして保存する。
- 自動テストと手動テスト手順を同梱する。

## 受け入れ条件

- 正常なサンプル入力で自動テストが成功する。
- 必須項目不足のサンプルでエラーが検出される。
- 手動テスト準備、手順、期待結果が `docs/manual-test.md` で確認できる。

## 参照

参照元 ZIP: `D:\AI\WindowsApp\created_idea_001_codex-local-launcher-workbench\idea_001_codex-local-launcher-workbench.zip`。一部に文字化けがあったため、正式docsは `PICKUP_100_IDEAS.md` とドメインガイドから再構成した。
