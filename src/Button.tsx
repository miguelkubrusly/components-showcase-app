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
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export default Button;
