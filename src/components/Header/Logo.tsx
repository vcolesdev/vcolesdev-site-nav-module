import type { LogoProps } from "@/components/Header/types";

/**
 * Custom logo for testing purposes.
 * @param id
 */
export function Logo({ id }: LogoProps) {
  return (
    <div id={id} className="site-logo">
      <a href="#">
        <span className="fullname">Vanessa Coles</span>
        <span className="truncated">Vanessa C.</span>
      </a>
    </div>
  );
}
