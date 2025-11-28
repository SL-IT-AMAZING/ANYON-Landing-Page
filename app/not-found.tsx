import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-400 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
