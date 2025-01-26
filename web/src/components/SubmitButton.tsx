'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      className="bg-palette-primary hover:bg-palette-dark focus-visible:ring-palette-primary block rounded-lg border border-transparent px-4 py-3 text-base 
      font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {children}
      {pending && (
        <svg
          className="ml-2 inline-block size-4 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </button>
  );
}
