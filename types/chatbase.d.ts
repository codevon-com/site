export {}

declare global {
  interface Window {
    chatbase?: ((command: string, ...args: unknown[]) => unknown) & {
      q?: unknown[][]
    }
  }
}
