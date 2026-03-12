# FormInput

- Source: `app/_components/register/form-input.tsx`
- Role: 텍스트 입력 UI 프리미티브.

## Props

- HTML `<input>` 속성 전체 + 아래 커스텀 Props.

| Prop | Type | Default | Description |
|---|---|---|---|
| `error` | `string?` | — | 에러 메시지 (표시 시 하단 `FormError` 렌더) |
| `variant` | `"default" \| "white"` | `"default"` | 배경색 변형 |

## 스타일 토큰

- 공통: `w-full rounded-lg px-4 py-3 typo-body3 outline-none transition-colors`
- Focus: `ring-2 ring-primary-400/40`
- Variant `default`: `bg-gray-50`
- Variant `white`: `bg-white`
