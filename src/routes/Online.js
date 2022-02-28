import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OnlineCard from "../Components/OnlineCard";
import { ReactComponent as Leftbutton } from "../img/leftbutton.svg";
import { ReactComponent as Rightbutton } from "../img/rightbutton.svg";
import { ReactComponent as SlideLeftbutton } from "../img/slide_leftbutton.svg";
import { ReactComponent as SlideRightbutton } from "../img/slide_rightbutton.svg";
import style from "../Components/css/Online.module.css";

export default function Online() {
  const [experiences, setExperiences] = React.useState([
    {
      id: 1,
      type: "컬렉션",
      title: `현지인의 팁을 활용해\n여행 계획 세우기`,
      bgimage: `url("https://a0.muscache.com/im/pictures/8aa965a2-8297-41b1-be7f-ac39a2919fe6.jpg?im_w=2560")`,
    },
    {
      id: 2,
      type: "컬렉션",
      title: `전 세계 인기 체험`,
      bgimage: `url("https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=2560")`,
    },
    {
      id: 3,
      type: "컬렉션",
      title: `팀워크를 다지기에\n최적인 체험`,
      bgimage: `url("https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=2560")`,
    },
    {
      id: 4,
      type: "컬렉션",
      title: `여행에 대한 갈증을\n풀어줄 온라인 체험`,
      bgimage: `url("https://a0.muscache.com/im/pictures/91780510-ca64-4fc4-a7e6-be7c8f7129d5.jpg?im_w=2560")`,
    },
    {
      id: 5,
      type: "컬렉션",
      title: `온 가족이 즐길 수 있는\n체험`,
      bgimage: `url("https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=2560")`,
    },
    {
      id: 6,
      type: "워크숍",
      title: `성공적인 호스팅의 비결\n배우기`,
      bgimage: `url("https://a0.muscache.com/im/pictures/f44b56d9-c12e-425d-998a-6e9fc9f5d557.jpg?im_w=2560")`,
    },
  ]);

  const [filters, setFilters] = React.useState([
    "단체로 즐기기에 적합",
    "가족이 즐기기에 적합",
    "동물",
    "예술 및 글쓰기",
    "베이킹",
    "쿠킹",
    "댄스",
    "음주",
    "엔터테인먼트",
    "피트니스",
    "역사문화",
    "마술",
    "음악",
    "사회공헌",
    "웰빙",
    "올림픽/패럴림픽 출전선수",
    "접근성을 고려해 기획된 체험",
  ]);

  const [products, setProducts] = React.useState({
    plans: {
      id: "plans",
      title: `전 세계 현지 호스트의 도움을 받아 여행을 계획해보세요`,
      contents: [
        {
          id: 1,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/8d/d7/8dd7dca7-2952-5de6-9b4b-14750223a62b/8dd7dca729525de69b4b14750223a62b_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(117)`,
          country: "미국",
          title: "벤과 함께 완벽한 뉴욕 여행 계획하기",
          price: "₩21,559~",
        },
        {
          id: 2,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/1b/23/1b23cf49-a59c-5f17-9ac6-d7b50a0536da/1b23cf49a59c5f179ac6d7b50a0536da_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(13)`,
          country: "스페인",
          title: "젬마와 함께하는 바르셀로나 여행",
          price: "₩51,971~",
        },
        {
          id: 3,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2624432-active_media/original/5855d5db-a8b5-4eb3-b7ff-263d6ca3a915.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/ad/2e/ad2ef812-20b8-5bed-812a-5c22b14dff29/ad2ef81220b85bed812a5c22b14dff29_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(23)`,
          country: "영국",
          title: "린튼과 글렌의 런던 여행 계획",
          price: "₩40,540~",
        },
        {
          id: 4,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/a9/a9/a9a9f68a-f73a-5917-b046-c722c644e41c/a9a9f68af73a5917b046c722c644e41c_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(20)`,
          country: "한국",
          title: "제이와 함께하는 맞춤식 한국 여행",
          price: "₩32,000~",
        },
        {
          id: 5,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2505309-active_media/original/f541ef01-9f4f-4466-896c-56d1cd9a6207.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/5a/0d/5a0dbc31-5e23-5348-9c1d-0e0e50e8e28b/5a0dbc315e2353489c1d0e0e50e8e28b_4000k_1.mp4",
          score: "4.98",
          reviewcount: `\u00A0(56)`,
          country: "멕시코",
          title: "알차게 멕시코시티 여행을 계획하는 방법",
          originalprice: "₩26,184",
          price: "₩20,898~",
        },
        {
          id: 6,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(11)`,
          country: "스페인",
          title: "완벽한 바르셀로나 휴가 계획하기",
          originalprice: `₩20,484`,
          price: "₩16,412~",
        },
      ],
    },
    bestsellers: {
      id: "bestsellers",
      title: `베스트셀러 체험`,
      contents: [
        {
          id: 1,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/8d/d7/8dd7dca7-2952-5de6-9b4b-14750223a62b/8dd7dca729525de69b4b14750223a62b_4000k_1.mp4",
          score: "4.92",
          reviewcount: `\u00A0(2,458)`,
          country: "스페인",
          title: "'no Spain no Game' - 기발한 인터랙티브 가상 게임",
          price: "₩20,484~",
        },
        {
          id: 2,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/1b/23/1b23cf49-a59c-5f17-9ac6-d7b50a0536da/1b23cf49a59c5f179ac6d7b50a0536da_4000k_1.mp4",
          score: "4.90",
          reviewcount: `\u00A0(2,320)`,
          country: "미국",
          title: "거실에서 즐기는 전설의 보물찾기 게임",
          price: "₩19,120~",
        },
        {
          id: 3,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2624432-active_media/original/5855d5db-a8b5-4eb3-b7ff-263d6ca3a915.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/ad/2e/ad2ef812-20b8-5bed-812a-5c22b14dff29/ad2ef81220b85bed812a5c22b14dff29_4000k_1.mp4",
          score: "4.94",
          reviewcount: `\u00A0(2,131)`,
          country: "그리스",
          title: "'진실 혹은 거짓' 재미있는 역사 게임",
          price: "₩21,850~",
        },
        {
          id: 4,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/a9/a9/a9a9f68a-f73a-5917-b046-c722c644e41c/a9a9f68af73a5917b046c722c644e41c_4000k_1.mp4",
          score: "4.89",
          reviewcount: `\u00A0(359)`,
          country: "남아프리카",
          title: "실시간으로 즐기는 남아프리카 야생 동물 온라인 사파리",
          price: "₩32,000~",
        },
        {
          id: 5,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2505309-active_media/original/f541ef01-9f4f-4466-896c-56d1cd9a6207.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/5a/0d/5a0dbc31-5e23-5348-9c1d-0e0e50e8e28b/5a0dbc315e2353489c1d0e0e50e8e28b_4000k_1.mp4",
          score: "4.80",
          reviewcount: `\u00A0(86)`,
          country: "프랑스",
          title: "'From Paris with Laughs' The Scavenger Hunt",
          price: "₩19,119~",
        },
        {
          id: 6,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 7,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 8,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 9,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 10,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 11,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
        {
          id: 12,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(1,360)`,
          country: "영국",
          title: "해리 포터를 주제로 한 런던 온라인 투어",
          price: "₩19,437~",
        },
      ],
    },
    thisweekend: {
      id: "thisweekend",
      title: `이번 주말에 즐길 수 있는 체험`,
      contents: [
        {
          id: 1,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/8d/d7/8dd7dca7-2952-5de6-9b4b-14750223a62b/8dd7dca729525de69b4b14750223a62b_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(117)`,
          country: "미국",
          title: "벤과 함께 완벽한 뉴욕 여행 계획하기",
          price: "₩21,559~",
        },
        {
          id: 2,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/1b/23/1b23cf49-a59c-5f17-9ac6-d7b50a0536da/1b23cf49a59c5f179ac6d7b50a0536da_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(13)`,
          country: "스페인",
          title: "젬마와 함께하는 바르셀로나 여행",
          price: "₩51,971~",
        },
        {
          id: 3,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2624432-active_media/original/5855d5db-a8b5-4eb3-b7ff-263d6ca3a915.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/ad/2e/ad2ef812-20b8-5bed-812a-5c22b14dff29/ad2ef81220b85bed812a5c22b14dff29_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(23)`,
          country: "영국",
          title: "린튼과 글렌의 런던 여행 계획",
          price: "₩40,540~",
        },
        {
          id: 4,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/a9/a9/a9a9f68a-f73a-5917-b046-c722c644e41c/a9a9f68af73a5917b046c722c644e41c_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(20)`,
          country: "한국",
          title: "제이와 함께하는 맞춤식 한국 여행",
          price: "₩32,000~",
        },
        {
          id: 5,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2505309-active_media/original/f541ef01-9f4f-4466-896c-56d1cd9a6207.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/5a/0d/5a0dbc31-5e23-5348-9c1d-0e0e50e8e28b/5a0dbc315e2353489c1d0e0e50e8e28b_4000k_1.mp4",
          score: "4.98",
          reviewcount: `\u00A0(56)`,
          country: "멕시코",
          title: "알차게 멕시코시티 여행을 계획하는 방법",
          originalprice: "₩26,184",
          price: "₩20,898~",
        },
        {
          id: 6,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(11)`,
          country: "스페인",
          title: "완벽한 바르셀로나 휴가 계획하기",
          originalprice: `₩20,484`,
          price: "₩16,412~",
        },
      ],
    },
    organization: {
      id: "organization",
      title: `단체로 즐기기에 적합`,
      contents: [
        {
          id: 1,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/8d/d7/8dd7dca7-2952-5de6-9b4b-14750223a62b/8dd7dca729525de69b4b14750223a62b_4000k_1.mp4",
          score: "4.99",
          reviewcount: `\u00A0(117)`,
          country: "미국",
          title: "벤과 함께 완벽한 뉴욕 여행 계획하기",
          price: "₩21,559~",
        },
        {
          id: 2,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/2d2c8d93-f9fc-48c3-975a-84fec4fb951c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/1b/23/1b23cf49-a59c-5f17-9ac6-d7b50a0536da/1b23cf49a59c5f179ac6d7b50a0536da_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(13)`,
          country: "스페인",
          title: "젬마와 함께하는 바르셀로나 여행",
          price: "₩51,971~",
        },
        {
          id: 3,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2624432-active_media/original/5855d5db-a8b5-4eb3-b7ff-263d6ca3a915.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/ad/2e/ad2ef812-20b8-5bed-812a-5c22b14dff29/ad2ef81220b85bed812a5c22b14dff29_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(23)`,
          country: "영국",
          title: "린튼과 글렌의 런던 여행 계획",
          price: "₩40,540~",
        },
        {
          id: 4,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-poster/original/391d04f5-6823-4a9b-a7e4-c86968325e7c.jpeg?im_w=720",
          video:
            "https://a0.muscache.com/v/a9/a9/a9a9f68a-f73a-5917-b046-c722c644e41c/a9a9f68af73a5917b046c722c644e41c_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(20)`,
          country: "한국",
          title: "제이와 함께하는 맞춤식 한국 여행",
          price: "₩32,000~",
        },
        {
          id: 5,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2505309-active_media/original/f541ef01-9f4f-4466-896c-56d1cd9a6207.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/5a/0d/5a0dbc31-5e23-5348-9c1d-0e0e50e8e28b/5a0dbc315e2353489c1d0e0e50e8e28b_4000k_1.mp4",
          score: "4.98",
          reviewcount: `\u00A0(56)`,
          country: "멕시코",
          title: "알차게 멕시코시티 여행을 계획하는 방법",
          originalprice: "₩26,184",
          price: "₩20,898~",
        },
        {
          id: 6,
          image:
            "https://a0.muscache.com/im/pictures/lombard/MtTemplate-3034655-active_media/original/459c4653-6d08-4a44-9019-537287ca3be0.jpg?im_w=720",
          video:
            "https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
          score: "5.0",
          reviewcount: `\u00A0(11)`,
          country: "스페인",
          title: "완벽한 바르셀로나 휴가 계획하기",
          originalprice: `₩20,484`,
          price: "₩16,412~",
        },
      ],
    },
  });

  const [isLoading, setIsLoading] = React.useState(true);

  setTimeout(() => setIsLoading(false), 2000);

  const experienceElements = experiences.map((e) => {
    return (
      <div className={style.cardItem} style={{ backgroundImage: e.bgimage }}>
        <div className={style.itemDetail}>
          <span className={style.itemType}>{e.type}</span>
          <h3 className={style.itemTitle}>{e.title}</h3>
        </div>
        <button>모두 보기</button>
      </div>
    );
  });

  const filterElements = filters.map((f) => {
    return (
      <div className={style.filter}>
        <button className={style.filterBtn}>{f}</button>
      </div>
    );
  });

  const [filterX, setFilterX] = React.useState(0);
  const [leftHidden, setLeftHidden] = React.useState(`${style.hidden}`);
  const [rightHidden, setRightHidden] = React.useState(null);
  const [prevDisabled, setPrevDisabled] = React.useState(true);
  const [nextDisabled, setNextDisabled] = React.useState(false);

  function handleScroll() {
    const container = document.querySelector(`.${style.cardItems}`);
    if (container.scrollLeft > 0 && container.scrollLeft < 2008) {
      setPrevDisabled(false);
      setNextDisabled(false);
    } else if (container.scrollLeft == 2008) {
      setNextDisabled(true);
    } else {
      setPrevDisabled(true);
    }
  }

  function handleSlide() {
    const container = document.querySelector(`.${style.filters}`);
    if (container.scrollLeft == 0) {
      setLeftHidden(`${style.hidden}`);
    } else if (container.scrollLeft > 0 && container.scrollLeft < 440) {
      setLeftHidden(null);
      setRightHidden(null);
    } else if (container.scrollLeft >= 447) {
      setRightHidden(`${style.hidden}`);
    }
  }

  function goPrev() {
    const container = document.querySelector(`.${style.cardItems}`);
    container.scrollLeft -= 303;
  }

  function goNext() {
    const container = document.querySelector(`.${style.cardItems}`);
    container.scrollLeft += 303;
  }

  function slidePrev() {
    const container = document.querySelector(`.${style.filters}`);
    container.scrollLeft -= 447.5;
    setFilterX(container.scrollLeft);
  }

  function slideNext() {
    const container = document.querySelector(`.${style.filters}`);
    container.scrollLeft += 447.5;
    setFilterX(container.scrollLeft);
  }

  React.useEffect(() => {
    const container = document.querySelector(`.${style.cardItems}`);
    function scrollListener() {
      container.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  });

  React.useEffect(() => {
    const container = document.querySelector(`.${style.filters}`);
    function scrollListener() {
      container.addEventListener("scroll", handleSlide);
    }
    scrollListener();
    return () => {
      container.removeEventListener("scroll", handleSlide);
    };
  });

  return (
    <div>
      <Header fixed />
      <main className={style.main}>
        <div className={style.recentlyAddedItems}>
          <div className={style.recentlyAddedHeader}>
            <h1 className={style.recentlyAddedTitle}>이번 주 신규 등록 체험</h1>
            <div className={style.scrollBtns}>
              <button
                className={style.scrollBtnPrev}
                onClick={goPrev}
                disabled={prevDisabled}
              >
                <Leftbutton />
              </button>
              <button
                className={style.scrollBtnNext}
                onClick={goNext}
                disabled={nextDisabled}
              >
                <Rightbutton />
              </button>
            </div>
          </div>
          <div className={style.cardItems}>{experienceElements}</div>
        </div>
        <div className={style.conditionsFilters}>
          <div className={style.conditions}>
            <div className={style.condition}>
              <button className={style.conditionBtn}>날짜</button>
            </div>
            <div className={style.condition}>
              <button className={style.conditionBtn}>일행당 인원 수</button>
            </div>
            <div className={style.condition}>
              <button className={style.conditionBtn}>필터 추가하기</button>
            </div>
          </div>
          <div className={style.line}></div>
          <div className={style.filtersContainer}>
            <div className={style.filters}>
              <div className={`${style.leftBtn} ${leftHidden}`}>
                <button className={style.slideBtn} onClick={slidePrev}>
                  <SlideLeftbutton />
                </button>
              </div>
              {filterElements}
              <div className={`${style.rightBtn} ${rightHidden}`}>
                <button className={style.slideBtn} onClick={slideNext}>
                  <SlideRightbutton />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <h1 className={style.loading}>Loading...</h1>
        ) : (
          <>
            <OnlineCard items={products.plans} />
            <OnlineCard items={products.bestsellers} />
            <OnlineCard items={products.thisweekend} />
            <OnlineCard items={products.organization} />
          </>
        )}
      </main>
      <Footer maxwidth="1600px" />
    </div>
  );
}
