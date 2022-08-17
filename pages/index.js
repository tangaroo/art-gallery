/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";

import content from "../data.json";
import GlobalStyle from "../styles/styles.js";

import Header from "../components/header";

export default function App() {
  const [index, setIndex] = useState(0);
  const gallerySlides = content.length;

  const handleNext = () => {
    setIndex(gallerySlides === index + 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    let prevIndex = index - 1;
    if (index === 0) {
      prevIndex = gallerySlides - 1;
    }
    setIndex(prevIndex);
  };

  const handleRandom = () => {
    setIndex(Math.floor(Math.random() * gallerySlides));
  };

  const keyDownHandler = (event) => {
    event.preventDefault();
    console.log(event.code);
    switch (event.code) {
      case "ArrowRight":
        handleNext();
        break;
      case "ArrowLeft":
        handlePrev();
        break;
      case "Space":
        handleRandom();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <main tabIndex={0} onKeyDown={keyDownHandler}>
        <Header />
        <p>{content[index].number}</p>
        <img src={content[index].img} />
        <h2>
          {content[index].title} ({content[index].date})
        </h2>
        <footer>
          <button onClick={handlePrev}>←</button>
          <button onClick={handleRandom}>⚅</button>
          <button onClick={handleNext}>→</button>
        </footer>
      </main>
    </>
  );
}
