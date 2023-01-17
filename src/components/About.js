import React from 'react'


class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: 'Мне 24 года я из города Красноярск и я уже на протяжении 6ти месяцев самостоятельно изучаю фронтенд разработку.',
          textNumber: 1,
          isChanging: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState({
          isChanging: true
        });
        setTimeout(() => {
          this.setState(state => {
            let nextTextNumber;
            let nextText;
            if(state.textNumber === 1){
               nextTextNumber = 2;
               nextText = "Началось всё с азов HTML+CSS. Получить хорошие знания в этой области мне помогла платформа HTMLAcademy и их качественные практические тренажёры. Там же я начал изучасть JavaScript.";
            }else if (state.textNumber === 2){
               nextTextNumber = 3;
               nextText = "Сегодня я погружён в изучение библиотеки React, так как считаю её лучшей и самой актуальной на сегодняшний день. Весь этот проект построен на базе React";
            }else{
              nextTextNumber = 1;
              nextText = "Свободное время я люблю уделять музыке (игре на гитаре, написание треков), спорту, видеоиграм,фильмам и спорт туризму";
            }
            return {
              textNumber: nextTextNumber,
              text: nextText,
              isChanging: false
            };
          });
        }, 800);
      }
    
      render() {
        let textClass = "text";
      if (this.state.isChanging) {
      textClass += " changing";
    }
        return (
          <div>
            <h1 id='About' className={textClass} onClick={this.handleClick}>{this.state.text}</h1>

          </div>
        );
      }
    }

export default About