
import { CartProvider } from '@/helpers/Context/CartProvider'
import { ItemQuantityProvider } from '@/helpers/Context/ItemQuantityProvider'
import '@/styles/globals.css'
import "@/styles/sass/main.scss"
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ItemQuantityProvider>
      <Component {...pageProps} />
      </ItemQuantityProvider>
    </CartProvider>
    
  )
  
}
