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
    classNames(rest.className, "flex text-center px-3 py-1.5 border m-2", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-transparent": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
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
