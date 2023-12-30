import { useMemo } from "react"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { BlogProvider } from "src/context/Blog"
import { Router } from "src/router"
import "./App.css"


export const App = () => {
  const endpoint = "https://dark-polished-crater.solana-devnet.quiknode.pro/7bd1f36aa2107a4ef36d7076fc8d7e72d0a64d6b/"
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  )

  return (
    
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}
