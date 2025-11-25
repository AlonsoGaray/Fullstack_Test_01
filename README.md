# Prueba Técnica - Fullstack Developer (Node.js + React)

¡Bienvenido(a) a la prueba técnica para el puesto de **Desarrollador Fullstack**!

Esta prueba evaluará tus habilidades en el desarrollo de aplicaciones full-stack modernas utilizando **Node.js**, **Express**, **React**, y bases de datos. Tendrás **48 horas** para completar el desafío.

---

## 📋 Descripción del Proyecto

Desarrollarás una **plataforma de gestión de proyectos y tareas colaborativa** donde los usuarios pueden:

- Registrarse e iniciar sesión de forma segura
- Crear y gestionar proyectos
- Asignar tareas a diferentes proyectos
- Colaborar con otros usuarios en proyectos compartidos
- Filtrar, buscar y ordenar tareas por diferentes criterios
- Ver estadísticas básicas de sus proyectos

---

## 🚀 Demo en Vivo

La aplicación está desplegada y disponible para pruebas en producción:

- **Frontend**: [https://fullstack-test-01.vercel.app/](https://fullstack-test-01.vercel.app/)
- **Backend API**: [https://jelou-full-test.onrender.com](https://jelou-full-test.onrender.com)
- **API Docs**: [https://jelou-full-test.onrender.com/api-docs](https://jelou-full-test.onrender.com/api-docs)

> **Nota**: El backend está en un plan gratuito de Render, por lo que puede tardar ~50 segundos en responder la primera vez (cold start).

---

## 🛠️ Stack Tecnológico Requerido

### Backend
- **Runtime**: Node.js (v18 o superior)
- **Framework**: Express.js
- **Lenguaje**: TypeScript
- **Base de Datos**: MySQL **o** MongoDB (elige una)
- **Autenticación**: JWT (JSON Web Tokens)
- **Documentación API**: Swagger/OpenAPI

### Frontend
- **Framework**: React (v18 o superior)
- **Lenguaje**: TypeScript
- **Routing**: React Router v6
- **Estilos**: TailwindCSS (preferencia)

### DevOps (Opcional)
- **Containerización**: Docker + Docker Compose

**Nota**: Puedes usar cualquier otra librería o herramienta que consideres necesaria. Documenta tus decisiones técnicas en el archivo `TECHNICAL_DECISIONS.md`.

---

## 📦 Funcionalidades Requeridas

### 1. Autenticación y Usuarios

**Backend:**
- Registro de usuarios con validación
- Login con generación de JWT
- Middleware de autenticación para proteger rutas
- Hash de contraseñas
- Endpoint para obtener perfil del usuario autenticado

**Frontend:**
- Formularios de registro y login con validaciones
- Almacenamiento del token de autenticación
- Rutas protegidas que requieren autenticación
- Redirección automática según estado de autenticación

---

### 2. Gestión de Proyectos

**Backend:**
- CRUD completo de proyectos
- Solo el creador del proyecto puede editarlo o eliminarlo
- Sistema de colaboradores: añadir usuarios a proyectos
- Paginación en listado de proyectos

**Frontend:**
- Lista de proyectos con diseño responsive
- Crear, editar y eliminar proyectos
- Búsqueda y filtrado de proyectos
- Gestión de colaboradores

---

### 3. Gestión de Tareas

**Backend:**
- CRUD completo de tareas
- Las tareas pertenecen a un proyecto
- Estados: "pendiente", "en progreso", "completada"
- Prioridades: "baja", "media", "alta"
- Asignar tareas a colaboradores del proyecto
- Filtros por estado, prioridad, proyecto, usuario asignado
- Ordenamiento flexible

**Frontend:**
- Visualización de tareas (lista, kanban, o tu propuesta)
- Crear, editar y eliminar tareas
- Cambiar estado de tareas
- Filtros interactivos
- Asignación de tareas a usuarios

---

### 4. Dashboard y Estadísticas

**Backend:**
- Endpoint con estadísticas del usuario:
  - Total de proyectos
  - Total de tareas
  - Tareas por estado
  - Otras métricas relevantes

**Frontend:**
- Dashboard con visualización de estadísticas
- Resumen de actividad del usuario

---

## 📊 Criterios de Evaluación

Tu proyecto será evaluado en base a:

| Criterio | Peso |
|----------|------|
| **Funcionalidad** | 30% |
| **Calidad del Código** | 25% |
| **Arquitectura y Diseño** | 15% |
| **Seguridad** | 10% |
| **UI/UX** | 10% |
| **Documentación** | 5% |
| **Testing** | 5% |

### Puntos Extra (hasta +30%)
- Docker implementation completa (+10%)
- Tests exhaustivos (+5%)
- Funcionalidades adicionales (+5%)
- CI/CD pipeline (+5%)
- Deploy en producción (+5%)

---

## 📝 Instrucciones de Entrega

1. **Fork del repositorio**: Crea un fork de este repositorio

2. **Rama de trabajo**:
   ```
   test/tu-nombre-completo
   ```

3. **Estructura del proyecto**:
   ```
   /
   ├── backend/
   ├── frontend/
   ├── TECHNICAL_DECISIONS.md    # Documenta tus decisiones aquí
   ├── docker-compose.yml         # (opcional)
   └── README.md                  # Actualiza con instrucciones de ejecución
   ```

4. **Documentación requerida**:
   - Actualiza este README con instrucciones de instalación y ejecución
   - Completa el archivo `TECHNICAL_DECISIONS.md` explicando tus elecciones
   - Documenta tu API con Swagger
   - Incluye al menos 5 tests

5. **Pull Request**: Una vez completado, crea un PR hacia el repositorio original

---

## ⏱️ Tiempo

Tienes **48 horas** desde que recibes esta prueba. Gestiona tu tiempo según tus prioridades.

---

## ❓ Preguntas Frecuentes

**¿Puedo usar librerías adicionales?**
Sí, documenta tus elecciones en `TECHNICAL_DECISIONS.md`.

**¿Qué base de datos uso?**
La que prefieras (MySQL o MongoDB). No afecta la evaluación.

**¿Es obligatorio Docker?**
No, pero suma puntos extra.

**¿Puedo usar librerías de UI?**
Sí. Recomendamos TailwindCSS para estilos, pero también puedes usar otras librerías de componentes (Material-UI, Ant Design, etc.).

---

## 🎉 ¡Buena suerte!

Recuerda: evaluamos no solo que funcione, sino **cómo está construido**. Demuestra tu criterio técnico y mejores prácticas.

Si tienes dudas sobre los requisitos, no dudes en contactarnos.

---

# 📖 Instrucciones de Ejecución

## Prerrequisitos

- **Node.js**: v22 o superior
- **MongoDB**: Local o MongoDB Atlas (cloud)
- **Docker** (opcional): Para deployment con contenedores
- **Git**: Para clonar el repositorio

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AlonsoGaray/Fullstack_Test_01.git
cd Fullstack_Test_01
```

### 2. Instalar dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

## Configuración

### Backend - Variables de Entorno

Crear archivo `backend/.env`:

```env
# Server
NODE_ENV=development
PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/project_management

# JWT
JWT_SECRET=tu-clave-secreta-super-segura
JWT_EXPIRES_IN=7d

# Security
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_AUTH_MAX=5
RATE_LIMIT_API_MAX=100
```

### Frontend - Variables de Entorno

Crear archivo `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

## Ejecución

### Opción 1: Desarrollo Local

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Acceder a:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api
- **MongoDB**: localhost:27017

### Opción 2: Con Docker

```bash
# Desde la raíz del proyecto
docker-compose up --build
```

Acceder a:
- **Frontend**: http://localhost
- **Backend API**: http://localhost:3000/api
- **MongoDB**: localhost:27017

## Tests
```bash
# Comandos de tests
```

## API Documentation

- **Swagger UI**: http://localhost:3000/api-docs

### Endpoints Principales

**Autenticación:**
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión

**Proyectos:**
- `GET /api/projects` - Listar proyectos
- `POST /api/projects` - Crear proyecto
- `GET /api/projects/:id` - Obtener proyecto
- `PUT /api/projects/:id` - Actualizar proyecto
- `DELETE /api/projects/:id` - Eliminar proyecto

**Tareas:**
- `GET /api/tasks` - Listar tareas
- `POST /api/tasks` - Crear tarea
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

**Dashboard:**
- `GET /api/dashboard/stats` - Estadísticas del usuario

## Credenciales de Prueba

Después de registrarte, puedes crear:
- Proyectos con colaboradores
- Tareas con diferentes prioridades (alta, media, baja)
- Estados: pendiente, en progreso, completada
