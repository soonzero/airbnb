import React from "react";
import FixedHeader from "../Components/FixedHeader";
import FlexFilter from "../Components/FlexFilter";
import Footer from "../Components/Footer";
import FlexCard from "../Components/FlexCard";
import FlexNav from "../Components/FlexNav";
import style from "../Components/css/Flex.module.css";
import Loading from "../Components/Loading";

export default function FlexFarm() {
  const [contents, setContents] = React.useState([
    {
      id: 1,
      location: "Namwon-eup, Seogwipo-si, 제주도",
      distance: "477km",
      date: "7월 3일~10일",
      price: "₩248,611",
      cover: [
        "https://a0.muscache.com/im/pictures/27ef3c63-1851-4830-88a6-992f72dd8154.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 2,
      location: "Gujwa-eup, Cheju, 제주도",
      distance: "447km",
      date: "3월 25일 ~ 4월 1일",
      price: "₩71,628",
      cover: [
        "https://a0.muscache.com/im/pictures/157e0cc4-e563-4d1a-925a-8cff35d25e90.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 3,
      location: "Hangyeong-myeon, Jeju-si, 제주도",
      distance: "479km",
      date: "3월 4일~11일",
      price: "₩173,294",
      cover: [
        "https://a0.muscache.com/im/pictures/71f144b2-d4f6-454f-8059-2dd5ed00fcfd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 4,
      location: "Gujwa-eup, Jeju-si, 제주도",
      distance: "451km",
      date: "4월 1일~8일",
      price: "₩283,047",
      cover: [
        "https://a0.muscache.com/im/pictures/29ef52d0-ca5e-4787-9af8-27f941320bd8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 5,
      location: "Seogwipo-si, 제주도",
      distance: "482km",
      date: "4월 15일~22일",
      price: "₩61,280",
      cover: [
        "https://a0.muscache.com/im/pictures/6b12a028-b25f-42cb-ad4a-ff0b17b38a45.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 6,
      location: "Hangyeong-myeon, Cheju, 제주도",
      distance: "478km",
      date: "5월 30일 ~ 6월 6일",
      price: "₩67,337",
      cover: [
        "https://a0.muscache.com/im/pictures/3e3f2512-9edc-4d59-b318-47c0a2897606.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 7,
      location: "일동면, 포천시, 경기도",
      distance: "56km",
      date: "4월 3일~10일",
      price: "₩186,580",
      cover: [
        "https://a0.muscache.com/im/pictures/64a1fff2-a0ae-4b1b-851a-05c2dd1f1c0b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 8,
      location: "Sabuk-myeon, Chuncheon, 강원도",
      distance: "77km",
      date: "4월 22일~29일",
      price: "₩228,996",
      cover: [
        "https://a0.muscache.com/im/pictures/5722195e-7c6a-4ccf-a243-3509db4d2133.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 9,
      location: "Ha-myeon, Gapyeong-gun, 경기도",
      distance: "44km",
      date: "4월 10일~17일",
      price: "₩143,917",
      cover: [
        "https://a0.muscache.com/im/pictures/087f177d-082c-4161-999e-cfe709bdec9d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
    {
      id: 10,
      location: "포천시, 경기도",
      distance: "57km",
      date: "4월 10일~17일",
      price: "₩185,012",
      cover: [
        "https://a0.muscache.com/im/pictures/27ef3c63-1851-4830-88a6-992f72dd8154.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6056493b-882c-415b-9762-953888ca8e68.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f0b6919a-91a3-4267-a62b-09bc652eae7c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5aeb6065-63e4-4850-a2b1-2d829da152dd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/01652ee7-c01c-4921-9b35-6de94c69bf2b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f51b248-992d-4975-9a62-0615ea165da5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4b39789a-b61d-42e5-a15f-1663f43abfd4.jpg?im_w=720",
      ],
    },
  ]);

  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => setIsLoading(false), 1000);

  return (
    <div className={style.container}>
      <FixedHeader nonfixed />
      <FlexFilter selected="farm" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className={style.mainContainer}>
          <section className={style.mainSection}>
            <main className={style.main}>
              <FlexCard contents={contents} />
              <FlexCard contents={contents} />
              <FlexCard contents={contents} />
              <FlexCard contents={contents} />
            </main>
            <div className={style.map}>
              <button className={style.mapBtn}>
                <span>지도 표시하기</span>
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "16px",
                    width: "16px",
                    fill: "rgb(255, 255, 255)",
                  }}
                >
                  <path d="M31.245 3.747a2.285 2.285 0 0 0-1.01-1.44A2.286 2.286 0 0 0 28.501 2l-7.515 1.67-10-2L2.5 3.557A2.286 2.286 0 0 0 .7 5.802v21.95a2.284 2.284 0 0 0 1.065 1.941A2.29 2.29 0 0 0 3.498 30l7.515-1.67 10 2 8.484-1.886a2.285 2.285 0 0 0 1.802-2.245V4.247a2.3 2.3 0 0 0-.055-.5zM12.5 25.975l-1.514-.303L9.508 26H9.5V4.665l1.514-.336 1.486.297v21.349zm10 1.36l-1.515.337-1.485-.297V6.025l1.514.304L22.493 6h.007v21.335z"></path>
                </svg>
              </button>
            </div>
          </section>
        </div>
      )}
      <FlexNav />
      <Footer />
    </div>
  );
}
