import { Inter } from 'next/font/google'

import AdminNav from '@/components/AdminNav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayoutAdimiClinica({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt">
            <body className={inter.className}>
                <AdminNav />
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}