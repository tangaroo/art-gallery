import React from "react";
import "../styles/styles.js";
import styled from "styled-components";

const HeaderComponent = () => (
  <Header>
    <h1>John McCulloch</h1>
  </Header>
);

export default HeaderComponent;

const Header = styled.header`
  padding: var(--spacing-lg) 0px;
`;
