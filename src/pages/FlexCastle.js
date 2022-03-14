import React from "react";
import FixedHeader from "../Components/FixedHeader";
import FlexFilter from "../Components/FlexFilter";
import Footer from "../Components/Footer";
import FlexCard from "../Components/FlexCard";
import Loading from "../Components/Loading";
import MobileNavBar from "../Components/MobileNavBar";
import BottomNavBar from "../Components/BottomNavBar";
import style from "../Components/css/Flex.module.css";
import MapBtn from "../Components/MapBtn";

export default function FlexCastle() {
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
      <MobileNavBar />
      <FixedHeader nonfixed />
      <FlexFilter selected="castle" />
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
          <MapBtn />
        </section>
      )}
      <BottomNavBar />
      <Footer display="none" />
    </div>
  );
}
