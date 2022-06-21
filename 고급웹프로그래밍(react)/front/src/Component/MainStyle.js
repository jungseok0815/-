import styled from "styled-components";

const MainTitle = styled.div`
  width: 400px;
  height: 80px;
  display: inline-block;
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 20px;
  font-size: 30pt;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TodayKoreaRaffle = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  margin-left: 10%;
  border: solid 10px;
  font-size: 15pt;
`;
const TodayOtherCountriesRffle = styled.div`
  width: 350px;
  height: 350px;
  margin-right: 10%;
  background-color: white;
  border: solid 10px;
  font-size: 15pt;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
`;
const KoreaRaffle = styled.div`
  width: 350px;
  height: 250px;
  background-color: white;
  margin-left: 10%;
  border: solid 10px;
  font-size: 15pt;
`;
const OtherCountriesRffle = styled.div`
  width: 350px;
  height: 250px;
  background-color: white;
  margin-right: 10%;
  border: solid 10px;
  font-size: 15pt;
`;

export {
  MainTitle,
  Top,
  TodayKoreaRaffle,
  TodayOtherCountriesRffle,
  Bottom,
  KoreaRaffle,
  OtherCountriesRffle,
};
