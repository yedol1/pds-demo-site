---
title: PopupMenu
createdAt: '2023-08-10'
---

사용자가 최대 4개의 아이템 리스트를 넣으면, 그에 해당하는 컴포넌트가 출력됩니다.

| props          | value                                      | meaning                                                               |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| **headerType** | 'NavigationBar' , 'AppBar'                 | 상단에 어떤 header 가 존재하는지에 따라 마진값이 다릅니다. ( 필수❌ ) |
| **itemList**   | [string?],[string?, string?].. 튜플 총 4개 | 배열에 아이템 리스트 최대 4개 까지 설정가능합니다. ( 필수⭕ )         |

```jsx
...
<Cmp.PopupMenu
  headerType='NavigationBar'
  itemList={['item1', 'item2', 'item3', 'item4']}
/>
...
```
