import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "미래가치를 높여주는<br />포항 펜타시티의 프리미엄 ",
    contentText:
      "국가첨단전략산업 이차전지 특화단지<br />포항 최초 경제자유구역의 중심",
  },
  {
    img: section2Image2,
    titleText: "한신더휴만의 특화 혁신설계 프리미엄",
    contentText:
      "84·99타입 중소형 평형대 설계<br />4BAY,펜트리등 차별화던 혁신평면",
  },
  {
    img: section2Image3,
    titleText: "어디든 빠르게 연결되는<br />광역으로 통하는 특급 교통",
    contentText:
      "덕선 IC로 바로 연결예정 <br />포항역 KTX는 덤, 편리한 교통망에 더해지는 포항 펜타시티",
  },
  {
    img: section2Image4,
    titleText:
      "학교, 쇼핑,병원, 문화를 더 가깝게 한걸음에<br />SMART 인프라",
    contentText:
      "단지 앞 유치원·초등학교(예정)<br /> 펜타시티 내 국제학교 및 중심상권 프리미엄 ",
  },
  {
    img: section2Image5,
    titleText: "2,192세대 푸르지오<br />대단지 프리미엄 ",
    contentText: "총 3,724세대 푸르지오 메가타운으로 <br / >누리는 대단지 프리미엄과<br / >지구 내 초등학교 부지(계획), 도서관 및 체육시설 ",
  },
  {
    img: section2Image6,
    titleText:
      "편리한 생활에 더해지는<br />쾌적한 자연환경  ",
    contentText:
      "펜타시티 전체 공동주택 부지의 54%를 품은 최대규모 대단지 프리미엄",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>포항 펜타시티 한신더휴 - 입지환경</title>
        <meta
          name="description"
          content="포항 펜타시티 한신더휴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 포항의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="keywords"
          content="포항 펜타시티 한신더휴, 포항 펜타시티 한신더휴, 포항 펜타시티 한신더휴모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.theporest.co.kr/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="포항 펜타시티 한신더휴 - 입지환경"
        />
        <meta
          property="og:description"
          content="포항 펜타시티 한신더휴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 포항의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          property="og:image"
          content="https://www.theporest.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.theporest.co.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="포항 펜타시티 한신더휴" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="포항 펜타시티 한신더휴 - 입지환경"
        />
        <meta
          name="twitter:description"
          content="포항 펜타시티 한신더휴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 포항의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
"
        />
        <meta
          name="twitter:image"
          content="https://www.theporest.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.theporest.co.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "포항 펜타시티 한신더휴 - 입지환경",
											"description": "포항 펜타시티 한신더휴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 포항의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
",
											"url": "https://www.theporest.co.kr/LocationEnvironment/intro"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        포항 펜타시티 한신더휴 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        포항 펜타시티 한신더휴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 포항의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 포항 펜타시티</div>
        <div>살수록 높아질 한신더휴</div>
        <div>도시를 압도할 자부심 한신더휴</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="포항 펜타시티 한신더휴입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 포항 펜타시티 한신더휴 사업주체 및 시공사와 무관합니다.
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
