---
title: Layout
createdAt: '2023-08-10'
---

원하는 사이즈와 시스템 종류에 맞는 레이아웃이 도출이 됩니다.

| props      | value                                       | meaning                                                       |
| ---------- | ------------------------------------------- | ------------------------------------------------------------- |
| **size**   | **'tablet','pc','phone' ( 기본 : tablet )** | 입력하면 해당 사이즈에 맞는 레이아웃이 지정됩니다. ( 필수❌ ) |
| **system** | **'android','ios' ( 기본 : android )**      | 입력하면 해당 시스템에 맞는 레이아웃이 지정됩니다. ( 필수❌ ) |

```jsx
...
<Fnd.LayoutStyles size='tablet' system='android'>
    Hello World
</Fnd.LayoutStyles>;
...
```
