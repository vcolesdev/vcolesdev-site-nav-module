import { TablerIconProps } from "@/types";

/**
 * IconChevronsUp
 * @component IconChevronsUp
 * @param props
 */
export function IconChevronsUp(props: TablerIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox={`0 0 ${props.size || 24} ${props.size || 24}`}
      fill="none"
      stroke={props.color || "currentColor"}
      strokeWidth={props.stroke || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 11l5 -5l5 5" />
      <path d="M7 17l5 -5l5 5" />
    </svg>
  );
}
