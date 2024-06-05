import { useState } from "react";
import BottomButton from "../../components/BottomButton/BottomButton";
import Home from "../../components/Home/Home";
import { MainContainer } from "./styles";

export default function MainPage() {
  const [bottomTab, setBottomTab] = useState(1);



  return (
    <MainContainer>
      <Home />
      <BottomButton
        bottomTab={bottomTab}
        clickTab={(tab)=>setBottomTab(tab)}
      />
    </MainContainer>
  );
}
