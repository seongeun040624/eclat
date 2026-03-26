import { useState } from "react";
import "../style/footer.scss";
import { Link } from 'react-router-dom';

function Footer() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-left">
            <h2 className="logo"><Link to="/">ÉCLaT</Link></h2>

            <p>사업자번호:1234-567890</p>
            <p>주소 : 서울특별시 관악구 신림동 무드 빌딩 201호</p>

            <p className="desc">
                ÉCLAT는 향을 통해 당신만의 순간과 분위기를 완성하는 향수 브랜드입니다.<br />
                일상 속에서 빛나는 감각적인 경험을 선사합니다.
            </p>
          </div>

          <div className="footer-right">

            <div className="menu">
              <h3>MENU</h3>
              <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/wishlist'>Wishlist</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
              </ul>
            </div>

            <div className="social">
              <h3>SOCIAL</h3>
              <ul>

                <li onClick={() => setModalOpen(true)}>YOUTUBE</li>
                <li onClick={() => setModalOpen(true)}>INSTAGRAM</li>
                <li onClick={() => setModalOpen(true)}>FACEBOOK</li>
                <li onClick={() => setModalOpen(true)}>X(TWITTER)</li>

              </ul>
            </div>

          </div>

        </div>

        <div className="copyright">
          <div className="inner">©ÉCLAT 2026 all right reserved.</div>
        </div>

      </footer>

      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
            
            <div 
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            >
            <p>아직 준비되지 않은 서비스입니다.</p>
            <button onClick={() => setModalOpen(false)}>닫기</button>
            </div>

        </div>
        )}
    </>
  );
}

export default Footer;