import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";

const Feature2TextBlock = () => {
  const navigate = useNavigate();
  return (
    <article className="feature-text-block">
      <div className="inner-feature">
        <p>YAME - LÌ XÌ ĐI !! SALE BỰ ĐẦU NĂM - SALE OFF 30%</p>
        <p>YaMe mang ý nghĩa You are My everything</p>
        <p>
        YaMe là một thường hiệu thời trang Việt Nam dành cho giới trẻ. 
</p>
<p>ĐA DẠNG CÁC GU THỜI TRANG chính là phong cách hiện tại của YaMe.vn
Đến với YaMe, sẽ đáp ứng mọi nhu cầu thời trang hàng ngày cho bạn: đi học, đi chơi,đi làm, du lịch, dạo phố, tiệc tùng
        
      YaMe cam kết chất lượng cho tất cả sản phẩm bán tại cửa hàng bằng chính sách bảo hành 365 ngày và chăm sóc trọn đời sau khi hết bảo hành.</p>
      </div>
      <Button
        width="100%"
        padding="16px 0"
        txtColor="#fff"
        bgColor="rgba(249, 249, 249, 0.15)"
        onClick={() => navigate("/products")}
        type="button"
        navigate="/products"
      >
        View collection
      </Button>
    </article>
  );
};

export default Feature2TextBlock;
