import { TitleContainer } from "./title-styles";
function Title({ text }) {
  return (
    <TitleContainer>
      <span>{text}</span>
    </TitleContainer>
  );
}

export default Title;
