import { twMerge } from "tailwind-merge";
import classNames from "classnames";

function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
  ...rest
}: ButtonProps) {
  const classes: string = twMerge(
    classNames(
      rest.className,
      "flex text-sm text-center px-3 py-1.5 border border-solid font-medium m-2",
      {
        "border-blue-500 border bg-blue-500 text-white": primary,
        "border-gray-800 bg-gray-800 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-500 bg-yellow-500 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "border-2 bg-transparent": outline,
        "text-blue-600": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-600": outline && success,
        "text-yellow-600": outline && warning,
        "text-red-600": outline && danger,
      }
    )
  );

  return (
    <div>
      <button {...rest} className={classes}>
        {children}
      </button>
    </div>
  );
}

export default Button;
