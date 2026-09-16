"use client";

import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

export default function SafeImage({ src, fallback, alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return fallback ? <>{fallback}</> : null;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
