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
  className,
  ...rest
}: ButtonProps) {
  const classes = twMerge(
    classNames(
      className,
      "flex text-sm text-center px-3 py-1.5 border border-solid font-medium m-2",
      {
        "border-blue-500 bg-blue-500 text-white hover:bg-blue-600":
          primary && !outline,
        "border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white":
          primary && outline,

        "border-gray-700 bg-gray-800 text-white hover:bg-gray-900":
          secondary && !outline,
        "border-gray-700 text-gray-800 bg-transparent hover:bg-gray-700 hover:text-white":
          secondary && outline,

        "border-green-500 bg-green-500 text-white hover:bg-green-600":
          success && !outline,
        "border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white":
          success && outline,

        "border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600":
          warning && !outline,
        "border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white":
          warning && outline,

        "border-red-500 bg-red-500 text-white hover:bg-red-600":
          danger && !outline,
        "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white":
          danger && outline,

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
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
