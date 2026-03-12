# PersonalInfoSection

- Source: `app/register/_components/personal-info-section.tsx`
- Role: 개인 참여 시 기본 정보 입력.
- Props: `form`, `errors`, `dupStatus`, `update`, `checkEmailDuplicate`
- 표시 조건: `participationType === "INDIVIDUAL"`
- 필드 순서: 이름 → 이메일 → 연락처
- 이름: `FormInput`, placeholder "홍길동", maxLength 50
- 이메일:
  - `onBlur` 자동 중복체크
  - description 동적 변경: idle "투표 인증 및 프로젝트 등록을 위해 수집하고 있어요" → checking "중복 확인중" → available "사용 가능한 이메일입니다"
  - 중복 시 error: "사용중인 이메일입니다"
- 연락처: `FormInput` type="tel", placeholder "010-1234-5678 형식으로 작성해 주세요"
  - 자동 하이픈 포맷 (`formatPhone`)
