---
title: TextField
createdAt: '2023-08-10'
---

사용자에게 입력을 받는 커스텀 **input** 컴포넌트 요소입니다.<br/>
아래에 적힌 **props**를 제외하고도 **HTML input element**의 속성들을 모두 **props**로 내려줄 수 있습니다.<br/>
(예시: **placeholder**, **onBlur**, **onChange**등 **input**의 기본속성들)

| props               | value       | meaning                                                                                        |
| ------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| **labelText**       | **string**  | 좌측 상단에 설명이 표시됩니다. 클릭 시 포커스 됩니다.( 필수⭕ )                                |
| **inactiveMessage** | **string**  | 부가설명의 내용을 가지고 하단에 회색으로 표시되는 텍스트입니다.( 필수❌ )                      |
| **errorMessage**    | **string**  | 하단에 빨간색으로 표시되는 텍스트입니다. **isError**가 **true**일 때만 렌더됩니다.( 필수❌ )   |
| **successMessage**  | **string**  | 하단에 초록색으로 표시되는 텍스트입니다. **isSuccess**가 **true**일 때만 렌더됩니다.( 필수❌ ) |
| **isError**         | **boolean** | 우측 상단에 닫기 버튼을 누르면 실행됩니다.( 필수❌ )                                           |
| **isSuccess**       | **boolean** | 회색 버튼을 누르면 실행됩니다.( 필수❌ )                                                       |

```js
<>
  <Cmp.TextField
    placeholder="이름을 입력해주세요"
    labelText="이름"
    value={userName}
    inactiveMessage={'10자 이상의 이름를 입력해주세요'}
    successMessage={'Success Message'}
    onBlur={(e) => setIsSuccess(validator(e.target.value))}
    onChange={(e) => setUserName(e.target.value)}
    isSuccess={isSuccess}
  />
</>
```
