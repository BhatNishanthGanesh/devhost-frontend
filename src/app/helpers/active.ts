import { usePathname } from 'next/navigation'

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()

  const checkActivePath = (path: string) => {
    if (path === '/' && pathname !== path) {
      return false
    }
    return pathname.startsWith(path)
  }

  return checkActivePath
}