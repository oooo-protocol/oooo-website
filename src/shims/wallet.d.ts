import type { Eip1193Provider, BrowserProvider } from 'ethers'

declare global {
  interface Window {
    ethereum?: BrowserProvider & Eip1193Provider
    okxwallet?: BrowserProvider & Eip1193Provider
  }
}
