---
title: Navigation Top
createdAt: '2023-08-10'
---

원하는 페이지를 입력하면 형식에 맞는 네비게이션바가 나타납니다.

#### NavBarTop

| props          | value                    | meaning                                                           |
| -------------- | ------------------------ | ----------------------------------------------------------------- |
| **page**       | **'default','menulist'** | 입력하면 해당 페이지에 맞는 네비게이션바가 지정됩니다. ( 필수⭕ ) |
| **menuList**   | **string[]**             | 메뉴 리스트를 등록할 수 있습니다. ( 필수❌ )                      |
| **selected**   | **number**               | 선택될 메뉴리스트 인덱스 번호를 선택합니다. ( 필수❌ )            |
| **memberName** | **string**               | 로그인 된 사용자의 이름을 입력합니다. ( 필수❌ )                  |

```jsx
...
<Cmp.NavBarTop
  page='menulist'
  menuList={['내 정보', '공지사항', '앱 설정', '운영데이터']}
  selected={0}
  memberName='박관리자01'
/>
...
```
