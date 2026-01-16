import { useState } from "react";
import "./Hero.css";

const LightBox = ({ hideLightBox, index }) => {
  const [lightBoxImgIndex, setLightBoxImgIndex] = useState(index ? index : 1);

  return (
    <div className="overlay">
      <div className="lightbox-flex">
        <img
          src="/images/icon-close.svg"
          alt="cross-icon"
          onClick={hideLightBox}
        />
        <button
          onClick={() =>
            setLightBoxImgIndex((prev) => {
              if (prev === 1) {
                return 4;
              }
              return prev - 1;
            })
          }
        >
          <img src="/images/icon-previous.svg" alt="previous-icon" />
        </button>
        <div className="product-container">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="lightbox-product" key={index}>
              <img
                src={`/images/image-product-${lightBoxImgIndex}.jpg`}
                alt={`prod-${lightBoxImgIndex}`}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setLightBoxImgIndex((prev) => {
              if (prev === 4) {
                return 1;
              }
              return prev + 1;
            })
          }
        >
          <img src="/images/icon-next.svg" alt="next-icon" />
        </button>
      </div>
    </div>
  );
};

export default LightBox;
