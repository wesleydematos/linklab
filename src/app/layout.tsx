import { StoreProvider } from '@/store/StoreProvider'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const dm = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halogenn',
  description: 'Catálogo de itens para laboratório.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <body className={dm.className} style={{margin: 0}}>{children}</body>
      </html>
    </StoreProvider>
  )
}
