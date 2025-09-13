# Vercel デプロイメント手順

## 前提条件
- Vercelアカウント（https://vercel.com で無料登録）
- Git リポジトリ（GitHub/GitLab/Bitbucket）

## デプロイ方法

### 方法1: Vercel CLI を使用（推奨）

1. Vercel CLI でデプロイ:
```bash
npx vercel
```

2. 初回デプロイ時の設定:
   - Vercelアカウントにログイン
   - プロジェクト名を設定
   - ビルド設定は自動検出されます（vercel.json設定済み）

3. プロダクションデプロイ:
```bash
npx vercel --prod
```

### 方法2: GitHub連携（自動デプロイ）

1. コードをGitHubにプッシュ:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Vercelダッシュボードで設定:
   - https://vercel.com/new にアクセス
   - GitHubリポジトリをインポート
   - 設定は自動検出（vercel.json使用）
   - "Deploy"をクリック

### 方法3: ローカルビルド + 手動アップロード

Node.js v24との互換性問題がある場合:

1. Node.jsバージョンを変更（推奨: v18 or v20）:
```bash
# nvm使用の場合
nvm install 20
nvm use 20
```

2. ビルド実行:
```bash
npm install
npm run build
```

3. Vercel CLIでデプロイ:
```bash
npx vercel --prebuilt
```

## 環境変数

必要に応じて、Vercelダッシュボードで環境変数を設定:
- Settings > Environment Variables

## カスタムドメイン

1. Vercelダッシュボード > Settings > Domains
2. カスタムドメインを追加
3. DNSレコードを設定

## トラブルシューティング

### ビルドエラー（Node.js v24）
Node.js v24は新しすぎるため、v20またはv18を使用してください。

### rollupエラー
```bash
rm -rf node_modules package-lock.json
npm install
```

## デプロイ後の確認

- デプロイURL: `https://[project-name].vercel.app`
- ビルドログ: Vercelダッシュボードで確認
- 関数ログ: Vercel > Functions タブ

## 更新方法

### GitHub連携の場合
mainブランチにプッシュすると自動デプロイ

### CLI使用の場合
```bash
npx vercel --prod
```