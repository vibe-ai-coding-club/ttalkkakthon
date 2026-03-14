# StopwatchSection

## 목적

신청 시작/마감 카운트다운을 랜딩 본문 섹션에서 시각적으로 강조.

## 동작/UI

- 섹션 id: `stopwatch-section`.
- 카운트다운 로직은 `useRegistrationCountdown` 훅(`app/_hooks/use-registration-countdown.ts`)을 사용해 `FloatingStopwatch`, `Navigation`, `RegistrationForm`과 공유.
- 시간 상수는 `lib/registration-time.ts`에서 관리.
  - 신청 시작: `2026-03-14T17:00:00+09:00`
  - 신청 마감: `2026-03-20T23:59:59+09:00`
- 3단계 phase에 따라 라벨 변경:
  - `before-start`: "신청 시작까지" + 카운트다운
  - `open`: "신청 마감까지" + 카운트다운
  - `closed`: "신청이 마감되었어요" 문구 노출
- 어드민에서 `isClosed` 설정 시에도 마감 상태로 전환.
- 1초마다 일/시/분/초 업데이트.
- 상단 텍스트 양 옆에 `Icon(type=twinkle)` 사용.
