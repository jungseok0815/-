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
            위치: A MA MANIERE, 상품: 에어 조던 9 파티클 그레이 가격: 200$
          </Menu>
        </A>
      </List1>

      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: A MA MANIERE, 상품: 에어 조던 9 래트로 GS 파티클 그레이
              가격: 200$
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: NIKE US, 상품: 나이크 덩크 하이 챔피언쉽 화이트 가격: 130$
            </Menu>
          </A>
        </Check>
      </List1>
      <List1>
        <Check>
          <A>
            <CheckBox></CheckBox>
            <Menu>
              위치: NIKE US, 상품: 나이크 덩크 하이 챔피언쉽 화이트 GS 가격:
              130$
            </Menu>
          </A>
        </Check>
      </List1>
    </Main1>
  );
}

export default LIST;
