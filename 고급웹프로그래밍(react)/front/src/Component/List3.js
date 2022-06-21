/* eslint-disable no-case-declarations */
import React from "react";

import { List1, Main1, Check, CheckBox, A, Menu } from "./ListStyle";

function LIST3() {
  return (
    <Main1>
      <List1>
        <A>
          <Check>
            <CheckBox></CheckBox>
          </Check>
          <Menu>
            위치: 뉴발란스, 상품: 에임 에론 도르x 뉴발란스 p550 퍼플
            날찌:2022-06-22 가격: 129000원
          </Menu>
        </A>
      </List1>

      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: 뉴발란스, 상품: 에임 에론 도르x 뉴발란스 p550 브라운
              날찌:2022-06-22 가격: 129000원
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: 나이키, 상품: 오프화이트x나이키 에어포스1 미드 화이트
              날짜:2022-0623 가격: 219000원
            </Menu>
          </A>
        </Check>
      </List1>
    </Main1>
  );
}

export default LIST3;
