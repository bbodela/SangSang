import styled, { css } from "styled-components";
import color from "../../../styles/colors";
import useModal from "../../../utils/useModal";
import ChangePhoneNum from "../../component/Modal/MP_ChangePhoneNum";
import ChangePassword from "../../component/Modal/MP_ChangePassword";
import { useRouter } from "next/router";

import axios from "axios";
import { memo, useState, useEffect } from "react";

const data = {
  image: "/assets/image/PL/logo.png",
  aboutProvider: `㈜문화공작소 상상마루는 어린이와 가족을 위한 문화예술분야 소셜벤처기업으로
  ‘우리 이야기로 세계를 감동시키는 문화 상상집단’을 모토로 하고 있습니다.`,
  fullName: "김상상",
  phone: "010-1234-5678",
  email: "abcdefghi@naver.com",
  password: "********",
};

const InfoBox_Modify = () => {
  const router = useRouter();
  const { image, aboutProvider, fullName, phone, email, password } = data;
  const { ModalPortal, openModal, closeModal } = useModal();
  const [modal, setModal] = useState("");

  const changeModalHandler = (name) => {
    if (name === "phone") {
      setModal("phone");
      openModal();
    }
    if (name === "password") {
      setModal("password");
      openModal();
    }
    if (name === "unsubscribe") {
      setModal("unsubscribe");
      openModal();
    }
  };

  const onLogOut = () => {
    // axios.post("/auth/logout").then((res) => {
    //   mutate(false, false);
    router.push("/provider");
    // });
  };

  return (
    <div>
      <Section1>
        <ProfileImageContainer>
          <img src={image} />
        </ProfileImageContainer>
        <ProfileName>
          상상마루<Btn onClick={onLogOut}>로그아웃</Btn>
        </ProfileName>
        <TextBox>{aboutProvider}</TextBox>
      </Section1>
      <Section2>
        <Box>
          <List>
            <SubTitles>
              <SubTitle>이름</SubTitle>
              <SubTitle>연락처</SubTitle>
              <SubTitle>이메일</SubTitle>
              <SubTitle>비밀번호</SubTitle>
            </SubTitles>
            <Item>
              <Content>
                <Data>{fullName}</Data>
              </Content>
              <Content>
                <Data>{phone}</Data>
                <BtnContainer>
                  <ChangeBtn onClick={() => changeModalHandler("phone")}>
                    변경
                  </ChangeBtn>
                </BtnContainer>
              </Content>
              <Content>
                <Data>{email}</Data>
              </Content>
              <Content>
                <Data>{password}</Data>
                <BtnContainer>
                  <ChangeBtn onClick={() => changeModalHandler("password")}>
                    변경
                  </ChangeBtn>
                </BtnContainer>
              </Content>
            </Item>
          </List>
        </Box>
      </Section2>
      <ModalPortal>
        {modal === "phone" && <ChangePhoneNum onClickHandler={closeModal} />}
        {modal === "password" && <ChangePassword onClickHandler={closeModal} />}
      </ModalPortal>
    </div>
  );
};

const Section1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${color.white};
  margin-bottom: 32px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  & > img {
    width: 98px;
    height: auto;
  }
`;

const ProfileName = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 32px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black2};
`;

const Btn = styled.div`
  border-radius: 4px;
  padding: 8px 8.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 12px;
  cursor: pointer;
  margin-left: 30px;
  background-color: ${color.blue_2};
`;

const TextBox = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  background-color: ${color.gray1};
  border-radius: 8px;
  font-size: 10px;
  line-height: 15px;
  width: 326px;
  padding: 15px 60px;
`;

const Section2 = styled.div`
  width: 100%;
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  border-radius: 14px;
  border: 2px solid ${color.gray1};
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  border-top-left-radius: 14px;
`;

const SubTitles = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Bold";
  color: ${color.black1};
  background-color: ${color.gray1};
  padding: 21px 0;
  /* height: 56px; */
  border-bottom: 1px solid ${color.black5};
  :first-child {
    border-top-left-radius: 12px;
  }
  :last-child {
    border: none;
    border-bottom-left-radius: 12px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 21px 0;
  border-bottom: 1px solid ${color.black5};
  :last-child {
    border: none;
  }
`;

const Data = styled.div`
  display: flex;
  line-height: 30px;
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black1};
  max-width: 384px;
  padding-left: 13%;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 13%;
`;

const BtnStyle = css`
  border-radius: 4px;
  padding: 8px 8.14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  font-family: "NotoSansCJKkr-Bold";
  font-size: 12px;
  letter-spacing: -0.5px;
  line-height: 12px;
  cursor: pointer;
`;

const ChangeBtn = styled.div`
  ${BtnStyle};
  background-color: ${color.orange};
  padding: 8px 8px;
`;

export default memo(InfoBox_Modify);
