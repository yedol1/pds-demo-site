---
title: Navigation Bottom
createdAt: '2023-08-10'
---

원하는 페이지를 입력하면 형식에 맞는 네비게이션바가 나타납니다.

#### NavigationBottom

| props        | value       | meaning                                                                                          |
| ------------ | ----------- | ------------------------------------------------------------------------------------------------ |
| **selected** | **string**  | 선택될 메뉴리스트 이름('home', 'reserve', 'member', 'center', 'mypage')을 입력합니다. ( 필수⭕ ) |
| **isLabel**  | **boolean** | 메뉴 리스트의 라벨(이름)을 표시합니다. ( 필수⭕ )                                                |

```jsx
<Cmp.NavBarBottom selected={'home'} isLabel={true} />
```
