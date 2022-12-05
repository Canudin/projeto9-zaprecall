import styled from "styled-components";

export default function AnswerIcon(props) {
  const images = props.images;
  const answer = props.answer;
  return <IconImg data-test={images[answer].datatest} src={images[answer].icon} />;
}

const IconImg = styled.img`
  padding: 0 2px;
`;
