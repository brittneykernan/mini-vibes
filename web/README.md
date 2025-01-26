# Next.js + SQLite Auth Starter

This is a [Next.js](https://nextjs.org/) starter kit that uses [NextAuth.js](https://next-auth.js.org/) for simple email + password login, [Drizzle](https://orm.drizzle.team) as the ORM, and a [Neon Postgres](https://vercel.com/postgres) database to persist the data.

## Developing Locally

Copy `.env.example` into `.env` and follow instructions to generate an Auth Secret

```bash
# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
AUTH_SECRET=<Your secret>
```


Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

Starter Next + Auth Repo: https://github.com/vercel/nextjs-postgres-auth-starter
Audio Player CSS: https://codepen.io/serversideup/pen/Vwrgoea
Audio Image: https://unsplash.com/photos/a-close-up-of-a-red-object-with-a-blurry-background-wEK9gAJPL8s


