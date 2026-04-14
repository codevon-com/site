type ChatbaseCommand = (...args: unknown[]) => unknown

type ChatbaseApi = ChatbaseCommand & {
  q?: unknown[][]
}

const CHATBASE_SCRIPT_SRC = 'https://www.chatbase.co/embed.min.js'
const CHATBASE_AGENT_ID = 'NTqCgAoPyiVpiEKKr6Upp'
const CHATBASE_DOMAIN = 'www.chatbase.co'

function createChatbaseProxy() {
  const chatbase: ChatbaseApi = ((...args: unknown[]) => {
    chatbase.q = chatbase.q || []
    chatbase.q.push(args)
  }) as ChatbaseApi

  chatbase.q = chatbase.q || []

  return new Proxy(chatbase, {
    get(target, prop) {
      if (prop === 'q') {
        return target.q
      }

      return (...args: unknown[]) => target(prop, ...args)
    }
  })
}

export default defineNuxtPlugin(() => {
  if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
    window.chatbase = createChatbaseProxy()
  }

  const injectScript = () => {
    if (document.getElementById(CHATBASE_AGENT_ID)) {
      return
    }

    const script = document.createElement('script')
    script.src = CHATBASE_SCRIPT_SRC
    script.id = CHATBASE_AGENT_ID
    script.async = true
    script.defer = true
    ;(script as HTMLScriptElement & { domain?: string }).domain = CHATBASE_DOMAIN

    ;(document.body || document.head || document.documentElement).appendChild(script)
  }

  if (document.readyState === 'complete') {
    injectScript()
  } else {
    window.addEventListener('load', injectScript, { once: true })
  }
})
