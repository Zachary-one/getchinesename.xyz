import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Container = ({
  children,
  id,
  className,
}: Readonly<ContainerProps>) => {
  return (
    <div
      id={id}
      className={cn(
        "w-full px-8 py-10 lg:px-4 max-w-3xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
