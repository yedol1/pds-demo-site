---
title: Dropdown List
createdAt: '2023-08-10'
---

유저의 클릭이벤트와 상호작용하는 Dropdown 컴포넌트입니다.<br/>
두가지 유형의 Dropdown 컴포넌트를 사용할 수 있습니다.

- **ListDropdown**

  | props        | value                        | meaning                                                                       |
  | ------------ | ---------------------------- | ----------------------------------------------------------------------------- |
  | **category** | **string**                   | 좌측에 표시 될 대분류를 알려주는 텍스트입니다.( 필수⭕ )                      |
  | **items**    | **string[]**                 | 좌측에 표시 된 대분류에 속하는 값들입니다.( 필수⭕ )                          |
  | **value**    | **string**                   | 유저가 선택한 값과 바인딩되는 값입니다.( 필수⭕ )                             |
  | **width**    | **string**                   | 사용자가 지정해주는 너비값입니다.( 필수⭕ )                                   |
  | **onChange** | **(params: string) => void** | 리스트를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ )                  |
  | **onClose**  | **(params: string) => void** | 우측의 닫기 버튼 클릭 시 해당 리스트의 값을 인자로 받는 함수입니다.( 필수⭕ ) |

```jsx
...
<Cmp.ListDropdown
  category={'오른쪽 다리'}
  items={itemList}
  value={value}
  onChange={(selected) => onSelect(selected)}
  onClose={(selected) => onClose(selected)}
  width='31.3rem'
></Cmp.ListDropdown>
...
```
