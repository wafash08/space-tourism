import clsx from "clsx";

type Sizes = "xl" | "l" | "m" | "s" | "xs";
function getSize(size: Sizes) {
  switch (size) {
    case "xl": {
      return "font-bellefair text-[100px] md:text-[150px]";
    }
    case "l": {
      return "font-bellefair text-[56px] md:text-[80px] lg:text-[100px]";
    }
    case "m": {
      return "font-bellefair text-[56px]";
    }
    case "s": {
      return "font-bellefair text-[32px]";
    }
    case "xs": {
      return "font-barlow-condensed text-base md:text-xl lg:text-[28px] tracking-[2.7px] lg:tracking-[4.75px]";
    }
  }
}

type Colors = "white" | "gray";

type HeadingProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  size?: Sizes;
  color?: Colors;
} & React.ComponentPropsWithoutRef<C>;

const DEFAULT_ELEMENT = "h1";

export default function Heading<
  C extends React.ElementType = typeof DEFAULT_ELEMENT
>({ as, children, size = "m", color = "white", ...props }: HeadingProps<C>) {
  const Component = as ?? DEFAULT_ELEMENT;
  const classses = getSize(size);
  return (
    <Component
      className={clsx(
        "uppercase",
        color === "white" && "text-secondary",
        color === "gray" && "text-[#D0D6F9]",
        classses
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
