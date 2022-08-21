import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function MainPage() {
	const navigate = useNavigate();
	const goCreate = () => {
		navigate("/create");
	};
	return (
		<MainContainer>
			<TitleText>설문조사를 생성 또는 작성할 수 있습니다.</TitleText>
			<BtnCreateContainer onClick={goCreate}>
				<BtnCreateContent>
					<BtnCreateText>생성하기</BtnCreateText>
				</BtnCreateContent>
			</BtnCreateContainer>
			<BtnWriteContainer>
				<BtnWriteContent>
					<BtnWriteText>작성하기</BtnWriteText>
				</BtnWriteContent>
			</BtnWriteContainer>
		</MainContainer>
	);
}
export default MainPage;

const MainContainer = styled.div`
	position: absolute;
	left: 200px;
	right: 200px;
	top: 120px;
	bottom: 120px;

	background: linear-gradient(180deg, #69c0ff 0%, #6993ff 100%);
	border-radius: 8px;
	min-width: 1200px;
`;

const TitleText = styled.div`
	position: absolute;
	width: 420px;
	height: 122px;
	left: 100px;
	top: 252px;

	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: 400;
	font-size: 38px;
	line-height: 160%;

	color: #e6f7ff;
`;

const BtnCreateContainer = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px 24px;
	gap: 8px;

	position: absolute;
	width: 122px;
	height: 44px;
	left: 100px;
	top: 428px;

	background: #002766;
	border-radius: 2px;
`;

const BtnCreateContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 8px;

	width: 74px;
	height: 28px;

	flex: none;
	order: 0;
	flex-grow: 0;
`;

const BtnCreateText = styled.div`
	width: 74px;
	height: 28px;

	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;

	color: #e6f7ff;

	flex: none;
	order: 1;
	flex-grow: 0;
`;

const BtnWriteContainer = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px 24px;
	gap: 8px;

	position: absolute;
	width: 122px;
	height: 44px;
	left: 100px;
	top: 488px;

	background: #e6f7ff;
	border-radius: 2px;
`;

const BtnWriteContent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 8px;

	width: 74px;
	height: 28px;

	flex: none;
	order: 0;
	flex-grow: 0;
`;

const BtnWriteText = styled.div`
	width: 74px;
	height: 28px;

	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;

	color: #002766;

	flex: none;
	order: 1;
	flex-grow: 0;
`;
