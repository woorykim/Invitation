import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px 0;
  padding: 1.6rem;
  grid-template-columns: repeat(1, 1fr);
  background-color: cornflowerblue;
`;

export const Section = styled.section`
  width: 100%;
  height: auto;
  opacity: 0;
  margin-top: 0px;
  margin-bottom: 16px;
  transition: opacity 0.2s ease, margin-top 0.4s ease-in-out;
  padding: 10px 4px;

  background-color: var(--white-color-100);
  border-radius: 15px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;
