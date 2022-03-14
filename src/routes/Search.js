import React from "react";
import FixedHeader from "../Components/FixedHeader";
import style from "../Components/css/SearchPanel.module.css";
import { ReactComponent as SearchButton } from "../img/search.svg";
import styled from "styled-components";

export default function Search() {
  return (
    <div>
      <FixedHeader panel="panel" />
    </div>
  );
}
