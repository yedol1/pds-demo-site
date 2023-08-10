---
title: Dialog
createdAt: '2023-08-10'
---

지정된 너비와 텍스트에 따라 가변 높이값을 가지는 **Dialog**를 사용할 수 있습니다.<br/>
넘치는 텍스트의 경우 말줄임 스타일을 주어 일정 높이를 벗어나지 못합니다.(마우스 오버시 모든 내용을 확인할 수 있습니다.)<br/>
**Dialog**의 버튼을 사용하여, 유저가 커스텀 이벤트를 발생시킬 수 있습니다.<br/>
우측 상단의 닫기버튼을 클릭 시 실행할 로직은 함수의 형태로 넘겨주어야 합니다.

| props             | value          | meaning                                                         |
| ----------------- | -------------- | --------------------------------------------------------------- |
| **title**         | **string**     | 볼드체의 텍스트가 표시됩니다.( 필수⭕ )                         |
| **description**   | **string**     | **title** 밑으로 텍스트가 표시됩니다.( 필수❌ )                 |
| **onCloseEffect** | **() => void** | 우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수⭕ )            |
| **isOpen**        | **boolean**    | 해당 상태에 따라 다이얼로그의 렌더 여부가 결정됩니다.( 필수⭕ ) |

```jsx
<Cmp.Dialog.Display
  isOpen={BooleanState}
  title={'Title'}
  description={'Description'}
  onCloseEffect={onCloseDialog} // Custom Function
>
  <Cmp.Dialog.GrayButton onClick={...something custom logic...}>GrayBtn</Cmp.Dialog.GrayButton>
  <Cmp.Dialog.PriButton>PriBtn</Cmp.Dialog.PriButton>
</Cmp.Dialog.Display>
```
