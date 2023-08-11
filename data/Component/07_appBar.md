---
title: AppBar
createdAt: '2023-08-10'
---

원하는 사이즈와 타입에 따른 앱바가 나타납니다.

0️⃣ 공통 스타일

| props        | value                                          | meaning                                                                              |
| ------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| **size**     | **'large','medium','full' ( 기본 : 'large' )** | 서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ )        |
| **pagename** | **string**                                     | 원하는 페이지명을 입력하면 앱바에 나타납니다. ( 필수⭕ )                             |
| **type**     | **'icon', 'button', 'plain'**                  | 서버에 저장되어있는 아이콘 명을 입력하면 앱바 우측에 아이콘이 나타납니다. ( 필수❌ ) |

```jsx
<Cmp.AppBar.Wrapper size="full" pagename="페이지네임" type="button" />
```

1️⃣ Icon 스타일 컴포넌트

| props    | value      | meaning                                                                       |
| -------- | ---------- | ----------------------------------------------------------------------------- |
| **name** | **string** | 서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ ) |

```jsx
<Cmp.AppBar.Wrapper pagename="페이지네임" type="icon">
  <Cmp.AppBar.Icon name="add_24px" />
  <Cmp.AppBar.Icon name="bin_24px" />
</Cmp.AppBar.Wrapper>
```

2️⃣ Button 스타일 컴포넌트

| props     | value      | meaning                                               |
| --------- | ---------- | ----------------------------------------------------- |
| **text**  | **string** | 원하는 버튼명을 입력합니다. ( 필수⭕ )                |
| **count** | **string** | 카운트 되는 숫자를 문자 형태로 넣어줍니다. ( 필수❌ ) |

```jsx
<>
  <Cmp.AppBar.Wrapper pagename="페이지네임" type="button">
    <Cmp.AppBar.Button text="버튼1" />
    <Cmp.AppBar.Button text="버튼2" />
  </Cmp.AppBar.Wrapper>

  <Cmp.AppBar.Wrapper pagename="페이지네임" type="button">
    <Cmp.AppBar.Button text="버튼" count="10" />
  </Cmp.AppBar.Wrapper>
</>
```
