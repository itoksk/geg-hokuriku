# GEG北陸 Vibe Coding プロジェクト

AIと協働する実践開発手法「バイブコーディング」の学習教材と実装サンプル集

## 📁 プロジェクト構成

### 🚀 vibe-coding-app/
**モダンなReact学習プラットフォーム**

最新のWeb技術を活用した、インタラクティブな学習体験を提供するWebアプリケーション

#### 技術スタック
- **Frontend**: React 18.2.0 + TypeScript 5.2.2
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.0
- **Animation**: Framer Motion 10.16.16
- **Icons**: Lucide React
- **Code Display**: React Syntax Highlighter

#### 主要機能
- ✨ 6つの核心原則の解説
- 💡 実践的なコツとテクニック
- 🎨 デザイン改善ガイド
- 🚀 Gemini実践ガイド
- 🛠️ Google AI Studio Build機能
- 📊 AIツール詳細比較
- 🔧 実践ワークショップ

#### デプロイ
```bash
cd vibe-coding-app
npm install
npx vercel  # Vercelへデプロイ
```

### 📚 学習教材

#### vibe-coding-training-complete.html
完全版HTML研修資料（1,748行）
- Google Fonts統合（Zen Kaku Gothic New, Space Grotesk, Bebas Neue）
- Material Icons使用
- Tailwind CSSフレームワーク
- カスタムカラー変数とテーマ
- インタラクティブな学習コンテンツ

#### vibe-coding-complete-guide.md
包括的Markdownガイド（560行）
- バイブコーディングの原則とテクニック
- Gemini実践ガイド
- Google AI Studio Build活用法
- カスタムGem設定
- プロンプトテンプレート集
- トラブルシューティングガイド

### 🎨 literary-editorial-template/
**文芸誌スタイルのデザインシステム**

紙のような質感とインク風タイポグラフィを特徴とするデザインテンプレート

#### デザイン要素
- **カラーパレット**: 
  - Ink (#0A0E27) - テキスト
  - Paper (#FEFEF8) - 背景
  - Electric (#00F0FF) - アクセント
  - Coral (#FF6B6B) - セカンダリ
  - Violet (#7C3AED) - サポート

- **タイポグラフィ**:
  - 日本語: Zen Kaku Gothic New
  - 英数字: Space Grotesk
  - ディスプレイ: Bebas Neue

## 🛠️ セットアップ

### 前提条件
- Node.js 18.0.0以上（推奨: v20）
- npm または yarn
- Googleアカウント（Gemini/AI Studio用）

### インストール手順

1. **リポジトリのクローン**
```bash
git clone [your-repo-url]
cd geg-hokuriku
```

2. **React アプリのセットアップ**
```bash
cd vibe-coding-app
npm install
npm run dev  # 開発サーバー起動
```

3. **本番ビルド**
```bash
npm run build
npm run preview  # ビルドのプレビュー
```

## 📖 学習パス

### 初級者向け
1. `vibe-coding-complete-guide.md` を読んで基本概念を理解
2. `vibe-coding-training-complete.html` をブラウザで開いて実践
3. React アプリで実際のコードを確認

### 中級者向け
1. `vibe-coding-app` のコンポーネントを分析
2. デザインシステムをカスタマイズ
3. 独自のツールを作成してGoogle Sitesに埋め込み

### 上級者向け
1. `literary-editorial-template` のデザインシステムを拡張
2. Google AI Studio Buildで高度なプロトタイプ作成
3. カスタムGemの構築と共有

## 🌟 バイブコーディングの6つの原則

1. **速度優先** - 完璧より素早く
2. **AI任せ** - 細かい実装はAIに
3. **段階的改善** - 少しずつ良くする
4. **楽しさ重視** - 作る過程を楽しむ
5. **シンプル維持** - 複雑にしない
6. **共有前提** - チームで使う

## 🔧 開発ツール

### 推奨AIツール
- **Google Gemini** - 段階的な開発に最適
- **Google AI Studio Build** - 瞬間プロトタイピング
- **Claude** - 複雑なロジック実装
- **ChatGPT** - アイデア出しとレビュー

### 開発環境
- **エディタ**: VS Code（推奨）
- **ブラウザ**: Chrome/Edge（開発者ツール活用）
- **バージョン管理**: Git

## 📝 プロンプトテンプレート

### 基本テンプレート
```
「[対象ユーザー]向けの[アプリの種類]を作成してください。

【必要な機能】
1. [機能1]
2. [機能2]

【デザイン要件】
- Tailwind CSS CDN使用
- スマホ対応
- モダンなデザイン

【技術要件】
- 1つのHTMLファイルで完結
- Google Sites埋め込み可能
```

### 段階的改善
```
第1段階：基本機能実装
第2段階：デザイン改善
第3段階：アニメーション追加
第4段階：レスポンシブ対応
```

## 🚀 デプロイオプション

### Vercel（推奨）
```bash
npx vercel
```

### GitHub Pages
```bash
npm run build
# gh-pagesブランチにdistをプッシュ
```

### Google Sites
1. HTMLファイルを生成
2. Google Sitesで埋め込みコード選択
3. コード貼り付けて公開

## 📚 追加リソース

- [Google Gemini](https://gemini.google.com)
- [Google AI Studio](https://aistudio.google.com)
- [Google Sites](https://sites.google.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Fonts](https://fonts.google.com)
- [Google Material Icons](https://fonts.google.com/icons)

## 🤝 コントリビューション

プルリクエストは歓迎です！
1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

## 📄 ライセンス

MIT License

## 🙏 謝辞

- GEG北陸コミュニティ
- バイブコーディング実践者の皆様
- AI × Human Collaboration

---

**最終更新**: 2025年1月  
**作成**: AI × Human Collaboration 🤖🤝👨‍💻