---
title: SelectionControls
createdAt: '2023-08-10'
---

체크박스 와 라디오 중 원하는 컨트롤러를 불러올 수 있습니다.

| props         | value                               | meaning                                                                                                                      |
| ------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **inputAttr** | **{type : 'checkbox', 'radio' , }** | type 속성은 체크박스와 라디오 중 선택 가능합니다.( 필수⭕ ) 이외에 input 태그와 같은 속성값을 사용할 수 있습니다. ( 필수❌ ) |
| **labelAttr** | **{content : string , }**           | content 속성에 문자열 입력 시 내용이 나타납니다. ( 필수❌ ) 이외에 label 태그와 같은 속성값을 사용할 수 있습니다. ( 필수❌ ) |

```jsx
<Fnd.SelectionControlsStyles
  inputAttr={{ type: 'checkbox', id: 'hello' }}
  labelAttr={{ content: '선택1', htmlFor: 'hello' }}
/>
```
