"use client"

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// Define a type for the Accordion props, extending the Radix Accordion props
interface AccordionProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {
  variant?: string;
}
// Extend the Accordion component to accept and handle the variant prop
const Accordion: React.FC<AccordionProps> = ({ children, variant, ...props }) => (
  <AccordionPrimitive.Root {...props}>
    {React.Children.map(children, child =>
      React.isValidElement(child) ? React.cloneElement(child, { variant }) : child
    )}
  </AccordionPrimitive.Root>
);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { variant?: string }
>(({ className, variant, ...props }, ref) => {
  const variantClasses = variant === 'chem' ? 'border-[#da4453] bg-[#da4453] border rounded-lg my-1' : '';
  return (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b", variantClasses, className)} {...props} />
  );
});

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { variant?: string }
>(({ className, children, variant, ...props }, ref) => {
  const variantClasses = variant === 'chem' ? 'bg-[#da4453] text-white rounded-lg' : '';
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline", variantClasses, className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { variant?: string }
>(({ className, children, variant, ...props }, ref) => {
  const variantClasses = variant === 'chem' ? 'bg-[#f4f4f4] border-none rounded-b-lg' : '';
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn("overflow-hidden text-sm transition-all", variantClasses, className)}
      {...props}
    >
      <div className="p-4">{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

