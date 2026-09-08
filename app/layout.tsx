import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'LightVibe — 轻声说出想法',description:'LightVibe 项目介绍、Mac Bridge 发布状态与连接指南。连接 iPhone、Apple Watch 和 Mac。',icons:{icon:'/icon.png'}};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="zh-Hans"><body>{children}</body></html>;}
