import Feature2TextBlock from "../../molecules/Feature2TextBlock";
import img from "../../../assets/Image Block.png";

const Feature2 = () => {
  return (
    <section className="feature-2" style={{ padding: "32px 24px" }}>
      <Feature2TextBlock />
      <img
        src="https://cmsv2.yame.vn/uploads/f23ed8fd-64bb-43c9-835b-61f594d929f3/Thum_sale_KT_(01)_.jpg?quality=80&w=700&h=0"
        alt=""
      />
    </section>
  );
};

export default Feature2;
