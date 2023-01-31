import Button from "../../atoms/Button";
import img from "../../../assets/HeroBlockImage.png";
import SliderSlick from "../../molecules/SliderSlick/SliderSlick";

const HeroBlock = () => {
  return (
    <section
      className="hero-block d-flex flex-column align-items-center"
      data-aos="zoom-in"
    >
      <SliderSlick showItem={1} autoplay="true" fade="true">
        <img
          src="https://cmsv2.yame.vn/uploads/20fc7fb1-d562-4a30-8e71-348e47176955/Banner_sale_KT_(01).jpg?quality=80&w=0&h=0"
          alt=""
        />
        <img
          src="https://cmsv2.yame.vn/uploads/c8565764-d8f2-4c79-aad3-61d7ae97b0bb/BANNERWEBsomi-2.jpg?quality=80&w=0&h=0"
          alt=""
        />
        <img
          src="https://cmsv2.yame.vn/uploads/aae0a099-5eca-4d64-bba9-61791b9626f8/bannerweb.jpg?quality=80&w=0&h=0"
          alt=""
        />
      </SliderSlick>
    </section>
  );
};

export default HeroBlock;
