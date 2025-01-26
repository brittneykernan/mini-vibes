'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { authenticate } from '@/actions/auth';
import Form from '@/components/Form';
import SubmitButton from '@/components/SubmitButton';

export default function Login() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl  shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 bg-white bg-opacity-10 px-4 py-6 pb-0 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Log In</h3>
      </div>
      <Form action={formAction}>
        <SubmitButton>Log in</SubmitButton>

        <p className="mt-10 text-center text-sm">{"Don't have an account?"}</p>
        <Link
          href="/register"
          className="bg-palette-secondary hover:bg-palette-dark focus-visible:ring-palette-primary block rounded-lg border border-transparent px-4 py-3 text-center text-base 
          font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Register
        </Link>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && <p className="text-sm text-white">{errorMessage}</p>}
        </div>
      </Form>
    </div>
  );
}
