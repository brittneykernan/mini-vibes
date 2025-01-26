export default function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 bg-opacity-10 px-4 pb-8 sm:px-16"
    >
      <div>
        <label htmlFor="email" className="block">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder=""
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-none bg-white bg-opacity-10 px-3 py-2 text-base shadow-sm placeholder:text-black focus:outline-purple-800 focus:ring-purple-800"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="focus:outline-hidden focus:ring-none mt-1 block w-full appearance-none rounded-md border border-none bg-white bg-opacity-10 px-3 py-2 text-base shadow-sm placeholder:text-black focus:outline-purple-800"
        />
      </div>
      {children}
    </form>
  );
}
