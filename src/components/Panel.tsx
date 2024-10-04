import classNames from "classnames";

function Panel({ children, className, ...rest }: PanelProps) {
  const constantClasses: string = "border rounded p-2 shadow bg-white w-full";

  const finalClassName: string = className
    ? classNames(constantClasses, className)
    : constantClasses;

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}

export default Panel;
