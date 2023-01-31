import FeatureList from "../../molecules/FeatureList";

const FeaturesBlock = () => {
  return (
    <section
      className="features-block"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <p className="first-level-title">Các lí do các bạn nên chọn sản phẩm của chúng tôi</p>
      <FeatureList />
    </section>
  );
};

export default FeaturesBlock;
