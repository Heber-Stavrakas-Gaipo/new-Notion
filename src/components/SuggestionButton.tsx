import { ComponentProps, ReactNode } from "react";

export interface SuggestionButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function SuggestionButton(props: SuggestionButtonProps) {
  return (
    <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600" {...props} />
  );
}