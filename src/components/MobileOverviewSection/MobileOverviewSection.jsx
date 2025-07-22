// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>포항 펜타시티 한신더휴</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            [A2블록] 포항시 북구 홍해읍 대련리 기술융합지구 펜타시티 A2BL<br />
            [A4블록] 포항시 북구 홍해읍 대련리 기술융합지구 펜타시티 A4BL
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            [A2블록] 지하 3층 ~ 지상 29층<br />
            [A4블록] 지하 3층 ~ 지상 29층
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            [A2블록] 84㎡ / 99㎡<br />
            [A4블록] 84B㎡
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
            [A2블록] 1,597세대<br />
            [A4블록] 595세대
          </span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />

      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            포항 펜타시티의 중심으로 사는<br />
            최고의 브랜드 아파트
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "미래가치를 높여주는 포항 펜타시티 한신더휴",
      desc:
        "국가첨단전략산업 이차전지 특화단지<br />포항 최초 경제자유구역의 중심",
    },
    {
      img: slide2,
      title: "한신더휴만의 특화 혁신설계 프리미엄",
      desc:
        "84·99타입 중소형 평형대 설계<br />4BAY,펜트리등 차별화던 혁신평면",
    },
    {
      img: slide3,
      title: "광역으로 통하는 특급 교통",
      desc:
        "덕선 IC로 바로 연결예정 <br />포항역 KTX는 덤, 편리한 교통망에 더해지는 포항 펜타시티",
    },
    {
      img: slide4,
      title: "학교, 쇼핑,병원, 문화를 더 가깝게 <br /> 한걸음에 SMART 인프라",
      desc: "단지 앞 유치원·초등학교(예정)<br /> 펜타시티 내 국제학교 및 중심상권 프리미엄 ",
    },
    {
      img: slide5,
      title: "2,192세대 펜타시티 내 대단지 프리미엄",
      desc:
        "펜타시티 전체 공동주택 부지의 54%를 품은 <br /> 최대규모 대단지 프리미엄",
    },
    {
      img: slide6,
      title: "회사보유분 호실 및 특별혜택 증정",
      desc: "성공 분양의 대표주자 한신더휴 펜타시티 , 마지막 특별분양",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>ONE CLUSTER BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
