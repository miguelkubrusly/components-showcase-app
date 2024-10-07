import { GoBell, GoSortDesc, GoTelescope } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <Button primary>
        <GoBell />
        Primary
      </Button>
      <Button secondary>
        <GoSortDesc />
        Secondary
      </Button>
      <Button success outline rounded>
        Success, Outline and Rounded
      </Button>
      <Button warning rounded>
        <GoTelescope />
        Warning Rounded
      </Button>
      <Button danger outline>
        Danger Outline
      </Button>
    </div>
  );
}

export default ButtonPage;
