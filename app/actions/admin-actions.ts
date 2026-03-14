"use server";

import { prisma } from "@/lib/prisma";
import { verifyAdminSession } from "./admin-auth";

export const updateMemberAdminNote = async (
  memberId: string,
  note: string,
): Promise<{ success: boolean; message?: string }> => {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    return { success: false, message: "권한이 없습니다." };
  }

  try {
    await prisma.member.update({
      where: { id: memberId },
      data: { adminNote: note || null },
    });
    return { success: true };
  } catch (error) {
    console.error("updateMemberAdminNote error:", error);
    return { success: false, message: "서버 오류가 발생했습니다." };
  }
};

export const toggleDepositConfirmed = async (
  teamId: string,
  confirmed: boolean,
): Promise<{ success: boolean; message?: string }> => {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    return { success: false, message: "권한이 없습니다." };
  }

  try {
    await prisma.team.update({
      where: { id: teamId },
      data: { depositConfirmed: confirmed },
    });
    return { success: true };
  } catch (error) {
    console.error("toggleDepositConfirmed error:", error);
    return { success: false, message: "서버 오류가 발생했습니다." };
  }
};
