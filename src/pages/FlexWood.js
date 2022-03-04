import React from "react";
import FixedHeader from "../Components/FixedHeader";
import FlexFilter from "../Components/FlexFilter";
import Footer from "../Components/Footer";
import FlexCard from "../Components/FlexCard";
import Loading from "../Components/Loading";
import FlexNav from "../Components/FlexNav";
import style from "../Components/css/Flex.module.css";

export default function FlexWood() {
  const [contents, setContents] = React.useState([
    {
      id: 1,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 3,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 4,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 5,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 6,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 7,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 8,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 9,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
      id: 10,
      location: "Namwon-eup, Seogwipo-si, 제주도, 한국",
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
  ]);

  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  return (
    <div className={style.container}>
      <FixedHeader nonfixed />
      <FlexFilter selected="wood" />
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
      <FlexNav />
      <Footer />
    </div>
  );
}
