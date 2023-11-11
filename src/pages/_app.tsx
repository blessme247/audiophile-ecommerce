
import { CartProvider } from '@/helpers/Context/CartProvider'
import '@/styles/globals.css'
import "@/styles/sass/main.scss"
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
    
  )
  
}
