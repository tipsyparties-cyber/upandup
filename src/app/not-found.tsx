import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-sans text-sm font-medium uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-light md:text-6xl">Page not found</h1>
        <p className="mt-6 text-mid-grey">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-10"><Button href="/">Back to home</Button></div>
      </div>
    </div>
  );
}
