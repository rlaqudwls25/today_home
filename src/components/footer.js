import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_inner">
        <div className="center_info">
          <a href="#">고객센터</a>
          <p>1670-0876</p>
          <p>
            09:00~18:00 (주말, 공휴일은 오늘의집 직접배송 및 이사/시공/수리
            문의에 한해 전화 상담 가능)
          </p>
        </div>
        <div className="brand_info">
          <a href="">브랜드 스토리</a>
          <a href="">회사소개</a>
          <a href="">채용정보</a>
          <a href="">이용약관</a>
          <a href="">개인정보처리방침</a>
          <a href="">공지사항</a>
          <a href="">고객센터</a>
          <a href="">고객의 소리</a>
          <a href="">전문가 등록</a>
          <a href="">사업자 구매회원</a>
          <a href="">제휴/광고 문의</a>
          <a href="">입점신청 문의</a>
          <a href="">안전거래센터</a>
          <a href="">상품광고 소개</a>
        </div>
        <div className="company_info">
          <span>상호명: (주)버킷플레이스</span>
          <span>
            이메일 :(고객문의) cs@bucketplace.net (제휴문의)
            contact@bucketplace.net
          </span>
          <span>대표이사 :이승재</span>
          <span>사업자등록번호 :119-86-91245</span>
          <span>통신판매업신고번호 :제2018-서울서초-0580호</span>
          <span>사업자정보확인</span>
          <br />
          <span>
            주소 :서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층우리은행
          </span>
          <span>
            채무지급보증안내 :(주)버킷플레이스는 고객님이 현금결제한 금액에 대해
            우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
            있습니다.
          </span>
          <span>서비스가입사실확인</span>
        </div>
        <div className="etc">
          <p>
            오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
            등록한 상품정보 및 거래 등에 대해 일체 책임을 지지 않습니다.
          </p>
          <p>
            단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는 판매자로서
            책임을 부담합니다.
          </p>
        </div>
        <p className="eng">
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved
        </p>
        <div className="security_info">
          <div>
            <img
              src="https://assets.ohou.se/design-system/8f5b2c2e98ea1196.png"
              width="32px"
              height="32px"
            />
          </div>
          <div className="security_text">
            ISMS 정보보호 관리체계 인증
            <br />
            2021. 09. 08 ~ 2024. 09. 07
          </div>
          <div>
            <img
              src="https://assets.ohou.se/design-system/d5fb816a58bb6a06.png"
              width="32px"
              height="32px"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
