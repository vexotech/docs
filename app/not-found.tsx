import Link from 'next/link';
import { ChartPieIcon } from '@heroicons/react/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-700">
          <ChartPieIcon className="w-4 text-indigo-500" />
          <span><b>Vexo</b> Analytics</span>
        </Link>
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-32">
        <p className="text-base font-medium text-indigo-500">404</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
