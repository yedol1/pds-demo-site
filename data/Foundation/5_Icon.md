---
title: Icon
createdAt: '2023-08-10'
---

지정된 아이콘을 불러온다면, 정상적으로 작동이 됩니다.

| props         | value                       | meaning                                                                                  |
| ------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| **name**      | **string**                  | 서버에 저장되어있는 아이콘 명을 입력하면 정상적으로 작동이 됩니다. ( 필수⭕ )            |
| **extension** | **string** ( 기본 : 'svg' ) | 서버에 저장되어있는 아이콘 명의 확장자명을 입력하면 정상적으로 작동이 됩니다. ( 필수❌ ) |
| **height**    | **number**                  | 입력하면 해당 숫자만큼 높이가 지정됩니다. ( 필수❌ )                                     |
| **width**     | **number**                  | 입력하면 해당 숫자만큼 너비가 지정됩니다. ( 필수❌ )                                     |

> 📎 <a href='https://port-0-psd-asset-server-eg4e2alkf2i7md.sel4.cloudtype.app/'>서버 URL</a> <br/>

```jsx
<Fnd.IconStyles name={'add'} extension="svg" height={100} width={100} />
```
