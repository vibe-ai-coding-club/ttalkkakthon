import type { Metadata } from "next";
import { RegistrationForm } from "../_components/registration-form";

export const metadata: Metadata = {
  title: "참가 신청 - 딸깍톤 2026",
  description: "딸깍톤 2026 참가 신청 페이지. 개인 또는 팀으로 신청하세요.",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">참가 신청</h1>
      <p className="mb-10 text-sm text-muted-foreground">
        아래 정보를 입력하고 딸깍톤에 참가하세요.
      </p>
      <RegistrationForm />
    </div>
  );
}
