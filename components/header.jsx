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
  padding: 40px 0px;
`;
