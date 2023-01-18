import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import PhotoGallery from './components/Photos';


const App = () => {
  const [state, setState] = useState({
  text: 'Хей привет, Меня зовут Cергей и это мой первый проект-портфолио на React',
  textNumber: 1,
  isChanging: false
  });

  const handleClick = () => {
    setState(prevState => ({
      ...prevState,
      isChanging: true
    }));
    setTimeout(() => {
      setState(prevState => {
        let nextTextNumber;
        let nextText;
        if (prevState.textNumber === 1) {
          nextTextNumber = 2;
          nextText = "У меня мало опыта, но я горю желанием посвятить себя профессии фронтенд-разработчика";
        } else if (prevState.textNumber === 2) {
          nextTextNumber = 3;
          nextText = "В проекте  я собрал всё, чему смог научиться";
        } else {
          nextTextNumber = 1;
          nextText = "Хей привет, Меня зовут Cергей и это мой первый проект-портфолио на React";
        }
        return {
          textNumber: nextTextNumber,
          text: nextText,
          isChanging: false
        };
      });
    }, 800);
  };
  
  let textClass = "text";
  if (state.isChanging) {
    textClass += " changing";
  }
  
  return (
    <div>
      <Header />
      <h1 id='Priv' className={textClass} onClick={handleClick}>{state.text}</h1>
      <p className='help'>Кликай по буквам чтобы продолжить :)</p>
      <div>
        <PhotoGallery />
        <aside><About /></aside>
      </div>
    </div>
  );
  }
export default App