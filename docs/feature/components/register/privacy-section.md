# PrivacySection

- Source: `app/register/_components/privacy-section.tsx`
- Role: 개인정보 수집·이용 및 초상권 활용 동의.
- Props: `form`, `errors`, `setForm`, `setErrors`
- 표시 조건: `participationType`이 선택된 경우
- 체크박스: `[필수]` 표시, `accent-primary-400`
- "내용 보기" 링크 클릭 시 모달 표시
- 모달 내용: 수집 목적/항목/보유기간/동의거부권/초상권/파기방법
- 모달 "동의하기" 버튼 클릭 시 자동 체크 + 모달 닫기
