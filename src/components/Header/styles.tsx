import styled from "styled-components";

export const Container = styled.header`
  display: flex !important;
  flex-direction: row;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  /* padding-block: 1.5rem; */
  padding-bottom: 1rem;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerItems = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
