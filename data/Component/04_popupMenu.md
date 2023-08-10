---
title: PopupMenu
createdAt: '2023-08-10'
---

사용자가 최대 **4개의 아이템 리스트**를 넣으면, 그에 해당하는 컴포넌트가 출력됩니다.

| props             | value                      | meaning                                                                                   |
| ----------------- | -------------------------- | ----------------------------------------------------------------------------------------- |
| **$headerType**   | 'NavigationBar' , 'AppBar' | Display의 props 로, 상단에 어떤 header 가 존재하는지에 따라 마진값이 다릅니다. ( 필수❌ ) |
| **item**          | string                     | List 의 props 로, 리스트 아이템 명 ( 필수⭕ )                                             |
| **[key: string]** | any                        | List 의 props 로, 리스트에 어떠한 속성도 내려줄수있다. ( 필수⭕ )                         |

```jsx
function App() {
  return (
    <>
      <Cmp.PopupMenu.Display $headerType={'NavigationBar'}>
        <Cmp.PopupMenu.List item="List 1" onClick={() => alert('List 1')} />
        <Cmp.PopupMenu.List item="List 2" onClick={() => alert('List 2')} />
        <Cmp.PopupMenu.List item="List 3" onClick={() => alert('List 3')} />
        <Cmp.PopupMenu.List item="List 4" onClick={() => alert('List 4')} />
      </Cmp.PopupMenu.Display>
    </>
  );
}
```
