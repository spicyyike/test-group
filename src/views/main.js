import javascriptLogo from "../assets/images/javascript.svg";
import viteLogo from "/images/vite.svg";
import { setupCounter } from "../components/counter.js";
import diversityIcon from "../assets/images/diversity.png";

export function renderMain() {
  document.querySelector("#app").innerHTML = `
  <div class="flex flex-col min-h-screen bg-slate-900 text-white justify-center items-center gap-y-2">
  <div class="flex gap-x-4">
   <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
  </div>
   
        <a href="https://www.generation.org/news/generational-diversity-integrating-multiple-age-groups-in-the-workplace/" target="_blank">
    <img src="${diversityIcon}" alt="Diversity icon" />
    </a>
    <h1 class="font-bold text-2xl font-tradewinds">Hello JSD!</h1>
      <button id="counter" type="button" class="cursor-pointer bg-teal-400 px-2 py-1 rounded-xl hover:bg-gradient-to-r from-red-500 to-orange-500"></button>
    <p>
      Click on the Vite logo to learn more
    </p>
    <p class="text-center">This is a starter project structure for a small to medium sized vanilla JavaScript website/app.</p>
    <a href="https://thailand.generation.org/programs/junior-software-developer" target="_blank">
    <img src="https://thailand.generation.org/wp-content/uploads/2024/08/Final-Junior-Software-Developer.png" class="border-8 rounded-xl" />
    </a>  
    </div>
`;

  setupCounter(document.querySelector("#counter"));
}
