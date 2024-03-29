import React from "react";
import FacebookIcon from "../../../assets/icons/FacebookIcon.png";
import InstagramIcon from "../../../assets/icons/InstagramIcon.png";
import LinkedinIcon from "../../../assets/icons/LinkedinIcon.png";
import PinterestIcon from "../../../assets/icons/PinterestIcon.png";
import SkypeIcon from "../../../assets/icons/SkypeIcon.png";
import TwitterIcon from "../../../assets/icons/TwitterIcon.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div>
       
        {/* container Menu, Categories, Our Company */}
        <div className="containerMenuCategoriesOurCompany">
          {/* container Footer Our Company */}
           {/* container Info and SocialLinks*/}
          {/* container Company Info */}
          <div className="containerFooterInfo">
            <h3>Yame</h3>
            <p>336 Võ Văn Ngân</p>
            <p>TP.HCM</p>
            <p>Việt Nam</p>
            <p>Góp ý:(028) 7307 1441</p>
          </div>
          <div className="containerOurCompany">
            <h5>Our Company</h5>
            <p>About us</p>
            <p>Vacancies</p>
            <p>Contact us</p>
            <p>Privacy</p>
            <p>Returns policy</p>
          </div>

          {/* container Footer Menu */}
          <div className="containerFooterMenu">
            <h5>Menu</h5>
            <p>New arrivals</p>
            <p>Best sellers</p>
            <p>Recently viewed</p>
            <p>Popular this week</p>
            <p>All products</p>
          </div>

          {/* container Categories */}
          <div className="containerFooterCategories">
            <h5>Categories</h5>
            <p>Shirt</p>
            <p>Balo</p>
            <p>Shoes</p>
            <p>Pants</p>
            <p>Hoodies</p>
            <p>Glasses</p>
          </div>
        </div>
      </div>

      {/*----- container with Line devide -----*/}
      <div className="containerLineDevide">
        <div></div>
        <p>© 2022 - CÔNG TY TNHH YAME VN</p>
        <p>Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM</p>
      </div>
    </div>
  );
};

export default Footer;
