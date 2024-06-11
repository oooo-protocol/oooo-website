import { defineMap } from '@preflower/utils'
import OKX_IMAGE from '@/assets/wallets/okx.png'
import METAMASK_IMAGE from '@/assets/wallets/metamask.png'
import { WALLET } from '@/entities/wallet'

export const ENV_VARIABLE = import.meta.env

export const ETH_WALLETS = [
  {
    name: 'METMASK',
    value: WALLET.METAMASK,
    image: METAMASK_IMAGE
  }, {
    name: 'OKX WALLET',
    value: WALLET.OKX,
    image: OKX_IMAGE
  }
]

export const WALLET_MAP = defineMap(ETH_WALLETS, 'value', ['name', 'image'])
