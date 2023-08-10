---
title: Date Picker
createdAt: '2023-08-10'
---

사용자가 시작날짜와 마지막날짜를 선택할수있는 캘린더 컴포넌트 요소입니다.<br/>

| props        | value                              | meaning                                                          |
| ------------ | ---------------------------------- | ---------------------------------------------------------------- | --- |
| **dates**    | **[Date , Date ]**                 | 시작일과 종료일의 현재상태입니다.( useState 로 관리 ) ( 필수⭕ ) |
| **setDates** | **(dates: [Date, Date] ) => void** | dates 의 Setter 함수입니다.( useState 로 관리 ) ( 필수⭕ )       |     |

```js
function App() {
  // 데이트의 상태관리
  const [dates, setDates] =
    (useState < [Date | null, Date | null]) | (null > [null, null]);

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
        <Cmp.CalendarStyle.CalendarWrapper>
          <Cmp.CalendarStyle.Calendar dates={dates} setDates={setDates} />
          <Cmp.CalendarStyle.ButtonWrapper>
            <Cmp.Button.Contained state="normal" size="medium">
              {'취소'}
            </Cmp.Button.Contained>
            <Cmp.Button.Contained state="enabled" size="medium">
              {'완료'}
            </Cmp.Button.Contained>
          </Cmp.CalendarStyle.ButtonWrapper>
        </Cmp.CalendarStyle.CalendarWrapper>
      </Fnd.LayoutStyles>
    </>
  );
}
```
