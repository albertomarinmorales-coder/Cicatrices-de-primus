# Backend — Cicatrices de Primus (Galería)

## Stack
- Node.js + Express
- Multer (upload en memoria)
- Cloudinary (almacenamiento de imágenes)
- Discord OAuth (passport-discord-auth)
- SQLite (usuarios + fotos + sesiones)

---

## Configuración inicial

### 1. Copia el fichero de variables de entorno
```bash
cp .env.example .env
```

### 2. Crea una app de Discord
1. Ve a https://discord.com/developers/applications
2. Crea una nueva aplicación
3. Ve a **OAuth2 → General**
4. Copia `CLIENT ID` y `CLIENT SECRET` → ponlos en `.env`
5. En **Redirects**, añade:
   - `http://localhost:3001/auth/discord/callback` (desarrollo)
   - `https://tu-backend.onrender.com/auth/discord/callback` (producción)

### 3. Obtén tu Discord User ID (para ser admin)
1. Discord → Ajustes → Avanzado → activa **Modo desarrollador**
2. Clic derecho sobre tu usuario → **Copiar ID de usuario**
3. Pégalo en `ADMIN_DISCORD_ID` del `.env`

### 4. Crea una cuenta en Cloudinary
1. https://cloudinary.com (plan gratuito: 25 GB)
2. Dashboard → copia `Cloud name`, `API Key`, `API Secret`
3. Pégalos en `.env`

### 5. Instala dependencias y arranca
```bash
npm install
npm run dev
```

---

## Endpoints

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| GET | `/api/health` | No | Health check |
| GET | `/auth/discord` | No | Inicia login con Discord |
| GET | `/auth/discord/callback` | No | Callback OAuth |
| POST | `/auth/logout` | Sí | Cierra sesión |
| GET | `/auth/me` | No | Usuario en sesión (o null) |
| GET | `/api/photos?cat=razas` | No | Lista fotos (filtrables por categoría) |
| POST | `/api/photos` | Sí | Sube foto (multipart: `photo`, `category`, `title`) |
| DELETE | `/api/photos/:id` | Sí | Borra foto (solo owner o admin) |

---

## Permisos
- **Sin login**: solo puede ver fotos
- **Usuario Discord**: puede subir y borrar SUS fotos
- **Admin** (`ADMIN_DISCORD_ID`): puede borrar cualquier foto

---

## Deploy en Render (gratis)
1. Sube la carpeta `backend/` a un repo (o usa este mismo)
2. Crea un **Web Service** en https://render.com
3. Build command: `npm install`
4. Start command: `node server.js`
5. Añade todas las variables de `.env` en **Environment**
6. Actualiza `DISCORD_CALLBACK_URL` y `FRONTEND_URL` con las URLs de producción
