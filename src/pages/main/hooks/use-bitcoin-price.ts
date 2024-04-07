import { useQuery } from '@tanstack/vue-query'

export const useBitcoinPrice = () => {
  const { data: price } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data: { BTC } } = await fetch('https://production.api.coindesk.com/v2/tb/price/ticker?assets=BTC').then(async (response) => await response.json())

      return {
        current: BTC.ohlc.c,
        change: BTC.change.percent
      }
    }
  })

  return price
}
