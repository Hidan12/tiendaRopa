'use client'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Foter'
import ReduxProvider from '@/redux/ReduxProvider'


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  )
}