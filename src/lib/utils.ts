/**
 * open a authorization tab and listen message response
 * @param url authorization url
 * @param isCheckClosed Some website security policy cause we cannot determine tab is closed,
 * so we set a param for dev to close page closed check
 * @returns is verified
 */
export async function invokeAuthorizationLink (url: string, isCheckClosed: boolean = true) {
  return await new Promise<boolean>((resolve, reject) => {
    const tab = window.open(url, '_blank', 'popup,width=600,height=800')
    const bc = new BroadcastChannel('oooo-authorization')

    const timer = setInterval(() => {
      console.log(tab)
      if (isCheckClosed) {
        if (tab?.closed) {
          clear()
          reject(new Error('User cancel authorization'))
        }
      }
    }, 500)

    const listener = (event: MessageEvent<{
      source: string
      data: boolean
    }>) => {
      console.log(event.origin, event.data)
      if (event.origin !== window.location.origin) return
      const { source, data } = event.data
      if (source === 'oooo-authorization') {
        resolve(data)
        clear()
      }
    }

    bc.addEventListener('message', listener)

    const clear = () => {
      clearInterval(timer)
      window.removeEventListener('message', listener)
      if (tab) {
        tab.close()
      }
    }
  })
}
