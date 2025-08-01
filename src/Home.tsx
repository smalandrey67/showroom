import Slider from "react-slick";
import emailjs from "emailjs-com";

import { useNavigate } from "react-router-dom";
import { useRef, useState, type FormEvent } from "react";

import { SLICK_CONFIG } from "./shared/config/slick.config";

export const Home = () => {
  const color = useRef<HTMLInputElement>(null);
  const count = useRef<HTMLInputElement>(null);
  const fullName = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);

  const submitPurchase = (e: FormEvent) => {
    e.preventDefault();

    if (!color.current?.value || !count.current?.value || !fullName.current?.value || !phone.current?.value || !address.current?.value) {
      return;
    }

    setIsDisabled(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          fullName: fullName.current?.value || "No Name",
          phone: phone.current?.value || "No phone",
          address: address.current?.value || "No address",
          color: color.current?.value || "No color",
          count: count.current?.value || "No count",
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setIsDisabled(false);
          navigate("/thankyou");
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <main>
      <section>
        <div className="container">
          <h1 className="title">Шоурум Модель</h1>
          <p className="subtitle">для твоїх речей 🔥🔥</p>

          <div className="gallery">
            <Slider {...SLICK_CONFIG}>
              <div className="gallery-group">
                <img src="/image-1.jpg" alt="showroom" />
              </div>
              <div className="gallery-group">
                <img src="/image-2.jpg" alt="showroom" />
              </div>
              <div className="gallery-group">
                <img src="/image-3.jpg" alt="showroom" />
              </div>
              <div className="gallery-group">
                <img src="/image-4.jpg" alt="showroom" />
              </div>
              <div className="gallery-group">
                <img src="/image-5.jpg" alt="showroom" />
              </div>
              <div className="gallery-group">
                <img src="/image-6.jpg" alt="showroom" />
              </div>
            </Slider>
          </div>

          <div className="information">
            <h3 className="group-title">Характеристики:</h3>

            <div className="group">
              <div>Акрил та дерево</div>
              <div>Розміри: 26.5 x 10.5 x 15 см</div>
            </div>

            <h3 className="group-title">Кольори:</h3>
            <div className="group">
              <div>Синій</div>
              <div>Чорний</div>
              <div>Коричневий</div>
            </div>

            <h3 className="group-title">Додатково:</h3>
            <div className="group">
              <div>Машинки не входять у комлект</div>
              <div>Кожен шоурум працює від окремого usb</div>
            </div>
          </div>

          <div className="price">
            <h3 className="group-title">Ціни:</h3>
            <div className="group">
              <div className="group__item">
                Купи 1 за:
                <span className="price__count">1249 грн</span>
              </div>
              <div className="group__item">
                Купи 2 за:
                <span className="price__count">2320 грн</span>
              </div>
              <div className="group__item">
                Купи 3 за:
                <span className="price__count">3382 грн</span>
              </div>
            </div>
          </div>

          <form onSubmit={submitPurchase}>
            <label>
              <input type="text" name="color" ref={color} placeholder="Колір: Синій, Чорний, Коричневий" autoComplete="off" />
            </label>

            <label>
              <input type="text" name="count" ref={count} placeholder="Кількість: 1, 2, 3" autoComplete="off" />
            </label>

            <label>
              <input type="text" name="fullName" ref={fullName} placeholder="Iм'я та прізвище" autoComplete="off" />
            </label>

            <label>
              <input type="text" name="phone" ref={phone} placeholder="Номер телефону" autoComplete="off" />
            </label>

            <textarea name="address" ref={address} placeholder="Адреса доставки (нова пошта)" autoComplete="off"></textarea>

            <button disabled={isDisabled}>Замовити</button>
          </form>
        </div>
      </section>
    </main>
  );
};
