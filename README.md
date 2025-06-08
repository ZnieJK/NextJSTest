# NextJSTest

This is a project for practicing front-end development with **Next.js**, using **Docker** and **Prisma** for backend support.

---

## 💻 Prerequisites (for a fresh setup)

Make sure the following tools are installed on your system:

### 1. [Docker](https://www.docker.com/)
- Required for containerized database and backend services.
- After installation, make sure Docker Desktop is **running**.

### 2. [Node.js](https://nodejs.org/) (Recommended: 18+)
- Used to run frontend development tools.
- After install, confirm with:
  ```bash
  node -v
  npm -v
  ```

### 3. [pnpm](https://pnpm.io/) (Optional but recommended)
- Faster alternative to npm/yarn.
- Install with:
  ```bash
  npm install -g pnpm
  ```

---

## 📁 Step 1: Navigate to the Project

```bash
cd my-first-nextjs
```

## 📦 Step 2: Install Dependencies

```bash
pnpm install
# or
npm install
```

---

## 🐳 Step 3: Start Docker Containers

Make sure Docker is running, then:

```bash
docker compose up -d
```

---

## 🌱 Step 4: Seed the Database


```bash
npx prisma db seed
```

This command initializes the database with seed data.

---

## 🌐 Step 5: Run the App

Start the Next.js app (in dev mode):

```bash
pnpm dev
# or
npm run dev
```

Then open your browser:

```
http://localhost:3000
```

---

## 📁 Project Structure

This is a high level detail project structure 

```
my-first-nextjs/
├── components/
├── app/
│   ├── Question_1/
│   └── Question_2/
│   └── page.tsx
├── prisma/
│   └── seed.ts
├── docker-compose.yml
└── README.md
```

---

## 🔗 Pages

- [Question 1 - Auto Delete Todo List](http://localhost:3000/Question_1)
- [Question 2 - Create Data from API](http://localhost:3000/Question_2)

---

## 🛠 Notes

- If you change Prisma schema, run:
  ```bash
  npx prisma migrate dev
  ```

- To reset the database:
  ```bash
  npx prisma migrate reset
  ```

---

Enjoy coding! 🚀
