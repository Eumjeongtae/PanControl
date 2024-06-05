import { BottomButtonBox, BottomButtons } from "./styles";

interface propsBtn {
    bottomTab: number;
    clickTab: (tab: number) => void;
}

export default function BottomButton({ bottomTab, clickTab }: propsBtn) {


    return (
        <BottomButtonBox>
            <BottomButtons onClick={() => clickTab(1)}>
                {bottomTab === 1 ?
                    <img src="./img/bottomImg/bottom_menu_ico1_active.png" alt="" />
                    :
                    <img src="./img/bottomImg/bottom_menu_ico1.png" alt="" />
                }
                <span className={`${bottomTab === 1 ? 'on' : ''}`}>홈</span>
            </BottomButtons>
            <BottomButtons onClick={() => clickTab(2)}>
                {bottomTab === 2 ?
                    <img src="./img/bottomImg/bottom_menu_ico2_active.png" alt="" />
                    :
                    <img src="./img/bottomImg/bottom_menu_ico2.png" alt="" />
                }
                <span className={`${bottomTab === 2 ? 'on' : ''}`}>팬 / 그룹관리</span>
            </BottomButtons>
            <BottomButtons onClick={() => clickTab(3)}>
                {bottomTab === 3 ?
                    <img src="./img/bottomImg/bottom_menu_ico3_active.png" alt="" />
                    :
                    <img src="./img/bottomImg/bottom_menu_ico3.png" alt="" />
                }
                <span className={`${bottomTab === 3 ? 'on' : ''}`}>작업장 관리</span>
            </BottomButtons>
            <BottomButtons onClick={() => clickTab(4)}>
                {bottomTab === 4 ?
                    <img src="./img/bottomImg/bottom_menu_ico4_active.png" alt="" />
                    :
                    <img src="./img/bottomImg/bottom_menu_ico4.png" alt="" />
                }
                <span className={`${bottomTab === 4 ? 'on' : ''}`}>에너지 통계</span>
            </BottomButtons>
        </BottomButtonBox>
    )
}