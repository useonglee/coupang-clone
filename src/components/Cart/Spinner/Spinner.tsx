import { BeatLoader, ClipLoader } from "react-spinners";
import theme from "@styles/theme";
import { SpinnerContainer } from "./Spinner.style";

const Beat = () => {
  return (
    <SpinnerContainer>
      <BeatLoader color={theme.color.primary} />
    </SpinnerContainer>
  );
};

const Clip = () => {
  return (
    <SpinnerContainer>
      <ClipLoader color={theme.color.primary} />
    </SpinnerContainer>
  );
};

export const Spinner = {
  Beat,
  Clip,
};

export default Spinner;
