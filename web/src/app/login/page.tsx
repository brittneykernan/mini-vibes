"use client"

import Link from 'next/link';
import { useActionState } from 'react';

import { Form } from '@/components/Form';
import { SubmitButton } from '@/components/SubmitButton';
import { authenticate } from '@/actions/auth';

export default function Login() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  
  return (
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl  shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white bg-opacity-10 px-4 py-6 pt-8 pb-0 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Log In</h3>
        </div>
        <Form
          action={formAction}
        >
        <SubmitButton>Log in</SubmitButton>
        
          <p className="text-center text-sm mt-10">
            {"Don't have an account?"}
            </p>
            <Link href="/register" className="text-center py-3 px-4 bg-palette-secondary hover:bg-palette-dark text-white text-base font-semibold rounded-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary block"
          >
              Register
            </Link>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <p className="text-sm text-white">{errorMessage}</p>
            )}
          </div>
        </Form>
      </div>
  );
}
