# Navigation

## 목적

랜딩 상단 고정 내비게이션 제공.

## 동작/UI

- viewport 상단 고정, 반투명 + blur 배경.
- 반응형 분기
  - Mobile(`<=767px`): 로고 + 텍스트 메뉴
  - Desktop(`>=768px`): 로고 + 메뉴 + 신청 CTA
- 앵커 링크
  - `행사 소개 -> /#about`
  - `갤러리 -> /#culture`
- 신청 CTA: `/register`
  - 신청 기간(`open`) 중에만 정상 이동.
  - 신청 시간 외(`before-start`, `closed`) 클릭 시 이동을 막고 Toast로 카운트다운 텍스트 또는 마감 안내 노출.
  - 어드민 `isClosed` 설정 시에도 마감 상태로 처리.
- Toast 컴포넌트는 `app/_components/toast.tsx` 공통 컴포넌트 사용.
- 카운트다운 로직은 `useRegistrationCountdown` 훅 사용.
