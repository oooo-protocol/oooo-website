import { defineMap } from '@preflower/utils'

export enum WALLET {
  METAMASK,
  OKX
}

export const WALLETS = [
  {
    name: 'MetaMask',
    value: WALLET.METAMASK,
    icon: 'metamask'
  }, {
    name: 'OKX Wallet',
    value: WALLET.OKX,
    icon: 'OKX'
  }
]

export const WALLET_MAP = defineMap(WALLETS, 'value', ['name', 'icon'])

export const CHAIN_CONFIG_MAP: Record<string, any> = {}
