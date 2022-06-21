/* eslint-disable no-case-declarations */
import React from "react";
import LIST from "./List";
import LIST2 from "./List2";
import LIST3 from "./List3";
import LIST4 from "./List4";

import {
  MainTitle,
  TodayKoreaRaffle,
  TodayOtherCountriesRffle,
  KoreaRaffle,
  OtherCountriesRffle,
  Top,
  Bottom,
} from "./MainStyle";

function Main() {
  return (
    <main>
      <MainTitle>Raffle drow</MainTitle>
      <Top>
        <TodayKoreaRaffle>
          TodayKoreaRaffle
          <LIST />
        </TodayKoreaRaffle>
        <TodayOtherCountriesRffle>
          TodayOtherCountriesRffle
          <LIST2 />
        </TodayOtherCountriesRffle>
      </Top>
      <Bottom>
        <KoreaRaffle>
          KoreaRaffle
          <LIST3 />
        </KoreaRaffle>
        <OtherCountriesRffle>
          OtherCountriesRffle
          <LIST4 />
        </OtherCountriesRffle>
      </Bottom>
    </main>
  );
}

export default Main;
