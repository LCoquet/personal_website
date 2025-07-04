'use client';

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="underline" style={{color: "var(--highlight)"}}>Go back home</a>
    </div>
  );
}