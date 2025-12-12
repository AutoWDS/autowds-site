import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Octopus Crawler - 强大的浏览器自动化插件',
  description: '一款功能强大的浏览器扩展，让网页数据采集和自动化操作变得简单高效',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
