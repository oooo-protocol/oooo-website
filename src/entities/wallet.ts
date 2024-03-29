import type { BrowserProvider, Eip1193Provider } from 'ethers'

export interface ChainConfig {
  chainId: string
  chainName: string
  rpcUrls: string[]
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls: string[]
}

export interface TransactionParameter {
  nonce?: string
  gasPrice: string
  gas: string
  to: string
  from: string
  value: string
  data?: string
  chainId: string
}

export interface WalletImpl {
  provider: BrowserProvider & Eip1193Provider
  connect: () => Promise<string>
  disconnect: () => Promise<void>
  switchToChain: (chain: string) => Promise<void>
  addToChain: (config: ChainConfig) => Promise<void>
  signTransaction: (parameter: TransactionParameter) => Promise<string>
  removeAllListeners: () => void
}
