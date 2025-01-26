'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { register } from '@/actions/auth';
import Form from '@/components/Form';
import SubmitButton from '@/components/SubmitButton';

export default function Login() {
  const [errorMessage, formAction, isPending] = useActionState(
    register,
    undefined,
  );

  return (
    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-gray-200 bg-white bg-opacity-10  px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Register</h3>
      </div>
      <Form action={formAction}>
        <SubmitButton>Register</SubmitButton>
        <p className="text-center text-sm ">
          {'Already have an account? '}
          <Link href="/login" className="font-semibold text-gray-800">
            Log in
          </Link>
          {' instead.'}
        </p>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <p className="text-sm text-white">
              {errorMessage}.{' '}
              <Link href="/login" className="font-semibold text-gray-800">
                Log in
              </Link>
            </p>
          )}
        </div>
      </Form>
    </div>
  );
}
