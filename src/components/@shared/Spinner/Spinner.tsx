import { BeatLoader } from "react-spinners";
import theme from "@styles/theme";
import { SpinnerContainer } from "./Spinner.style";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <BeatLoader color={theme.color.primary} />
    </SpinnerContainer>
  );
};

export default Spinner;
