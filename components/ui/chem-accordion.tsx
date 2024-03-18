"use client"

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const accordionItemVariants = cva(
  ["border-b"], // base styles
  {
    variants: {
      variant: {
        default: "border-gray-300 bg-white",
        chem: "border-[#da4453] bg-[#da4453]", // 'chem' as a variant option
      },
    },
  }
);

const accordionTriggerVariants = cva(
  ["font-medium transition-all hover:underline"], // base styles
  {
    variants: {
      variant: {
        default: "text-black",
        chem: "bg-[#da4453] text-white rounded-lg",
      },
    },
  }
);

const accordionContentVariants = cva(
  ["overflow-hidden text-sm transition-all"], // base styles
  {
    variants: {
      variant: {
        default: "text-black",
        chem: "bg-[#f4f4f4] border-none rounded-b-lg",
      },
    },
  }
);

// Types for props
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  variant?: keyof typeof accordionItemVariants['variants']['variant'];
}

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  variant?: keyof typeof accordionTriggerVariants['variants']['variant'];
}

interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  variant?: keyof typeof accordionContentVariants['variants']['variant'];
}

// Components with variant prop
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ variant, className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    />
  )
);

const AccordionTrigger = React.forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ variant, className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant }), className)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ variant, className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContentVariants({ variant }), className)}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
);

// Exporting components and variants
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants
};





