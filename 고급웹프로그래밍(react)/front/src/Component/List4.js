/* eslint-disable no-case-declarations */
import React from "react";

import { List1, Main1, Check, CheckBox, A, Menu } from "./ListStyle";

function LIST4() {
  return (
    <Main1>
      <List1>
        <A>
          <Check>
            <CheckBox></CheckBox>
          </Check>
          <Menu>
            위치: AFEW-STORE, 상품: 나이키 덩크 로우 그레이 포그 날찌:2022-06-24
            가격: 129000원
          </Menu>
        </A>
      </List1>

      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: BODEGA, 상품: 나이키 ISPA 링크 블랙 앤드 미디엄
              날찌:2022-06-25 가격: 159000원
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: FOOTSHOP, 상품: 나이키 덩크 로우 NH 카카오 로유
              날짜:2022-06-25 가격: 219000원
            </Menu>
          </A>
        </Check>
      </List1>
    </Main1>
  );
}

export default LIST4;
