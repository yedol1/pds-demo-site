---
title: Dialog
createdAt: '2023-08-10'
---

지정된 너비와 텍스트에 따라 가변 높이값을 가지는 Dialog를 사용할 수 있습니다.<br/>
넘치는 텍스트의 경우 말줄임 스타일을 주어 일정 높이를 벗어나지 못합니다.

| props              | value        | meaning                                                         |
| ------------------ | ------------ | --------------------------------------------------------------- |
| **title**          | `string`     | 볼드체의 텍스트가 표시됩니다.( 필수⭕ )                         |
| **description**    | `string`     | `title` 밑으로 텍스트가 표시됩니다.( 필수❌ )                   |
| **grayButtonName** | `string`     | 회색 버튼에 텍스트가 표시됩니다.( 필수⭕ )                      |
| **priButtonName**  | `string`     | 파란 버튼에 텍스트가 표시됩니다.( 필수❌ )                      |
| **onCloseEffect**  | `() => void` | 우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수⭕ )            |
| **onGrayEffect**   | `() => void` | 회색 버튼을 누르면 실행됩니다.( 필수⭕ )                        |
| **onPriEffect**    | `() => void` | 파란 버튼을 누르면 실행됩니다.( 필수❌ )                        |
| **isOpen**         | `boolean`    | 해당 상태에 따라 다이얼로그의 렌더 여부가 결정됩니다.( 필수⭕ ) |

```jsx
...
<Cmp.Dialog
  isOpen={BooleanState}
  title={'Title'}
  description={'Description'}
  grayButtonName={'Button 1'}
  priButtonName={'Button 2'}
  onGrayEffect={() => console.log('clicked gray')}
  onPriEffect={() => console.log('clicked pri')}
  onCloseEffect={() => console.log('clicked close')}
/>;
...
```
