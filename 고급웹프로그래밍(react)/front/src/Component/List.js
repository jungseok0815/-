/* eslint-disable no-case-declarations */
import React from "react";

import { List1, Main1, Check, CheckBox, A, Menu } from "./ListStyle";

function LIST() {
  return (
    <Main1>
      <List1>
        <A>
          <Check>
            <CheckBox></CheckBox>
          </Check>
          <Menu>
            위치: 나이키 공식 홈페이지, 상품: 오프화이트x나이키 에어포스 블랙
            가격: 219000원
          </Menu>
        </A>
      </List1>

      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: 나이키 공식 홈페이지, 상품: 오프화이트x나이키 에어포스
              화이트 가격: 219000원
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: 나이키 코엑스점, 상품: 나이키 덩크 로우 리버스 판다 화이트
              가격: 129000원
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: 카시나 성수, 상품: 나이키 에어 맥스 97 OG 아틀란틱 화이트
              가격: 219000원
            </Menu>
          </A>
        </Check>
      </List1>
    </Main1>
  );
}

export default LIST;
