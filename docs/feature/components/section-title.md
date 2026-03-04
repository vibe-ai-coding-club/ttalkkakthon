# SectionTitle

- Source: `app/_components/section-title.tsx`
- Role: 랜딩 페이지 섹션 상단에서 Chip + 제목을 수직 배치하는 공통 타이틀 컴포넌트.
- Composition:
  - `Chip` 컴포넌트를 내부에서 사용.
  - `Chip` 아래에 제목 텍스트를 중앙 정렬로 렌더링.
- Props:
  - `chipLabel: string`
  - `title: string`
  - `className?: string`
  - `HTMLAttributes<HTMLDivElement>` 전반 지원 (`id`, `aria-*` 등)
- Layout Rule:
  - Figma의 고정 폭(1280px) 대신 `w-full` 사용.
  - 가로 가운데 정렬(`items-center`, `text-center`) 적용.
- Responsive Rule:
  - 모바일(`<= 767px`): `gap 16px`, 제목 `typo-h5`(24px/700)
  - 데스크톱(`>= 768px`): `gap 22px`, 제목 `typo-h3`(34px/700)
