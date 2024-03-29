import React from "react";
import FeatureCard from "../../atoms/FeatureCard/FeatureCard";
import DeliveryIcon from "../../../assets/icons/DeliveryIcon.png";
import PurchaseIcon from "../../../assets/icons/PurchaseIcon.png";
import SproutIcon from "../../../assets/icons/SproutIcon.png";
import CheckoutIcon from "../../../assets/icons/CheckmarkOutlineIcon.png";
import FeatureList from "../../molecules/FeatureList";

const MoreInfo = () => {
  return (
    <div className="MoreInfo" id="MoreInfo">
      <h4>Các lí do các bạn nên chọn sản phẩm của chúng tôi:</h4>
      <div>
        <FeatureList/>
      </div>
    </div>
  );
};
export default MoreInfo;
