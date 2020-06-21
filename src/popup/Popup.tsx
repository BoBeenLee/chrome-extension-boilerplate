import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "src/styles/colors";

const PopupContainer = styled.div`
  align-items: center;
  background-color: ${colors.backgroundColor};
  border: 2px solid ${colors.primaryColor};
  color: ${colors.primaryColor};
  display: flex;
  font-size: 20px;
  height: 75px;
  justify-content: center;
  width: 150px;
`;

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return <PopupContainer>Hello, world!</PopupContainer>;
}
