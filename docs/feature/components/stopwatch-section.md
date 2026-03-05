# StopwatchSection

## 목적
신청 마감 카운트다운을 랜딩 본문 섹션에서 시각적으로 강조.

## 동작/UI
- 섹션 id: `stopwatch-section`.
- 마감 시각: `2026-03-27T23:59:59+09:00`.
- 1초마다 일/시/분/초 업데이트.
- 마감 후 `신청이 마감되었어요` 문구 노출.
- 상단 텍스트 양 옆에 `Icon(type=twinkle)` 사용.
- 카운트다운 계산/패딩 로직은 `app/sections/stopwatch-time.ts`를 사용해 `FloatingStopwatch`와 공유.
