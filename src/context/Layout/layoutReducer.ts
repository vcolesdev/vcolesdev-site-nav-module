enum BreakpointsEnum {
  SM = 768,
  MD = 1100,
  LG = 1400,
  FULL = 1920,
}

type Breakpoints = BreakpointsEnum | null;
type LayoutSize = "sm" | "md" | "lg" | "full" | null;

type UPDATE_LAYOUT_SM = "UPDATE_LAYOUT_SM";
type UPDATE_LAYOUT_MD = "UPDATE_LAYOUT_MD";
type UPDATE_LAYOUT_LG = "UPDATE_LAYOUT_LG";
type UPDATE_LAYOUT_FULL = "UPDATE_LAYOUT_FULL";

interface Layout {
  size: LayoutSize | null;
  breakpoint: Breakpoints | null;
  viewportWidth: number | null;
}

interface UpdateLayoutSM {
  type: UPDATE_LAYOUT_SM;
  payload: Layout;
}

interface UpdateLayoutMD {
  type: UPDATE_LAYOUT_MD;
  payload: Layout;
}

interface UpdateLayoutLG {
  type: UPDATE_LAYOUT_LG;
  payload: Layout;
}

interface UpdateLayoutFULL {
  type: UPDATE_LAYOUT_FULL;
  payload: Layout;
}

type LayoutActions =
  | UpdateLayoutSM
  | UpdateLayoutMD
  | UpdateLayoutLG
  | UpdateLayoutFULL;

const initialLayout: Layout = {
  size: null,
  breakpoint: null,
  viewportWidth: null,
};

const layoutReducer = (
  layout: Layout = initialLayout,
  action: LayoutActions
): Layout => {
  switch (action.type) {
    case "UPDATE_LAYOUT_SM":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_MD":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_LG":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    case "UPDATE_LAYOUT_FULL":
      return {
        ...layout,
        size: action.payload.size,
        breakpoint: action.payload.breakpoint,
      };
    default:
      return layout;
  }
};

export type { Breakpoints, BreakpointsEnum, Layout, LayoutActions, LayoutSize };
export { initialLayout, layoutReducer };
