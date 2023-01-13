import React from 'react'
import Header from './components/Header'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: 'Хей привет, Меня зовут Cергей и это мой первый проект-портфолио на React',
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
               nextText = "У меня мало опыта, но я горю желанием посвятить себя профессии фронтенд-разработчика";
            }else if (state.textNumber === 2){
               nextTextNumber = 3;
               nextText = "В проекте  я собрал всё, чему смог научиться";
            }else{
              nextTextNumber = 1;
              nextText = "Хей привет, Меня зовут Cергей и это мой первый проект-портфолио на React";
            }
            return {
              textNumber: nextTextNumber,
              text: nextText,
              isChanging: false
            };
          });
        }, 1000);
      }
    
      render() {
        let textClass = "text";
      if (this.state.isChanging) {
      textClass += " changing";
    }
        return (
          <div>
            <Header/>
            <h1 id='Priv' className={textClass} onClick={this.handleClick}>{this.state.text}</h1>
          <p className='help'>Кликай по буквам чтобы продолжить :)</p>
          </div>
        );
      }
    }
    

export default App