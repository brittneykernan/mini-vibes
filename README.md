# Brittney Kernan's Take Home Assignment 

Thank you for the opportunity and for reviewing my code. 

## Tech Stack
* [Next.js](https://nextjs.org/) App Router for faster UI
* [NextAuth.js](https://next-auth.js.org/) for simplicity
* [Drizzle](https://orm.drizzle.team) for Typescript ORM
* [TailwindCSS](https://tailwindcss.com/) for quick styles
* [SQLlite](https://turso.tech/libsql) local file for simple session persistence 
* [AmplitudeJS](https://github.com/serversideup/amplitudejs) minimle simple audio library
* [Express](https://expressjs.com/) to keep data mutation out of the frontend
* [TypeSript](https://www.typescriptlang.org/) for less bugs
* [ESlint](https://eslint.org/) but of course

## Architecture

## Developing Locally

Copy `web/.env.example` into `web/.env` and follow instructions to generate an Auth Secret

```bash
# Generate one here: https://generate-secret.vercel.app/32
AUTH_SECRET=<Your secret>
```

Then, install dependencies for web and backend servers

```bash
pnpm i
```

Then, run development servers concurrently:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to use the app.

The backend server will be running at [http://localhost:3001](http://localhost:3001)

### Credits

Thanks to these for the jump start

* [Starter Next + Auth Repo](https://github.com/vercel/nextjs-postgres-auth-starter)
* [Audio and Player CSS](https://codepen.io/serversideup/pen/Vwrgoea)
* [Audio Image](https://unsplash.com/photos/a-close-up-of-a-red-object-with-a-blurry-background-wEK9gAJPL8s)
* [Eslint config](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template/blob/master/package.json)

