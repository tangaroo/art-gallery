import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Zodiak Light";
  src: url("./Zodiak-Light.otf");
}

@font-face {
  font-family: "Switzer";
  src: url("./Switzer-Regular.otf");
}


:root {
--white: #F2F2F2;
--black: #111111;
--color-text: var(--black);
--color-background: var(--white);

--space: 4px;
--spacing-sm: calc(3*var(--space));
--spacing-md: calc(6*var(--space));
--spacing-lg: calc(10*var(--space));

--font-sm: calc(4*var(--space));
--font-md: calc(6*var(--space));

--accent: "Zodiak Light";
--primary: "Switzer";
}

body {
    margin: 0;
    overflow-x: hidden;
}

header {
    padding: 0px var(--spacing-md);
}

h1 {
    margin: 0px;
    font: 400 var(--font-md)/1.3 var(--accent), serif;
}

h2 {
    margin: var(--spacing-sm) 0px;
    font: 400 var(--font-sm)/1.3 var(--primary), sans-serif;
}

p {
    font: 400 var(--font-sm)/1.3 var(--accent), serif;
}

main {
    width: 100vw;
    height: 100vh;
    padding: 0px var(--spacing-md) 0px var(--spacing-md); 

    @media (min-width: 480px) {
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
    }
}

div {
    width: 100%;
    height: 100%;
    text-align: center;
}

img {
    display: block;
    max-height: 60%;
    margin: 0 auto;
    max-width: 100%;
}

button {
    background:none;
    border: none;
    margin: 0px var(--spacing-md) 0px var(--spacing-md);
    font: 400 var(--font-sm)/1.3 'Times', serif;
}

footer {
    padding: var(--spacing-md);
}
`;

export default GlobalStyle;
