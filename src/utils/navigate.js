const BASE_URL = import.meta.env.BASE_URL

export function navigate(path) {
  const target = BASE_URL.replace(/\/$/, '') + path
  window.history.pushState(null, '', target)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function currentRoute() {
  const base = BASE_URL.replace(/\/$/, '')
  const pathname = window.location.pathname
  return pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname
}
