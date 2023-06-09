import styled from "styled-components";
import { LinkMain } from "./HomePage.styled";

const TitleTweet = styled.h2`
  text-align: center;
  font-size: 24px;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const BackLink = styled(LinkMain)`
  margin: 0 0 20px 0;
`;

const ShowMoreButton = styled(LinkMain)`
  margin-top: 40px;
`;
export { TitleTweet, BackLink, ShowMoreButton };
