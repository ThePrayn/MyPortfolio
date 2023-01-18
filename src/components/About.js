import React, { useState } from 'react'


const About = () => {
  const [text, setText] = useState('Мне 24 года я из города Красноярск и я уже на протяжении 6ти месяцев самостоятельно изучаю фронтенд разработку.');
  const [textNumber, setTextNumber] = useState(1);
  const [isChanging, setIsChanging] = useState(false);

  const handleClick = () => {
      setIsChanging(true);
      setTimeout(() => {
          if(textNumber === 1){
              setTextNumber(2);
              setText("Началось всё с азов HTML+CSS. Получить хорошие знания в этой области мне помогла платформа HTMLAcademy и их качественные практические тренажёры. Там же я начал изучасть JavaScript.");
          }else if (textNumber === 2){
              setTextNumber(3);
              setText("Сегодня я погружён в изучение библиотеки React, так как считаю её лучшей и самой актуальной на сегодняшний день. Весь этот проект построен на базе React");
          }else{
              setTextNumber(1);
              setText("Свободное время я люблю уделять музыке (игре на гитаре, написание треков), спорту, видеоиграм,фильмам и спорт туризму");
          }
          setIsChanging(false);
      }, 800);
  }

  let textClass = "text";
  if (isChanging) {
      textClass += " changing";
  }

  return (
      <div>
          <h1 id='About' className={textClass} onClick={handleClick}>{text}</h1>
      </div>
  );
}
export default About