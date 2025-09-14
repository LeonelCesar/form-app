import React from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  cta?: { label: string; href: string };
  variant?: "default" | "feature" | "compact";
};

export default function Card({ title, subtitle, imageUrl, children, cta, variant = "default" }: CardProps) {
  const base = "rounded-xl overflow-hidden shadow-sm border";
  const variantStyles =
    variant === "feature"
      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white"
      : variant === "compact"
      ? "bg-white"
      : "bg-white";

  return (
    <article className={`${base} ${variantStyles}`}>
      {imageUrl && (
        <div className="h-40 md:h-48 w-full overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}

        {children && <div className="mt-3 text-sm text-gray-700">{children}</div>}

        {cta && (
          <div className="mt-4">
            <a
              href={cta.href}
              className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
