'use server';

import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';

import { signIn } from '@/libs/auth';
import { createUser, getUser } from '@/libs/db';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      redirectTo: '/protected',
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const user = await getUser(email);

  if (user.length > 0) {
    return 'User already exists'; // TODO: Handle errors with useFormStatus
  }
  await createUser(email, password);
  redirect('/login');
}
