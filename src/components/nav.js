import React from "react";
import ToadyLogo from "../svg/today-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <header className="header">
      <div className="first_container">
        <div className="header_wraaper flex_beteween header_width">
          <a href="/">
            <ToadyLogo />
          </a>
          <div className="store_box">
            <a href="/">
              <span>커뮤니티</span>
            </a>
            <a href="/">
              <span>스토어</span>
            </a>
            <a href="/">
              <span>이사/시공/수리</span>
            </a>
          </div>
          <div className="search_box">
            <FontAwesomeIcon icon={faSearch} className="search_icon" />
            <input type="text" placeholder="통합검색" autoComplete="off" />
          </div>
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="auth_box">
            <a href="/">로그인</a>
            <a href="/">회원가입</a>
            <a href="/">고객센터</a>
          </div>
          <div className="write_box">
            <button>
              <span>글쓰기</span>
            </button>
          </div>
        </div>
      </div>
      <div className="second_container">
        <div className="sub_nav header_width">
          <div>
            <a href="/">홈</a>
            <a href="/">팔로잉</a>
            <a href="/">사진</a>
            <a href="/">집들이</a>
            <a href="/">노하우</a>
            <a href="/">전문가집들이</a>
            <a href="/">셀프가이드</a>
            <a href="/">질문과답변</a>
            <a href="/">3D인테리어</a>
            <a href="/">이벤트</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
