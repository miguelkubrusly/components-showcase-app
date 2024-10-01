function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
}: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
