# TeamMembersSection

- Source: `app/register/_components/team-members-section.tsx`
- Role: 팀장 + 팀원 정보 입력 (팀 참여 시).
- Props: `form`, `errors`, `dupStatus`, `update`, `updateMember`, `addMember`, `removeMember`, `checkEmailDuplicate`, `checkMemberEmailDuplicate`
- 표시 조건: `participationType === "TEAM"`
- 팀장 카드:
  - 이름/이메일/연락처 직접 입력 (editable)
  - 이메일 `onBlur` 자동 중복체크
  - description 동적 변경: idle "투표 시 사용됩니다" → checking "중복 확인중" → available "사용 가능한 이메일입니다"
  - 중복 시 error: "사용중인 이메일입니다"
  - 부제: "팀 대표로 참여해요"
- 팀원 카드:
  - 최대 `MAX_MEMBERS` (3명) 추가 가능
  - 팀원 수 1명 초과 시 삭제 버튼 표시
  - 이메일 `onBlur` 자동 중복체크 (팀장과 동일한 description 흐름)
- 카드 Layout:
  - Desktop: 3열 그리드 (이름/이메일/연락처) — `sm:grid-cols-3`
  - Mobile: 세로 스택
- 헤더: `FieldLabel as="legend"` — "팀원 (팀장포함 n/4)" + "팀원 추가" 버튼
