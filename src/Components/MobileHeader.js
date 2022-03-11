import React from "react";
import styled from "styled-components";
import { ReactComponent as Previous } from "../img/previouspage.svg";
import { ReactComponent as Filter } from "../img/filter.svg";
const StHeader = styled.header`
  display: none;

  @media screen and (max-width: 743px) {
    display: -webkit-box;
    width: 100vw;
  }
`;

const StHeaderWrapper = styled.div`
  display: block;
  position: relative;
  background-color: white;
  width: 100%;
`;

const StHeaderContainer = styled.div`
    -webkit-box-align: center;
    display: flex;
    width: 100%:
    height: 48px;
    margin: 18px 0 4px 0;
    padding: 0 8px;
    align-items: center;
`;

const StPreviousBtn = styled.div`
  display: flex;
  height: 48px;
  flex-shrink: 0;
  flex-basis: 48px;
  justify-content: center;
  align-items: center;
`;

const StMainController = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-width: 0px;
`;

const StListBoxContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 24px;
  background-color: #f7f7f7;
`;

const StListBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StList = styled.li`
  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }
`;

const StListBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
`;

const StListDivider = styled.span`
  width: 1px;
  height: 1px;
  backgroudn-color: #717171;
`;

const StListText = styled.div`
  font-size: 14px;
  line-height: 1.2857142857;
`;

const StDetailFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 48px;
  height: 48px;
  flex-shrink: 0;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`;

const StDetailFilterBtn = styled.button`
    display: block;
    height: 100%:
    width: 100%;
    background-color: transparent;
  `;
export default function MobileHeader() {
  return (
    <StHeader>
      <StHeaderWrapper>
        <StHeaderContainer>
          <StPreviousBtn>
            <Previous />
          </StPreviousBtn>
          <StMainController>
            <div>
              <StListBoxContainer>
                <StListBox>
                  <StList>
                    <StListBtn>
                      <StListText>언제든</StListText>
                    </StListBtn>
                  </StList>
                  <StListDivider></StListDivider>
                  <StList>
                    <StListBtn>
                      <StListText>게스트 추가</StListText>
                    </StListBtn>
                  </StList>
                </StListBox>
              </StListBoxContainer>
            </div>
          </StMainController>
          <StDetailFilter>
            <StDetailFilterBtn>
              <Filter />
            </StDetailFilterBtn>
          </StDetailFilter>
        </StHeaderContainer>
      </StHeaderWrapper>
    </StHeader>
  );
}
