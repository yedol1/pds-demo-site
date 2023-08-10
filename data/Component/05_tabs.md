---
title: Tabs
createdAt: '2023-08-10'
---

사용자가 **최대 10개의 탭메뉴**를 넣을수 있습니다.
선택된 tab 은 하나만 표시할수있습니다. 또한, 탭메뉴를 지정해두고 실제 UI 상에서 렌더될 탭메뉴도 필수로 선택해주셔야 합니다.

| props           | value                         | meaning                                                              |
| --------------- | ----------------------------- | -------------------------------------------------------------------- |
| **tapList**     | **(string 혹은 undefined)[]** | 최대 10개의 탭메뉴를 지정할 수 있습니다. ( 필수⭕ )                  |
| **selected**    | **number**                    | 선택될 탭메뉴 인덱스 번호를 선택합니다. ( 필수⭕ )                   |
| **showMenuIdx** | **number[]**                  | 보여질 탭메뉴의 인덱스 번호를 선택하여 배열에 입력합니다. ( 필수⭕ ) |
| **onTabClick**  | **(idx: number) => void**     | onClick 함수를 내려줍니다. ( 필수⭕ )                                |

```jsx
function App() {
  const tapList = ['Home', 'Profile', 'Settings'];
  const showMenuIdx = [0, 1, 2];
  const [selected, setSelected] = useState(0);
  const handleTabClick = (index: number) => {
    // index에 따라 특정 로직 수행
    switch (index) {
    }
  };
  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <Fnd.LayoutStyles>
        <Cmp.Tabs
          tapList={tapList}
          selected={selected}
          showMenuIdx={showMenuIdx}
          onTabClick={handleTabClick} // 이벤트 핸들러 전달
        />
      </Fnd.LayoutStyles>
    </>
  );
}

export default App;
```
