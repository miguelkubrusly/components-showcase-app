import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ children, to }: LinkProps) {
  const navigate = useNavigation()?.navigate;

  const classes = classNames("text-blue-500");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate!(to);
  };

  return (
    <div>
      <a className={classes} href={to} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
}

export default Link;
