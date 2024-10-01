declare global {
  type PrimaryPurpose = {
    primary?: boolean,
    secondary?: never,
    success?: never,
    warning?: never,
    danger?: never,
  }
  type SecondaryPurpose = {
    primary?: never,
    secondary?: boolean,
    success?: never,
    warning?: never,
    danger?: never,
  }
  type SuccessPurpose = {
    primary?: never,
    secondary?: never,
    success?: boolean,
    warning?: never,
    danger?: never,
  }
  type WarningPurpose = {
    primary?: never,
    secondary?: never,
    success?: never,
    warning?: boolean,
    danger?: never,
  }
  type DangerPurpose = {
    primary?: never,
    secondary?: never,
    success?: never,
    warning?: never,
    danger?: boolean,
  }


  type ButtonProps = (PrimaryPurpose | SecondaryPurpose | SuccessPurpose | WarningPurpose | DangerPurpose) & {
    outline?: boolean,
    rounded?: boolean,
    children?: boolean,
  }


}

export { }