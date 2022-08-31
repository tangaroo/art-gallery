import { createGlobalStyle } from "styled-components";

//TODO: Focus states on mobile for buttons

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
    min-height: 100vh;
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
    width: 100%;
    text-align: center;
    max-width: 800px;
    display: grid;
    margin: auto;
    align-content: center;
    min-height: 100vh;
  }

    @media (min-width: 480px) {
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
    }
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
