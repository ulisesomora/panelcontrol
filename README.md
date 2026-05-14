# User Control Panel - SPA (React)

Aplicación Panel de Control de Usuarios (SPA) desarrollada con React, que consume la API de usuarios aleatorios y permite gestionar usuarios con autenticación, filtros, mensajes y vista de detalle.

---

# Instalación del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/ulisesomora/panelcontrol.git
```

## 2. Entrar al proyecto

```bash
cd panelcontrol
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación se ejecutará en:

http://localhost:5173

---

# Credenciales de acceso

Usuario: admin  
Contraseña: 123

---

# Funcionalidades principales

## Autenticación
- Login simulado
- Persistencia con localStorage
- Expiración de sesión (30 minutos)
- Rutas protegidas

## Usuarios
- Consumo de RandomUser API
- Caché para evitar llamadas innecesarias
- Filtros por género, edad y nacionalidad

## Detalle de usuario
- Vista individual /users/:id
- Historial de mensajes

## Mensajes
- Envío desde listado
- Historial por usuario

## Eliminación
- Modal de confirmación

## Exportación CSV
- Exportación de usuarios filtrados
- Proceso asíncrono simulado

---

# Estructura

src/
components/
context/
hooks/
pages/
services/

---

# Autor
Proyecto de práctica con React