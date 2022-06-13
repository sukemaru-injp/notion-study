# 勉強会資料 Notion活用

## NotionAPIを試す

## ディレクトリ構成

```tree
root/
　├ libs/
    └ notion.ts 
　├ public/

　├ pages/
    └ index.tsx
    └ _app.tsx
    └ _document.tsx
    ├ notion
      └ add.tsx // notionのテーブルへデータ送信
      └ index.tsx // 一覧取得

  ├ components/
    └ Form.tsx

  ├ types
    └ index.tsx

  ├ styles/
    └ global.css 

```

## 使用技術

- axios
- ramda
- styled-components
- swr
