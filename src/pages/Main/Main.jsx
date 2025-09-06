import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import DarkComplexSection from "../../components/DarkComplexSection/DarkComplexSection";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";
import MobileNewsSection from "../../components/MobileNewsSection/MobileNewsSection";

import news2Img from "../../assets/news/news2.jpg";
import news3Img from "../../assets/news/news3.jpg";
import news4Img from "../../assets/news/news4.jpg";



import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `2,192세대 [A24BL,A4BL] 대단지`,
    text2: `펜타시티 전체공통주택 부지의 54%를<br />
			      품은 최대 규모의 메머드급 프리미엄`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `여유로운 직주근접 단지`,
    text2: `250개 기업 유치(예정),<br />
			      약8,300억원 경제파급효과 예상`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `쾌적하고 편리한 생활의 중심`,
    text2: `360˚공원으로 둘러싸인 쾌적한<br />
			      자연환경 및 중심상권 프리미엄`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `회사 보유분 특별 분양`,
    text2: `다시는 없을 특별혜택은 덤으로<br />
			      받으면서 내 집 마련의 기회`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (생년월일, 거주지역 필드 추가)
const [registration, setRegistration] = useState({
  name: "",
  phone: "",
  birthday: "",
  residence: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setRegistration((prev) => ({
    ...prev,
    [name]: value,
  }));
};

 // ─── 예시용 뉴스 데이터 (초기 더미) ───
 const newsList = [
   {
     id: 1,
     title: "살아나는 부동산 시장...한신공영 시공 ‘포항 펜타시티 한신더휴’ 관심↑",
     excerpt:
       "부동산 시장 회복세 속에 ‘포항 펜타시티 한신더휴’가 주목받는다. 2·3단지는 일부 잔여세대 선착순 계약 중이며, 계약금 정액제와 전매 혜택으로 수요자 관심이 높다. 단지는 SK하이닉스·삼성전자 반도체 산업단지와 인접해 향후 직주근접 효과와 높은 미래가치가 기대된다",
     date: "2025. 7. 21.",
     link: "/pentacityhansin/press/cqr9aqw3QNY4ebaAWGmC",
     // image: "https://yourdomain.com/path/to/image.jpg",  // 이미 있으면 넣고
   },
   {
     id: 2,
     title: "한신공영, 브랜드 리뉴얼 첫 단지 ‘포항 펜타시티 한신더휴’ 예비 입주자 사이 호평",
     excerpt:
       "한신공영이 리뉴얼한 ‘한신더휴’ 브랜드의 첫 적용 단지 ‘포항 펜타시티 한신더휴’는 세심한 시공과 고급 설계, 차별화된 조경으로 입주 전부터 호평을 받고 있다. 커뮤니티 시설과 교육 인프라, 조경 협의 과정을 통한 단지별 특화 공간이 강점으로 꼽히며, 예비 입주자 만족도가 매우 높다.",
     date: "2024. 10. 10.",
     link: "/pentacityhansin/press/a6C8fAtT7PnOPHWmFzw2",
     image: news2Img
   },
   {
    id: 3,
    title: "한신공영 '포항 펜타시티 한신더휴', 저금리 대출 제공",
    excerpt:
      "포항 펜타시티 한신더휴’는 농협과 협력해 4.2% 저금리 대출을 제공, 예비 입주자들의 큰 호응을 얻었다. 이는 1금융권 평균 대출금리 대비 낮아 경기 불황 속 자금 부담을 완화하는 효과가 크다. 입주민들의 안정적인 자금 조달 환경을 마련해 실수요자 중심의 긍정적인 평가가 이어지고 있다",
    date: "2024. 10. 10.",
    link: "/pentacityhansin/press/n0IxMXC8dL1KZOxaLHfB",
    image: news3Img
  },
  {
    id: 4,
    title: "한신공영, 브랜드 리뉴얼 첫 적용단지 ‘포항 펜타시티 한신더휴’ 예비 입주자 만족도 ‘최상’",
    excerpt:
      "포항 펜타시티 한신더휴’는 리뉴얼 브랜드 첫 적용 단지로, 고급 설계와 다양한 커뮤니티, 차별화된 조경 시설로 입주민 만족도가 최상이라는 평가를 받는다. 한신공영은 이 성공을 기반으로 양주·평택 등 수도권 신규 분양에서도 프리미엄 가치를 이어가며, 새로운 주거문화 기준을 제시할 계획이다.",
    date: "2024. 10. 10.",
    link: "/pentacityhansin/press/1oRiifPTupt4Mbj94YOy",
    image: news4Img
  },
   // ...원하시는 만큼 항목 추가
 ];


  // 기존 제출 핸들러는 Formspree를 사용할 것이므로 제거(또는 사용하지 않음)
  // const handleRegistrationSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `등록되었습니다!\n이름: ${registration.name}\n연락처: ${registration.phone}\n이메일: ${registration.email}\n방문일자: ${registration.visitDate}`
  //   );
  //   setRegistration({ name: "", phone: "", email: "", visitDate: "" });
  // };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* SEO 최적화를 위한 메타 태그 추가 */}
        <title>▪포항 펜타시티 한신더휴</title>
        <meta
          name="description"
          content="포항 펜타시티 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 펜타시티 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta name="keywords"
        content="포항펜타시티한신더휴, 펜타시티한신더휴, 포항한신더휴" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theporest.co.kr/" />

        {/* 모바일 친화성을 위한 추가 태그 */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph - 소셜 미디어(페이스북, LinkedIn 등) 공유 최적화 */}
        <meta
          property="og:title"
          content="▪포항 펜타시티 한신더휴"
        />
        <meta
          property="og:description"
          content="포항 펜타시티 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 펜타시티 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta property="og:url" content="https://www.theporest.co.kr/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.theporest.co.kr/Main1.png" // 실제 메인 이미지 URL로 변경하세요.
        />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="포항 펜타시티 한신더휴"
        />
        <meta
          name="twitter:description"
          content="포항 펜타시티 한신더휴ㅣ☎️(대표)1533-8848ㅣ포항 펜타시티 한신더휴ㅣ견본주택ㅣ모델하우스ㅣ위치ㅣ청약ㅣ분양ㅣ분양가ㅣ공급정보ㅣ잔여세대문의ㅣ고객센터ㅣ방문예약"
        />
        <meta
          name="twitter:image"
          content="https://www.theporest.co.kr/Main1.png" // 실제 이미지 URL로 변경하세요.
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도를 높이기 위한 스키마 마크업 */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "ApartmentComplex",
        "name": "포항 펜타시티 한신더휴",
        "description": "브랜드 평판 1위 프리미엄 아파트. 방문 예약 시 신세계상품권 증정 등 다양한 혜택을 제공합니다.",
        "url": "https://www.theporest.co.kr/",
        "image": "https://www.theporest.co.kr/Main1.png",
        "telephone": "1533-8848",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "경기도 포항 은화삼지구",
          "addressLocality": "포항",
          "addressRegion": "경기도",
          "postalCode": "우편번호"
        }
      }
    `}
        </script>
      </Helmet>
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="포항 펜타시티 한신더휴-mainimage1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                1군 브랜드{" "}
                <span className={styles.greyText}>브랜드 프리미엄</span> |
                3,729세대{" "}
                <span className={styles.greyText}>메머드급 대단지</span> |
                계약금 5%로 내집마련기회{" "}
                <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>
                  포항 펜타시티의 중심이 될
                </div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>포항 펜타시티 한신더휴 </div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="포항 펜타시티 한신더휴 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  " 방문 예약 고객 전원 신세계상품권 100% 증정 "
                </div>
                <div className={styles.text3}>
                  - 2,192세대 메머드급 대단지 프리미엄 <br />
                  - 360˚공원으로 둘러쌓인 쾌적한 힐링 라이프 <br />
                  - 이차전지 특화단지 지정 및 포항최소 경제자유구역<br />
                  -8,300억 경제파급효과 예상
                  <br />- 모두를 누리는 포항 펜타시티 한신더휴
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="포항 펜타시티 한신더휴 브랜드소개-image2"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>
                    최고의 브랜드 아파트 <br />
                    포항 펜타시티 한신더휴
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    포항 펜타시티 한신더휴가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="포항 펜타시티 한신더휴 입지환경소개-image2"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  포항 펜타시티 한신더휴에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="포항 펜타시티 한신더휴 아파트 조감도-image3"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="포항 펜타시티 한신더휴 브랜드소개-image4"
                />
                <div className={styles.text1}>포항 펜타시티 한신더휴</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* ================== 방문예약 섹션 (PC) ================== */}
<div className={styles.pcVisitContainer}>
  {/* 상단 타이틀 영역 (좌: 제목/부제, 우: 안내문구) */}
  <div className={styles.pcTitleRow}>
    <div className={styles.leftTitle}>
      <h2>포항 펜타시티 한신더휴</h2>
      <p>방문예약</p>
    </div>
    <div className={styles.rightText}>
      방문예약 등록 시 모델하우스 주소 SMS발송 및
      <br />
      잔여세대를 안내드립니다.
    </div>
  </div>

  {/* 입력 폼 */}
  <form
    className={styles.pcVisitForm}
    action="https://formspree.io/f/mbldpwpz"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  

    <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />

    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  포항 펜타시티 한신더휴
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    포항 펜타시티 한신더휴가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="포항 펜타시티 한신더휴 오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
  <img
    src={mobileImageMain}
    className={styles.mainImage}
    alt="포항 펜타시티 한신더휴 mobilemain-image1"
  />
  <div className={styles.overlay}></div>

  {/* 기존 텍스트 */}
  <div className={styles.mainImageTextBox1}>
    <div className={styles.mainImageTextSub1}>
      포항 펜타시티 중심의
      <br />
      <span className={styles.greyText1}>높은 미래가치</span>
      <br />
      1군브랜드
      <br />
      <span className={styles.greyText1}>브랜드 프리미엄</span>
      <br />
      계약금 5%로 내집마련기회
      <br />
      <span className={styles.greyText1}>착한조건</span>
    </div>
    <div className={styles.mainImageTitleBox1}>
      <div className={styles.mainImageText1}>
        포항 펜타시티 한신더휴
        <br />
        
      </div>
    </div>
  </div>
</div>

          
          

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              포항 펜타시티 한신더휴 POINT
            </div>
            <div className={styles.text3}>
              - 2,192세대 메머드급 대단지 프리미엄
              <br />
              - 360˚공원으로 둘러쌓인 쾌적한 힐링 라이프 <br />
              - 이차전지 특화단지 지정 및 포항최소 경제자유구역 <br /> 
              - 8,300억 경제파급효과 예상
              <br />- 모두를 누리는 포항 펜타시티 한신더휴
            </div>

            <div className={styles.text4}>
              {/* 외부 링크 대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>
          <MobileOverviewSection />
                 {/* ─── 2.5. 중간에 풀-스크린 이미지 섹션 ───
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="단지 전경 추가 이미지"
             className={styles.middleImage}
           />
         </div> */}
          
         {/* ② DarkComplexSection 추가 */}
         <section className={styles.darkSection}>
           <DarkComplexSection />
         </section>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                포항 펜타시티의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  포항 펜타시티 한신더휴가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="포항 펜타시티 한신더휴 모바일 입지안내 이미지"
            />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                포항 펜타시티 한신더휴에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 <br /> 포항 펜타시티 한신더휴에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="포항 펜타시티 한신더휴 모바일 조감도 이미지"
            />
          </div>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div> */}

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="포항 펜타시티 한신더휴 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}
          <MobileNewsSection newsList={newsList} />

          {/* 모바일 방문예약 섹션 */}
<div className={styles.mobileVisitContainer}>
  <h2>포항 펜타시티 한신더휴</h2>
  <p className={styles.mobileSubTitle}>방문예약</p>
  <p className={styles.mobileInfoText}>
    방문예약 등록 시 모델하우스 주소 SMS발송 및<br />
    잔여세대를 안내드립니다.
  </p>

  <form
    className={styles.mobileVisitForm}
    action="https://formspree.io/f/mbldpwpz"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />
    



    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="포항 펜타시티 한신더휴 오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
