import { GoBell, GoSortDesc, GoTelescope } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <Button primary>
        <GoBell />
        Click Here
      </Button>
      <Button secondary>
        <GoSortDesc />
        Super Button
      </Button>
      <Button success outline rounded>
        Subscribe
      </Button>
      <Button warning rounded>
        <GoTelescope />I Do Nothing
      </Button>
      <Button danger outline>
        Me Too
      </Button>
    </div>
  );
}

export default ButtonPage;
