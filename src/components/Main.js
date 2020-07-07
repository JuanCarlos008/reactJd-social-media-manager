import React, {useState, useEffect} from 'react';
import Header from './header/Header';
import TopCards from './top-cards/TopCards';
import OverView from './overview/OverView';
import Switch from './header/Switch';




function Main(){
    const [darkMode, setDarkMode] = useState(false);
    const [checked, setChecked] = useState(false);
    const mainClass = darkMode ? 'dark-mode-theme' : 'light-mode-theme';
     
    function changeMedia(mq){
      setDarkMode(mq.matches)
      setChecked(mq.matches)
    }
  
    useEffect(() =>{
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addListener(changeMedia)
      setDarkMode(mq.matches)
      setChecked(mq.matches)
   
    }, [])

    return(
        <main className={mainClass}>
            <Header>
                <Switch checked={checked} setChecked={setChecked} setDarkMode={setDarkMode}/>
            </Header>
            <TopCards />
            <OverView />
        </main>
    )
}

export default Main;