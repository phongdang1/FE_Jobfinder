import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, placeholder, ...props }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        "flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
