# Retro Desktop Portfolio & CMS 🖥️💾

A unique portfolio website featuring a retro desktop interface, interactive windows, and a built-in CMS for managing projects.

![Retro Portfolio](public/profile.png)

## 🇺🇸 English Version

### 1. Prerequisites
- Node.js (v18 or later recommended)
- NSW/npm installed

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/stuck-w-yu/portfolio-2026.git
cd portfolio-2026
npm install
```

### 3. Database Setup (Prisma & SQLite)
This project uses SQLite. You need to generate the Prisma client and push the database schema:

```bash
# Generate Prisma Client
npx prisma generate

# Create/Update Database
npx prisma db push
```
*Note: If you encounter errors, make sure to stop the running server specific to Windows development environments.*

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 5. Admin Panel & CMS
To manage your projects, access the Admin Panel:
- **URL**: [http://localhost:3000/login](http://localhost:3000/login)
- **Username**: `stuckwyu`
- **Password**: `@portfoliowahyu28`

---

## 🇮🇩 Versi Bahasa Indonesia

### 1. Prasyarat
- Node.js (v18 atau lebih baru disarankan)
- NSW/npm sudah terinstall

### 2. Instalasi
Clone repository dan install dependencies:
```bash
git clone https://github.com/stuck-w-yu/portfolio-2026.git
cd portfolio-2026
npm install
```

### 3. Setup Database (Prisma & SQLite)
Project ini menggunakan SQLite. Anda perlu men-generate Prisma client dan melakukan push schema database:

```bash
# Generate Prisma Client
npx prisma generate

# Membuat/Update Database
npx prisma db push
```
*Catatan: Jika terjadi error, pastikan untuk mematikan server yang sedang berjalan (Ctrl+C), terutama di Windows.*

### 4. Menjalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

### 5. Panel Admin & CMS
Untuk mengelola project (menambah/menghapus), akses Panel Admin:
- **URL**: [http://localhost:3000/login](http://localhost:3000/login)
- **Username**: `stuckwyu`
- **Password**: `@portfoliowahyu28`

## 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS & Retro Custom CSS
- **Animation**: Framer Motion
- **Database**: SQLite
- **ORM**: Prisma
- **Auth**: Custom Cookie-based Auth

## 📝 Features
- **Retro UI**: Windows 95/98 inspired design
- **Draggable Windows**: Interactive UI components
- **Dynamic Content**: Projects loaded from local database
- **Secure Admin**: Protected route for content management
- **Responsive**: Adapts to mobile devices
