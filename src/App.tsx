import React, { FC, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./components/button/Button";
import Box from "./components/box/Box";
import Header from "./components/header/Header";
import ButtonStyledSystem from "./components/button-styled-system/ButtonStyledSystem";
import Modal from "./components/modal/Modal";

const App: FC = () => {
  const [showModal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <AppStyling>
      <Header>In the future component examples will be here!</Header>
      <StyledButton primary="primary" onClick={() => console.log("clicked")}>
        Styled button
      </StyledButton>
      <Box
        color="white"
        bg="blue"
        m={2}
        p={2}
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        borderRadius={4}
      >
        hello
      </Box>
      <ButtonStyledSystem onClick={closeModal} variant="primary">
        Primary
      </ButtonStyledSystem>
      {!showModal && (
        <Modal onClick={openModal}>
          <HeadingStyling>Modal heading</HeadingStyling>
          <ParStyling>This is modal content</ParStyling>
          <ButtonStyling onClick={closeModal}>X</ButtonStyling>
        </Modal>
      )}
    </AppStyling>
  );
};

export default App;

export const AppStyling = styled.div``;

export const ButtonStyling = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3em;
  height: 3em;
  margin: 4em 0em 1em 40em;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.blues[3]};
  cursor: pointer;
  background-color: ${props => props.theme.colors.blues[4]};
  &:hover {
    background-color: ${props => props.theme.colors.blues[3]};
  }
`;

export const HeadingStyling = styled.h1`
  margin-left: 5em;
`;

export const ParStyling = styled.p`
  margin-left: 12em;
`;
