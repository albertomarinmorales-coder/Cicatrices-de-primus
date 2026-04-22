// Dev: empty string → Vite proxy → localhost:3001
// Prod: VITE_API_URL=https://cicatrices-de-primus.onrender.com (set in Vercel dashboard)
const BASE = import.meta.env.VITE_API_URL || ''

async function req(path, options = {}) {
  const res = await fetch(BASE + path, {
    credentials: 'include',
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `Error ${res.status}`)
  }
  return res.json()
}

export const api = {
  // Auth
  getMe:        ()         => req('/auth/me'),
  logout:       ()         => req('/auth/logout', { method: 'POST' }),
  adminLogin:   (password) => req('/auth/admin-login', { method: 'POST', body: JSON.stringify({ password }) }),
  discordLogin: ()         => { window.location.href = `${BASE}/auth/discord` },

  // Photos
  getPhotos: (cat = 'all') =>
    req(`/api/photos${cat && cat !== 'all' ? `?cat=${cat}` : ''}`),

  uploadPhoto: (file, title, category) => {
    const form = new FormData()
    form.append('photo', file)
    form.append('title', title)
    form.append('category', category)
    return fetch('/api/photos', {
      method: 'POST',
      credentials: 'include',
      body: form,
    }).then(async r => {
      if (!r.ok) { const b = await r.json().catch(() => ({})); throw new Error(b.error || `Error ${r.status}`) }
      return r.json()
    })
  },

  deletePhoto: (id) => req(`/api/photos/${id}`, { method: 'DELETE' }),
}

export function avatarUrl(user) {
  if (!user) return null
  if (user.avatar) return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`
  return `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(user.id) % 5n)}.png`
}

export const CATEGORIES = [
  { id: 'all',     label: 'Todo' },
  { id: 'general', label: 'General' },
  { id: 'razas',   label: 'Razas' },
  { id: 'clases',  label: 'Clases' },
  { id: 'oficios', label: 'Oficios' },
  { id: 'mundo',   label: 'Mundo' },
  { id: 'eventos', label: 'Eventos' },
]
