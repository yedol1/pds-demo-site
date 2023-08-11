---
title: Cards
createdAt: '2023-08-10'
---

사용자가 원하는 스타일의 Cards 컴포넌트를 지정하여 불러와 사용합니다.

1️⃣ CalendarData

| props              | value      | meaning                                                        |
| ------------------ | ---------- | -------------------------------------------------------------- |
| **month**          | **string** | Data의 해당 달을 표기합니다.( 필수⭕ )                         |
| **name**           | **string** | 고객의 이름을 표기합니다.( 필수⭕ )                            |
| **totalschadule**  | **number** | 고객의 해당 달의 총 스케쥴 건을 표기합니다.( 필수⭕ )          |
| **cancelschadule** | **number** | 고객의 해당 달의 총 스케쥴 취소 건을 표기합니다.( 필수⭕ )     |
| **cancel**         | **number** | 고객의 해당 달의 총 스케쥴 취소 퍼센트를 표기합니다.( 필수⭕ ) |

```jsx
<Cmp.Cards.CalendarData
  month="이번 달"
  name="홍길동"
  totalschadule={100}
  cancelschadule={100}
  cancel={100}
/>
```

2️⃣ LinkLarge

| props             | value          | meaning                                                        |
| ----------------- | -------------- | -------------------------------------------------------------- |
| **title**         | **string**     | 볼드체의 텍스트가 표시됩니다.( 필수⭕ )                        |
| **description**   | **string**     | **title** 밑으로 텍스트가 표시됩니다.( 필수⭕ )                |
| **thumbnail**     | **string**     | 썸네일에 사용될 이미지 주소 값을 넣어줍니다.( 필수⭕ )         |
| **onClickEffect** | **() => void** | LinkCard를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |

```jsx

<Cmp.Cards.LinkLarge
  title='제목'
  description='설명'
  thumbnail='이미지 링크 주소'
  onClickEffect={() => void}
/>

```

3️⃣ LinkMedium

| props             | value          | meaning                                                        |
| ----------------- | -------------- | -------------------------------------------------------------- |
| **description**   | **string**     | 텍스트가 표시됩니다.( 필수⭕ )                                 |
| **thumbnail**     | **string**     | 썸네일에 사용될 이미지 주소 값을 넣어줍니다.( 필수⭕ )         |
| **onClickEffect** | **() => void** | LinkCard를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |

```jsx

<Cmp.Cards.LinkMedium
  description='설명'
  thumbnail='이미지 링크 주소'
  onClickEffect={() => void}
/>

```

4️⃣ LinkMediumDel

| props             | value          | meaning                                                        |
| ----------------- | -------------- | -------------------------------------------------------------- |
| **description**   | **string**     | 텍스트가 표시됩니다.( 필수⭕ )                                 |
| **thumbnail**     | **string**     | 썸네일에 사용될 이미지 주소 값을 넣어줍니다.( 필수⭕ )         |
| **onClickEffect** | **() => void** | LinkCard를 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |
| **onDelEffect**   | **() => void** | 닫기버튼을 클릭 시 해당 값을 인자로 받는 함수입니다.( 필수⭕ ) |

```jsx

<Cmp.Cards.LinkMediumDel
  description='설명'
  thumbnail='이미지 링크 주소'
  onClickEffect={() => void}
  onDelEffect={() => void}
/>

```

5️⃣ OptionIn

| props           | value      | meaning                                         |
| --------------- | ---------- | ----------------------------------------------- |
| **title**       | **string** | 볼드체의 텍스트가 표시됩니다.( 필수⭕ )         |
| **description** | \*\*string | title\*\* 밑으로 텍스트가 표시됩니다.( 필수⭕ ) |

```jsx
<Cmp.Cards.OptionIn title="제목" description="설명" />
```

6️⃣ OptionAc

| props           | value      | meaning                                         |
| --------------- | ---------- | ----------------------------------------------- |
| **title**       | **string** | 볼드체의 텍스트가 표시됩니다.( 필수⭕ )         |
| **description** | \*\*string | title\*\* 밑으로 텍스트가 표시됩니다.( 필수⭕ ) |

```jsx
<Cmp.Cards.OptionAc title="제목" description="설명" />
```
