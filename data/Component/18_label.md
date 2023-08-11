---
title: Label
createdAt: '2023-08-10'
---

사용자가 원하는 모양과 색깔을 지정하여 Label 컴포넌트를 불러와 사용할 수 있습니다.

| props         | value                                  | meaning                               |
| ------------- | -------------------------------------- | ------------------------------------- |
| **type**      | **Rectangle**, **Round**               | 라벨의 모양을 선택합니다.( 필수⭕ )   |
| **bgcolor**   | **Blue**, **Gray**, **Green**          | 라벨의 배경색을 선택합니다.( 필수⭕ ) |
| **fontcolor** | **Blue**, **Gray**, **Green**, **Red** | 라벨의 글씨색을 선택합니다.( 필수⭕ ) |

1️⃣ Rectangle 스타일

```jsx
<Cmp.Label type="Rectangle" bgcolor="Blue" fontcolor="Blue">
  {'라벨'}
</Cmp.Label>
```

2️⃣ Round 스타일

```jsx
<Cmp.Label type="Round" bgcolor="Blue" fontcolor="Blue">
  {'라벨'}
</Cmp.Label>
```
