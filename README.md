# Brittney Kernan's Take Home Assignment 

Thank you for the opportunity and for reviewing my code. 

## Tech Stack
* [Next.js](https://nextjs.org/) App Router
* [NextAuth.js](https://next-auth.js.org/) for simplicity
* [Drizzle](https://orm.drizzle.team) for Typescript support
* [TailwindCSS](https://tailwindcss.com/) for quick styles
* [SQLlite](https://turso.tech/libsql) - local file for simple session persistence 
* [AmplitudeJS](https://github.com/serversideup/amplitudejs) - minimle simple audio library
* [Express](https://expressjs.com/) - to keep data mutation out of the frontend
* [TypeSript](https://www.typescriptlang.org/) - for less bugs
* [ESlint](https://eslint.org/)

## Architecture

## Developing Locally

Copy `.env.example` into `.env` and follow instructions to generate an Auth Secret

```bash
# Generate one here: https://generate-secret.vercel.app/32 (only required for localhost)
AUTH_SECRET=<Your secret>
```

Then, install dependencies

```bash
pnpm i
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The server will be running at [http://localhost:3001](http://localhost:3001)

## Credits

[Starter Next + Auth Repo](https://github.com/vercel/nextjs-postgres-auth-starter)
[Audio Player CSS](https://codepen.io/serversideup/pen/Vwrgoea)
[Audio]()
[Audio Image](https://unsplash.com/photos/a-close-up-of-a-red-object-with-a-blurry-background-wEK9gAJPL8s)


