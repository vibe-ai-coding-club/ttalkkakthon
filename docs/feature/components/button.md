# Button

- Source: `app/_components/button.tsx`
- Role: 공통 버튼 UI/스타일 시스템 제공.
- Props Axis:
  - `color`: `primary | gary | gray`
  - `size`: `xsmall | small | medium | large`
  - `state`: `default | hover | ghost | dragzone`
  - `leftIcon`: 버튼 텍스트 왼쪽 아이콘(`ReactNode`, optional)
- Figma Grid Source:
  - File: `TTALKKAKTHON`
  - Frame Node: `14:3563` (`Button`)
  - Total Buttons: `21`
- Hover Rule:
  - `hover`는 별도 props로 받지 않고 CSS `:hover`로 항상 반영.
  - 즉, 상태 선택(`default/ghost/dragzone`)과 무관하게 마우스 호버 시 해당 hover 스타일이 적용됨.
- Base Behavior:
  - 기본 `type="button"`.
  - `disabled` 시 포인터/투명도 스타일 자동 적용.

## 스타일 토큰 (Figma 반영)
- `primary/default`: `bg #00A8FF`, `text #FFFFFF`, hover `#0097E5`
- `primary/hover`: `bg #0097E5`, `text #FFFFFF`
- `primary/ghost`: `bg #FFFFFF`, `text #AAB1BC`, `border #CDD3DC dashed 1px`
- `primary/dragzone`: `bg #FFFFFF`, `text #7AD2FF`, `border #7AD2FF solid 1px`
- `gary/default`: `bg #EFF2F5`, `text #333B45`, hover `#E5E8ED`
- `gary/hover`: `bg #E5E8ED`, `text #333B45`

## 사이즈 토큰 (Figma 반영)
- `xsmall`: `h 34`, `px 14`, `py 6`, `radius 8`, `font 12/22/500`
- `small`: `h 44`, `px 18`, `py 10`, `radius 10`, `font 16/24/600`, `tracking -0.2`
- `medium`: `h 50`, `px 20`, `py 12`, `radius 12`, `font 18/26/600`, `tracking -0.4`
  - `ghost` 조합은 `h 48`, `px 24`, `radius 14`, `font 16/24/600`, `tracking -0.2`
- `large`: `h 66`, `px 32`, `py 16`, `radius 16`, `font 24/34/700`, `tracking -0.4`
  - `ghost` 조합은 `radius 18`
- Icon Size/Gap:
  - `xsmall`: `14x13`, gap `4`
  - `small`: `22x22`, gap `6`
  - `medium`: `26x26`, gap `8`
  - `large`: `30x30`, gap `10`
