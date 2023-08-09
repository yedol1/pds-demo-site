import Link from 'next/link';

import config from '../config.json';

export default function Header() {
  return (
    <header className="bg-primary-light">
      <div className="flex items-center justify-between max-w-6xl p-8 mx-auto">
        <Link href="/" className="font-medium text-2xl">
          <span className="flex gap-2">
            {config.logo.image && (
              <img
                src={config.logo.image}
                className="w-36 max-h-24 object-contain"
                alt={config.logo.text}
              />
            )}
          </span>
        </Link>
      </div>
      <div className="max-w-6xl p-8 mx-auto">
        <h1 className="text-5xl font-medium mb-4">{config.header.title}</h1>
        <p className="text-lg max-w-md">{config.header.description}</p>
      </div>
    </header>
  );
}
