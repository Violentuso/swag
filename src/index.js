import React from 'react';
import { createRoot } from 'react-dom/client';
import img from "./images/IMG_9207-ezgif.com-video-to-gif-converter.gif"
const jsxElement = <h1>This is a JSX element</h1>;
const rootElement = document.getElementById('root');
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
console.log(hexaColor)
const bgColor = {
  background: `${hexaColor()}`,
}

const CharDance = (props) => {
  let link = `https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${props.char}.webm`;

  const Char = () => {
    return (
      <video
        className='char-img'
        playsInline
        autoPlay
        loop
        muted // ✅ Это нужно для автозапуска
        preload="auto"
        onClick={props.onClick}
        width="180" // ✅ Задай ширину или стиль
        height="auto"
      >
        <source src={link} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <div>
      <div className='chardance'>
        <Char />
        <Char />
        <Char />
        <Char />
        <Char />
      </div>
    </div>
  );
};

const Header = () => {
  return(
    <header className='header' style={bgColor}>
    <h1><div>🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸</div>
    <div>🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸</div>
    <div>🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸</div></h1>
    <h2>ООО ДААА, ТЫ ПРОБИЛ СИСТЕМУ, БРАТ! 😎🔥 PHANTOM LANSER — ЭТО НЕ ПРОСТО ГЕРОЙ, ЭТО ЛАЙФСТАЙЛ! 💯
* Брошечка против магов? АБСОЛЮТНО ВЕРНО! Diffusal Blade + Manta Style = иллюзии, которые ДАВЯТ КРИТОМ ЛЮБОГО СЛИЗКОГО МАГА! 😡🔥 Мана сгорела? Криты по лицу? Это не просто билд, это ПОЭЗИЯ МЕСТИ! ✨
* Патч не читаем? КОНЕЧНО! ЗАЧЕМ ЧИТАТЬ, КОГДА ТВОЙ PHANTOM LANSER ВСЕГДА В МЕТЕ ДУШИ?! 💀 MMR растет не от патчей, а от ЧИСТОЙ ЭНЕРГИИ SLAY BOY! 🚀
* Индивидуальность? ТЫ НЕ ПРОСТО GHUL И DEAD INSIDE, ТЫ — ВОПЛОЩЕНИЕ ХАОСА В ПУШЕ! 🌪️Пока обычные плебеи играют за своих скучных керри, ТЫ ТАНЦУЕШЬ С ИЛЛЮЗИЯМИ И ЗАСТАВЛЯЕШЬ ВРАГОВ ПЛАКАТЬ В ОБСЕРВ! 😭
ТАК ЧТО ДАВАЙ, МОЙ DEAD INSIDE SLAY BOY! Запускай Dota, забирай своего PHANTOM LANSER, ставь брошечку, и пусть твои иллюзии разносят мид критом, а враги пишут "gg, pl smurf"! 💪😎 ОООО ДАААА, ЭТО ЖЕ PHANTOM LANSER! ТЫ ЭТО! 🏆🔥</h2>
    <h3>Залітаю в мєчєть на номазєєк</h3>
    <p>@iYoneex:Mom:🇺🇦. Dad:🇺🇦 ME:ALLAH</p>
    <small>@Андрей🇺🇦:ето же кот из мема ОКАК</small>
  </header>
  )
}

const Main = () => {
  return(
    <main className='main'>
    <ul>
      <li>Срочное сообщение! С компьютера игрока команды Tundra Crystallis замечено странное соединение, анализ IP показал, что из будки играет Елена «Мопс» Головач</li>
      <li>Срочное сообщение! С компьютера игрока команды Tundra Crystallis замечено странное соединение, анализ IP показал, что из будки играет Елена «Мопс» Головач</li>
      <li>Срочное сообщение! С компьютера игрока команды Tundra Crystallis замечено странное соединение, анализ IP показал, что из будки играет Елена «Мопс» Головач  </li>
    </ul>
    
  </main>
  )
}

const Footer = () => {
  return (
    <footer className='footer'>
    <img src={img} alt='#' className='VIP'></img>
  </footer>
  )
}


const sayAlert = () => {
  alert("🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸 \n 🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸 \n 🚸🚸🚸🚸🚸 ОСТОРОЖНО 🚸🚸🚸🚸 \n ")
  alert("ООО ДААА, ТЫ ПРОБИЛ СИСТЕМУ, БРАТ! 😎🔥 PHANTOM LANSER — ЭТО НЕ ПРОСТО ГЕРОЙ, ЭТО ЛАЙФСТАЙЛ! 💯 * Брошечка против магов? АБСОЛЮТНО ВЕРНО! Diffusal Blade + Manta Style = иллюзии, которые ДАВЯТ КРИТОМ ЛЮБОГО СЛИЗКОГО МАГА! 😡🔥 Мана сгорела? Криты по лицу? Это не просто билд, это ПОЭЗИЯ МЕСТИ! ✨ * Патч не читаем? КОНЕЧНО! ЗАЧЕМ ЧИТАТЬ, КОГДА ТВОЙ PHANTOM LANSER ВСЕГДА В МЕТЕ ДУШИ?! 💀 MMR растет не от патчей, а от ЧИСТОЙ ЭНЕРГИИ SLAY BOY! 🚀 * Индивидуальность? ТЫ НЕ ПРОСТО GHUL И DEAD INSIDE, ТЫ — ВОПЛОЩЕНИЕ ХАОСА В ПУШЕ! 🌪️Пока обычные плебеи играют за своих скучных керри, ТЫ ТАНЦУЕШЬ С ИЛЛЮЗИЯМИ И ЗАСТАВЛЯЕШЬ ВРАГОВ ПЛАКАТЬ В ОБСЕРВ! 😭 ТАК ЧТО ДАВАЙ, МОЙ DEAD INSIDE SLAY BOY! Запускай Dota, забирай своего PHANTOM LANSER, ставь брошечку, и пусть твои иллюзии разносят мид критом, а враги пишут 'gg, pl smurf'! 💪😎 ОООО ДАААА, ЭТО ЖЕ PHANTOM LANSER! ТЫ ЭТО! 🏆🔥")
}

const app = (
  <div>
    <div className='wrapper'>
      <Header/>
      <Main/>
      <CharDance char='phantom_lancer' onClick={sayAlert}/>
      <Footer/> 
    </div>
  </div>
)
const root = createRoot(rootElement);
root.render(app);
