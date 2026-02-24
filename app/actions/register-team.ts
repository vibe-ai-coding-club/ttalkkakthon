"use server";

import { prisma } from "@/lib/prisma";
import { teamRegistrationSchema } from "@/lib/validations/team";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function registerTeam(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const rawMembers = formData.get("members");

  let members: unknown;
  try {
    members = JSON.parse(rawMembers as string);
  } catch {
    return {
      success: false,
      message: "팀원 데이터가 올바르지 않습니다.",
      errors: { members: ["팀원 데이터를 파싱할 수 없습니다."] },
    };
  }

  const raw = {
    name: formData.get("name"),
    topic: formData.get("topic"),
    description: formData.get("description") || undefined,
    members,
  };

  const result = teamRegistrationSchema.safeParse(raw);

  if (!result.success) {
    const errors: Record<string, string[]> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path.join(".");
      if (!errors[field]) errors[field] = [];
      errors[field].push(issue.message);
    });

    return {
      success: false,
      message: "입력값을 확인해주세요.",
      errors,
    };
  }

  const { name, topic, description, members: validMembers } = result.data;

  try {
    const existing = await prisma.team.findUnique({ where: { name } });
    if (existing) {
      return {
        success: false,
        message: "이미 등록된 팀 이름입니다.",
        errors: { name: ["이미 등록된 팀 이름입니다."] },
      };
    }

    await prisma.team.create({
      data: {
        name,
        topic,
        description: description || null,
        members: validMembers,
      },
    });

    return {
      success: true,
      message: "팀 등록이 완료되었습니다!",
    };
  } catch {
    return {
      success: false,
      message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
}
