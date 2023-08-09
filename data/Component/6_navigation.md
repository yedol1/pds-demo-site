---
title: Navigation
createdAt: '2023-08-10'
---

원하는 페이지를 입력하면 형식에 맞는 네비게이션바가 나타납니다.

#### NavigationTop

| props    | value                                                          | meaning                                                           |
| -------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **page** | 'home','reserve','memeber','center','mypage' ( 기본 : 'home' ) | 입력하면 해당 페이지에 맞는 네비게이션바가 지정됩니다. ( 필수❌ ) |

#### NavigationBottom

| props    | value                                                          | meaning                                                           |
| -------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| **page** | 'home','reserve','memeber','center','mypage' ( 기본 : 'home' ) | 입력하면 해당 페이지에 맞는 네비게이션바가 지정됩니다. ( 필수❌ ) |

```jsx
...
<Cmp.NavigationBarTop page='center' />
<Cmp.NavigationBarBottom page='home' />
...
```
