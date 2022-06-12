/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_PAGE_ID: process.env.NOTION_PAGE_ID,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID
  }
}

module.exports = nextConfig
