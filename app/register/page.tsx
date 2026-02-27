import type { Metadata } from "next";
import { RegistrationForm } from "../_components/registration-form";

export const metadata: Metadata = {
  title: "참가 신청 - 딸깍톤 2026",
  description: "딸깍톤 2026 참가 신청 페이지. 팀 정보와 팀원을 등록하세요.",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">참가 신청</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        팀 정보와 팀원을 등록해주세요. 팀원은 최소 1명, 최대 4명까지 가능합니다.
      </p>
      <RegistrationForm />
    </div>
  );
}
