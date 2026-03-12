# LeaderInfoSection

- Source: `app/register/_components/leader-info-section.tsx`
- Role: 리더(팀장/개인) 기본 정보 입력.
- Props: `form`, `errors`, `dupStatus`, `update`, `checkEmailDuplicate`
- 표시 조건: `participationType`이 선택된 경우
- 필드 순서: 이름 → 이메일 → 연락처
- 이름: `FormInput`, placeholder "홍길동", maxLength 50
- 이메일:
  - 캡션: "투표 인증 및 프로젝트 등록을 위해 수집하고 있어요"
  - 중복확인 버튼 포함
  - 사용 가능 시 success 메시지
- 연락처: `FormInput` type="tel", placeholder "010-1234-5678 형식으로 작성해 주세요"
  - 자동 하이픈 포맷 (`formatPhone`)
