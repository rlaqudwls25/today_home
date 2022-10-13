import React from "react";

const Main = () => {
  return (
    <div className="home_page">
      <div className="home_container">
        <div className="image_box border_box"></div>
        <div className="sub_image_box border_box"></div>
      </div>
      <div className="category_box all_page_width">
        <ul className="flex_center">
          <li>
            <a>
              <div></div>
              <span>쇼핑하기</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>의식주축제</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>오늘의딜</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>오늘뭐하지</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>간편한끼</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>집들이</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>꿀잼시리즈</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>빠른배송</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>쉬운이사</span>
            </a>
          </li>
          <li>
            <a>
              <div></div>
              <span>리모델링</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="section_container page_width">
        <div>
          <p>오늘의 스토리</p>
        </div>
        <div className="flex_beteween">
          <div className="section_img_box">
            <img />
          </div>
          <div className="section_img_box">
            <img />
          </div>
          <div className="section_img_box">
            <img />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Main;
