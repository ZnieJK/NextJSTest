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
---

## 📁 Step 1: Navigate to the Project

```bash
cd my-first-nextjs
```

## 📦 Step 2: Install Dependencies

```bash
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

<img width="1440" alt="Screenshot 2568-06-08 at 10 59 35" src="https://github.com/user-attachments/assets/b163d3e4-2e12-424a-bfe5-4aec5cedf2a3" />

<img width="1440" alt="Screenshot 2568-06-08 at 10 59 30" src="https://github.com/user-attachments/assets/0f78c58d-02e4-4717-8ac4-b9f713cff1a6" />

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

This project is for practice and to complete the assignment from 7-solutions/frontend-assignment.
