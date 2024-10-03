import { TablerIconProps } from "@/types";

export function IconSquareRoundedX(props: TablerIconProps) {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10l4 4m0 -4l-4 4" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
    </svg>
  );
}
