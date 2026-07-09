export function scrollToId(id, path = `/${id}`) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  window.history.pushState(null, '', path)
}
