# 002 - Registration Page (참가 신청)

## 목적

딸깍톤 참가 신청을 개인 또는 팀 단위로 접수하는 폼 페이지 제공.

## 라우트

- `/register`

## 반응형 기준

- Mobile: `<= 639px`
- Desktop: `>= 640px` (`sm:` 브레이크포인트)

## 페이지 레이아웃

- 최대 너비: `max-w-250` (1000px)
- 상단 여백: Mobile `pt-25` (100px), Desktop `pt-45` (180px)
- 섹션 간격: Mobile `space-y-8` (32px), Desktop `space-y-7` (28px)

## 페이지 헤더

- 제목 `참가 신청`: Mobile `typo-h5`, Desktop `typo-h3`, `text-gray-950`
- 부제 `개인 또는 팀으로 신청해 주세요`: Mobile `typo-subtitle3`, Desktop `typo-h6`, `text-gray-800`
- 제목-부제 간격: Mobile `gap-2`, Desktop `gap-3`

## 섹션 구성 (렌더 순서)

1. 참가 유형 선택 (`ParticipationTypeSection`)
2. 리더 정보 입력 (`LeaderInfoSection`)
3. 팀원 정보 입력 (`TeamMembersSection`) — 팀 참여 시만 표시
4. 참가비 안내 및 환불 계좌 (`PaymentSection`)
5. 개발 경험 선택 (`ExperienceSection`)
6. 참여 동기 및 문의 (`MotivationSection`)
7. 개인정보 동의 (`PrivacySection`)
8. 제출 버튼

## 상세 동작 명세

### 1) 참가 유형

- 개인 참여 / 팀 참여 라디오 선택
- 기본값: 개인 참여 (`INDIVIDUAL`)
- 팀 참여 선택 시 팀원 섹션 및 팀장 카드 표시
- Mobile: 세로 스택, Desktop: 가로 2열

### 2) 리더 정보

- 필드 순서: 이름 → 이메일 → 연락처
- 이메일 캡션: "투표 인증 및 프로젝트 등록을 위해 수집하고 있어요"
- 이메일 중복확인 버튼 포함
- 연락처 placeholder: "010-1234-5678 형식으로 작성해 주세요"
- 전화번호 자동 하이픈 포맷

### 3) 팀원 정보 (팀 참여 시)

- 팀장 카드: 리더 정보를 disabled 상태로 표시, "팀 대표로 참여해요" 부제
- 팀원 카드: 최대 3명 추가 가능
- 카드 레이아웃: Desktop 3열 (이름/연락처/이메일), Mobile 세로 스택
- 팀원별 이메일 중복확인 버튼 포함
- 팀원 추가/삭제 가능 (최소 1명)

### 4) 참가비 안내

- 외부 카드: `bg-gray-50 rounded-xl p-5`
- 제목: 🔺 아이콘 + "참가비 안내" (`typo-subtitle1`)
- 내부 카드: `bg-gray-0 rounded-xl p-5` (border 없음)
- 참가비 정보, 입금 계좌, 유의사항 표시
- 빨간 강조 문구: "*원활한 참가를 위해 입금시 참가자 명으로 입금 부탁드려요!"
- 줄바꿈: 참가비/입금계좌 정보는 모바일에서만 줄바꿈 (`<br className="sm:hidden" />`)
- 환불 계좌 입력: 은행명/계좌번호/예금주 (Desktop 3열)
- 입금 여부 라디오:
  - 개인: "완료" / "미완료"
  - 팀: "모든 팀원 완료" / "미완료"
  - Mobile: 세로 스택, Desktop: 가로 2열

### 5) 개발 경험

- 4개 옵션: 비개발자/입문, 주니어, 시니어, 바이브코더
- Mobile: 세로 스택, Desktop: 가로 4열

### 6) 참여 동기

- 선택 입력 textarea (최대 500자)

### 7) 개인정보 동의

- 체크박스 + 상세 내용 모달
- 필수 동의 항목

### 8) 제출

- 버튼: "딸깍톤 신청하기"
  - 준비 완료 시: `bg-primary-400 text-white`
  - 미완료 시: `bg-gray-100 text-gray-850`
- 버튼 하단 안내: "제출된 정보는 행사 운영 목적으로만 사용돼요"
- 허니팟 필드 포함 (스팸 방지)
- 성공/실패 토스트 표시

## Validation

- 참가 유형 필수
- 이름, 이메일(형식), 연락처(숫자 11자리) 필수
- 팀 참여 시: 팀원별 이름/이메일/연락처 필수
- 개발 경험 필수
- 환불 계좌 (은행명/계좌번호/예금주) 필수
- 개인정보 동의 필수

## API

- `POST /api/register`: JSON payload 전송
- `POST /api/check-duplicate`: 이메일 중복 확인
