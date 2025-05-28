import { useContext, useState } from "react";
import moons from "./assets/icons/moon.svg";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import shopping from "./assets/shopping-cart.svg";
import CardDetails from "./cine/CardDetails";
import { MovieContext } from "./context";

export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const showCardHandler = () => setShowCard(!showCard);
  const { cardData } = useContext(MovieContext);

  console.log(cardData);
  return (
    <header>
      {showCard && <CardDetails onClose={() => setShowCard(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moons} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={showCardHandler}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block "
              href="#"
            >
              <img src={shopping} width="24" height="24" alt="" />
              {cardData.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white w-5 h-5 font-bold flex items-center justify-center rounded-full">
                  {cardData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
