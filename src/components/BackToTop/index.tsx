import { forwardRef, ForwardedRef } from "react";
import { IconChevronsUp } from "@/components/Icons/IconChevronsUp";

interface BackToTop {
  id: string;
  isVisible: boolean;
  onClick?: () => void;
}

/**
 * Scroll back to the top of the page on click.
 * @param props
 * @constructor
 */
export const BackToTop = forwardRef(function BackToTop(
  props: BackToTop,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="back-to-top" id={props.id} ref={ref}>
      <button id="btnToTop" onClick={props.onClick}>
        <IconChevronsUp color="white" stroke={1.5} />
        <span className="visually-hidden">Scroll back to top</span>
      </button>
    </div>
  );
});
