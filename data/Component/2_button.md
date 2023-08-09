---
title: Button
createdAt: '2023-08-10'
---

사용자가 원하는 크기와 상태를 지정하면, 그에 맞는 컴포넌트를 불러올 수 있습니다.

| props        | value                                                         | meaning                                                          |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| **size**     | 'x-small' , 'small' , 'medium' , 'large' , 'x-large' , 'full' | 지정된 사이즈 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ ) |
| **state**    | 'normal' , 'enabled' , 'disabled'                             | 지정된 상태를 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )      |
| **children** | ReactNode                                                     | 입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수⭕ )             |

1️⃣ Contained 스타일

```jsx
...
<Cmp.Button.Contained size='x-small' state='disabled'>
  {'버튼'}
</Cmp.Button.Contained>
...
```

2️⃣ Outline 스타일

```jsx
...
<Cmp.Button.Outline size='x-small' state='disabled'>
  {'버튼'}
</Cmp.Button.Outline>
...
```
