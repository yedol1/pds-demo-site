---
title: Dropdown General
createdAt: '2023-08-10'
---

유저의 클릭이벤트와 상호작용하는 **Dropdown** 컴포넌트입니다.<br/>
두가지 유형의 **Dropdown** 컴포넌트를 사용할 수 있습니다.

- **Dropdown**

  | props           | value                        | meaning                                                                           |
  | --------------- | ---------------------------- | --------------------------------------------------------------------------------- |
  | **value**       | **string**                   | 유저가 선택한 값과 바인딩되는 값입니다.( 필수⭕ )                                 |
  | **items**       | **string[]**                 | 선택해야하는 목록의 값들 입니다.( 필수⭕ )                                        |
  | **title**       | **string**                   | 어떤 드롭다운인지 설명해주는 상단에 표시되는 텍스트입니다.( 필수⭕ )              |
  | **placeholder** | **string**                   | 초기에 표시 될 텍스트입니다. **value**가 있다면 **value**가 표시됩니다.( 필수⭕ ) |
  | **onChange**    | **(params: string) => void** | 리스트를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ )                      |
  | **width**       | **string**                   | 사용자가 지정해주는 너비값입니다.( 필수⭕ )                                       |
  | **disabled**    | **boolean**                  | 사용가능 여부를 나타내는 값입니다. **true**이면 스타일도 바뀝니다.( 필수❌ )      |

```jsx
...
<Cmp.Dropdown
  title={'title'}
  placeholder={'placeholder'}
  value={value}
  items={items}
  onChange={(selected) => setValue(selected)}
  width='30rem'
  disabled={false}
></Cmp.Dropdown>
...
```
