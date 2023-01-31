import { ReactComponent as Delivery } from "../../../assets/Delivery.svg";
import { ReactComponent as Sprout } from "../../../assets/Sprout.svg";
import { ReactComponent as Checkmark } from "../../../assets/Checkmark--outline.svg";
import { ReactComponent as Purchase } from "../../../assets/Purchase.svg";
import FeatureCard from "../../atoms/FeatureCard";

const data = [
  {
    icon: <Delivery />,
    title: "Giao hàng nhanh chóng",
    content: "Đặt hàng online giao ngay trong ngày, miễn phí tiền vận chuyển",
  },
  {
    icon: <Checkmark />,
    title: "Hàng luôn đảm bảo chất lượng",
    content: "Chất lượng luôn đạt 100% giống mô tả sản phẩm, bảo hành một đổi một",
  },
  {
    icon: <Purchase />,
    title: "Thanh toán nhanh gọn",
    content:
      "Chỉ cần một cú nhấp chuột sản phẩm sẽ được thanh toán online nhanh chóng",
  },
  {
    icon: <Sprout />,
    title: "Sản phẩm có thể tái chế",
    content: "Sản phẩm sử dụng thành phần có thể tái chế để bảo vệ môi trường",
  },
];

const FeatureList = () => {
  return (
    <ul style={{ padding: "0" }} className="feature-list d-flex flex-column">
      {data.map((item, idx) => (
        <FeatureCard key={idx}>
          {item.icon}
          <p
            style={{
              marginBottom: "12px",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "140%",
            }}
          >
            {item.title}
          </p>
          <p
            style={{ fontWeight: "400", fontSize: "16px", lineHeight: "150%" }}
          >
            {item.content}
          </p>
        </FeatureCard>
      ))}
    </ul>
  );
};

export default FeatureList;
