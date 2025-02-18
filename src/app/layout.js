import '@/app/global.css'

export const metadata = {
    title: 'Welcome to Laravel',
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    )
}

export default RootLayout
