import React from "react";

interface NavSlot {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * A slot for the navigation elements.
 * @param children
 * @component NavSlot
 */
function NavSlot({ children }: NavSlot) {
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

export default NavSlot;
