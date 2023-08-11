---
title: FAB Button
createdAt: '2023-08-10'
---

두가지 스타일의 Floating Action Button을 선택하여 사용할 수 있습니다.

| props             | value          | meaning                                                    |
| ----------------- | -------------- | ---------------------------------------------------------- |
| **onClickEffect** | **() => void** | 버튼을 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |

1️⃣ Circle 스타일

```jsx
<Cmp.ButtonFAB.Circle
  onClickEffect={() => void}
/>
```

2️⃣ Round 스타일

```jsx
<Cmp.ButtonFAB.Round onClickEffect={() => void}>
  { '버튼' }
</Cmp.ButtonFAB.Round>
```
