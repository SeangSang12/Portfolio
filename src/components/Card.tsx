import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-gray-200 dark:border-white/10 rounded-[10px] bg-white dark:bg-white/5 shadow-sm transition-all hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
