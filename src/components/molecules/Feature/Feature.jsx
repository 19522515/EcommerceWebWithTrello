import React from "react";
import { useNavigate } from "react-router-dom";
import FeatureImg from "../../../assets/images/FeatureImg.png";
import FeatureImg2 from "../../../assets/images/FeatureImg2.png";
import Button from "../../atoms/Button/Button";

const Feature = () => {
  return (
    <div id="feature" className="feature" data-aos="fade-zoom-in">
      {/* First container item info  */}
      <div className="containerItemFirst">
        {/* container content */}
        <div className="containerContentFirstContainer">
          <h4>Sản phẩm chất lượng tốt với giá thành rẻ </h4>
          <br />
          <p>Yame (You are my everything) là thương hiệu thời trang nội địa Việt dành cho giới trẻ. <br></br>
          Chúng tôi luôn nghiên cứu, phát triển mỗi ngày để mang đến những sản phẩm đa dạng về chất liệu, nhiều tính năng, đa dạng giá thành... mang lại nhiều sự lựa chọn hơn cho khách hàng.
         Luôn duy trì chế độ bảo hành 365 ngày đối với mọi sản phẩm. Khác biệt với chuỗi quần áo ngay trong không gian mua sắm 
         <br></br>
Tự hào rằng, cho đến hiện tại chỉ một mình YaMe VN làm được điều này, mang cả một không gian Trà sữa xanh mát vào trong chính khu vực mua sắm.</p>
         
        </div>
        <img
          className="imgFirstContainer"
          alt="First Img Description"
          src={FeatureImg}
        ></img>
      </div>

      {/* Second container item info */}
      <div className="containerItemSecond">
        <img
          className="imgSecondContainer"
          alt="Second Img Description"
          src={FeatureImg2}
        ></img>

        {/* container content */}
        <div className="containerContentSecond">
          <h4>
          GU TỐI GIẢN - ĐƠN GIẢN - THỂ THAO dành cho tất cả mọi người
          </h4>
          <p className="paragraphFirst">
          Sản phẩm thời trang chất lượng, giá thành rẻ nhất so với chất lượng hiện có.
Thiết kế đa dạng, theo xu hướng thời trang thế giới.
Đa dạng sản phẩm phục vụ cho mọi độ tuổi và mọi nhu cầu thời trang.
          </p>
          <br />
          <p className="paragraphSecond">
          Với ý nghĩa You are My everything, YaMe luôn nỗ lực nghiên cứu, phát triển mỗi ngày để mang đến những sản phẩm đa dạng về chất liệu, tính năng, giá thành, đem đến nhiều sự lựa chọn cho khách hàng
          Luôn duy trì chế độ bảo hành 365 ngày đối với mọi sản phẩm. Đa dạng về Gu thời trang, mỗi Gu mang 1 cá tính khác biệt. YaMe đáp ứng nhiều nhu cầu trang phục cho nhiều lứa tuổi<br></br><br></br>
          Hiện tại, Yame sở hữu nhiều chi nhánh tại thành phố Hồ Chí Minh, tại các tỉnh miền Tây Nam – Đông Nam – Tây Nguyên và không ngừng tiếp tục phát triển.
          </p>
          <Button
            content="Get in touch"
            backgroundColor="#FFFFFF"
            color="#2A254B"
            fontSize={16}
            borderColor="transparent"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
