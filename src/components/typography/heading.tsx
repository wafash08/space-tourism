import clsx from "clsx";

type Sizes = "xl" | "l" | "m" | "s" | "xs";
function getSize(size: Sizes) {
  switch (size) {
    case "xl": {
      return "font-bellefair text-[150px]";
    }
    case "l": {
      return "font-bellefair text-[100px]";
    }
    case "m": {
      return "font-bellefair text-[56px]";
    }
    case "s": {
      return "font-bellefair text-[32px]";
    }
    case "xs": {
      return "font-barlow-condensed text-[32px] tracking-[4.75px]";
    }
  }
}

type HeadingProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
  size?: Sizes;
} & React.ComponentPropsWithoutRef<C>;

const DEFAULT_ELEMENT = "h1";

export default function Heading<
  C extends React.ElementType = typeof DEFAULT_ELEMENT
>({ as, children, size = "m", ...props }: HeadingProps<C>) {
  const Component = as ?? DEFAULT_ELEMENT;
  const classses = getSize(size);
  return (
    <Component className={clsx("text-secondary", classses)} {...props}>
      {children}
    </Component>
  );
}
