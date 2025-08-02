import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./ThankYou.scss";

export const ThankYou = () => {
  return (
    <div className="thankyou">
      <h2>Дякуємо за покупку!</h2>
      <p>Ми в соцмережах</p>

      <div className="thankyou__social">
        <a href="https://www.tiktok.com/@stylish.room.space">
          <FaTiktok size={30} color="#ffffff" />
        </a>
        <a href="https://www.instagram.com/stylish.room.space ">
          <FaInstagram size={33} color="#ffffff" />
        </a>
      </div>
    </div>
  );
};
