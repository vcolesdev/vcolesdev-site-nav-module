import type { NavSlotProps } from "@/components/Nav/types";

/**
 * A slot for the navigation elements.
 * @param children
 * @component NavSlot
 */
export function NavSlot({ children }: NavSlotProps) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "end",
      }}
    >
      {children}
    </div>
  );
}
