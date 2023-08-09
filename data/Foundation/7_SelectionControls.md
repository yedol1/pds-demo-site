---
title: SelectionControls
createdAt: '2023-08-10'
---

체크박스 와 라디오 중 원하는 컨트롤러를 불러올 수 있습니다.

| props        | value              | meaning                                                         |
| ------------ | ------------------ | --------------------------------------------------------------- |
| **type**     | 'checkbox','radio' | 체크박스와 라디오 중 선택 가능합니다. ( 필수⭕ )                |
| **selected** | boolean            | 선택되었을때와 그렇지 않았을때를 선택할 수 있습니다. ( 필수❌ ) |
| **disabled** | boolean            | 동작의 가능유무를 선택할 수 있습니다. ( 필수❌ )                |

```jsx
...
<Fnd.SelectionControlsStyles type='radio' selected={true} disabled={false} />
...
```
