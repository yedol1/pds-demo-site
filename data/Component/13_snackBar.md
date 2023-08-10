---
title: Snackbar
createdAt: '2023-08-10'
---

사용자에게 알림사항을 하단에서 표시해주는 **Snackbar** 컴포넌트 입니다.<br/>
제공되는 커스텀 훅인 **useSnackbar**와 함께 사용해야 합니다.(인자로는 **duration**을 받습니다)<br/>

```ts
/**
 * 사용자가 스낵바 컴포넌트를 쉽게 쓸 수 있도록 만든 커스텀 훅입니다
 * Cmp에 같이 export되니 Cmp.useSnackbar로 사용할 수 있습니다
 * @param {number} ms - 스낵바의 알림 지속시간 입니다
 * @returns {[string, (string) => void]} [snackbarMessage, setSnackbarMessage] - [렌더할 메세지, 문자열을 입력받는 세터함수]
 */
function useSnackbar(ms) {}
```

컴포넌트에 제공되는 **duration**과 **useSnackbar**의 인자는 같은 값을 가져야 예상대로 동작합니다.<br/>
**setSnackbarMessage**는 **string**을 인자로 받습니다.<br/>
스낵바 UI의 렌더링 트리거는 **setSnackbarMessage**함수의 실행입니다.

| props        | value       | meaning                                                                                      |
| ------------ | ----------- | -------------------------------------------------------------------------------------------- |
| **message**  | **string**  | 유저에게 알려야 할 내용을 가진 텍스트입니다.( 필수⭕ )                                       |
| **duration** | **number**  | 알림 지속시간 입니다. 단위는 **ms**입니다. 지속시간 뒤에 스낵바가 언마운트 됩니다.( 필수⭕ ) |
| **isAppbar** | **boolean** | **true**이면 하단과 **12px** 여백을 가지고, 아니면 **24px** 여백을 가집니다.( 필수⭕ )       |
| **width**    | **string**  | 스낵바가 가지는 너비값입니다. 설정이 없다면 **1024px**을 가집니다.( 필수❌ )                 |

```jsx
import { Cmp } from 'pds-3-14';

// 사용자애 따라서 destructuring을 사용하여도 좋습니다
// const { Snackbar, useSnackbar } = Cmp;

// 안전한 렌더를 위한 전역상수 선언을 권고합니다
const SNACKBAR_DURATION = 5000;

const App = () => {
  const [snackbarMessage, setSnackbarMessage] =
    Cmp.useSnackbar(SNACKBAR_DURATION);

  return (
    <Cmp.Snackbar
      message={snackbarMessage}
      duration={SNACKBAR_DURATION}
      isAppbar={false}
    />
  );
};
```
