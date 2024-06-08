import { useState } from "react";
import { ModalBg, ModalContainer } from "../../../style/GlobalStyle";
import {
  ChoiceListContainer,
  ChoiceListItem,
  ChoiceSubtitle,
  ChoiceTitle,
} from "./styles";

interface HouseNameType {
  houseName : string[]
  isModalOpen : boolean;
  onCLose: () => void;
}
export default function ChoiceModal({houseName , isModalOpen,onCLose} : HouseNameType) {
  const [selectedItem, setSelectedItem] = useState("딸기 하우스");
  return (
    <ModalBg isVisible={isModalOpen}>
      <ModalContainer isVisible={isModalOpen}>
        <ChoiceTitle>작업장 선택</ChoiceTitle>
        <ChoiceSubtitle>아래 리스트 중 선택해 주세요</ChoiceSubtitle>
        <ChoiceListContainer>
          {houseName.map((houseName) => (
            <ChoiceListItem
              key={houseName}
              selected={houseName === selectedItem}
              onClick={() => {
                setSelectedItem(houseName)
                onCLose()
              }}
            >
              {houseName}
              {houseName === selectedItem && <span>선택 중</span>}
            </ChoiceListItem>
          ))}
        </ChoiceListContainer>
      </ModalContainer>
    </ModalBg>
  );
}
