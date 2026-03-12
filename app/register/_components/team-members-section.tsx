import { FieldLabel, FormInput } from "@/app/_components/register";
import type { DuplicateStatus, FormState, MemberState } from "./types";
import { emailDescription, formatPhone, MAX_MEMBERS, toDigits } from "./types";

type Props = {
  form: FormState;
  errors: Record<string, string>;
  dupStatus: Record<string, DuplicateStatus>;
  update: (
    field: keyof Omit<FormState, "members" | "hasDeposited">,
    value: string,
  ) => void;
  updateMember: (
    index: number,
    field: keyof MemberState,
    value: string,
  ) => void;
  addMember: () => void;
  removeMember: (index: number) => void;
  checkEmailDuplicate: () => void;
  checkMemberEmailDuplicate: (index: number, value: string) => void;
};

export const TeamMembersSection = ({
  form,
  errors,
  dupStatus,
  update,
  updateMember,
  addMember,
  removeMember,
  checkEmailDuplicate,
  checkMemberEmailDuplicate,
}: Props) => {
  if (form.participationType !== "TEAM") return null;

  return (
    <fieldset className="space-y-3">
      <div className="flex min-h-9 items-center justify-between">
        <FieldLabel as="legend">
          팀원{" "}
          <span className="typo-body3 font-normal text-gray-500">
            ({form.members.length + 1}/{MAX_MEMBERS + 1})
          </span>
        </FieldLabel>
        {form.members.length < MAX_MEMBERS && (
          <button
            type="button"
            onClick={addMember}
            className="typo-caption1 cursor-pointer rounded-md bg-gray-100 px-3 py-1.5 text-gray-600 transition-colors hover:bg-gray-200"
          >
            + 팀원 추가
          </button>
        )}
      </div>

      {/* 팀장 */}
      <div className="space-y-3 rounded-xl bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <span>
            <span className="typo-subtitle6 sm:typo-h7">팀장</span>
            <span className="typo-subtitle4 sm:typo-subtitle3 ml-2 text-gray-500">
              팀 대표로 참여해요
            </span>
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <FieldLabel size="sm" required>
              이름
            </FieldLabel>
            <FormInput
              type="text"
              variant="white"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="홍길동"
              maxLength={50}
              error={errors.name}
            />
          </div>
          <div>
            <FieldLabel size="sm" required>
              이메일
            </FieldLabel>
            <FormInput
              type="email"
              variant="white"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={checkEmailDuplicate}
              placeholder="example@email.com"
              description={emailDescription(
                dupStatus.email,
                "투표 시 사용됩니다",
              )}
              error={errors.email}
            />
          </div>
          <div>
            <FieldLabel size="sm" required>
              연락처
            </FieldLabel>
            <FormInput
              type="tel"
              inputMode="numeric"
              variant="white"
              value={formatPhone(form.phone)}
              onChange={(e) => update("phone", toDigits(e.target.value))}
              placeholder="010-1234-5678 형식으로 작성해 주세요"
              error={errors.phone}
            />
          </div>
        </div>
      </div>

      {form.members.map((member, i) => (
        <div key={i} className="space-y-3 rounded-xl bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <span className="typo-subtitle2">팀원 {i + 1}</span>
            {form.members.length > 1 && (
              <button
                type="button"
                onClick={() => removeMember(i)}
                className="cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
              >
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {/* 이름 */}
            <div>
              <FieldLabel size="sm" required>
                이름
              </FieldLabel>
              <FormInput
                type="text"
                variant="white"
                value={member.name}
                onChange={(e) => updateMember(i, "name", e.target.value)}
                placeholder="홍길동"
                maxLength={50}
                error={errors[`members.${i}.name`]}
              />
            </div>

            {/* 이메일 */}
            <div>
              <FieldLabel size="sm" required>
                이메일
              </FieldLabel>
              <FormInput
                type="email"
                variant="white"
                value={member.email}
                onChange={(e) => updateMember(i, "email", e.target.value)}
                onBlur={() => checkMemberEmailDuplicate(i, member.email)}
                placeholder="example@email.com"
                description={emailDescription(
                  dupStatus[`members.${i}.email`],
                  "투표 시 사용됩니다",
                )}
                error={errors[`members.${i}.email`]}
              />
            </div>

            {/* 연락처 */}
            <div>
              <FieldLabel size="sm" required>
                연락처
              </FieldLabel>
              <FormInput
                type="tel"
                inputMode="numeric"
                variant="white"
                value={formatPhone(member.phone)}
                onChange={(e) =>
                  updateMember(i, "phone", toDigits(e.target.value))
                }
                placeholder="010-1234-5678 형식으로 작성해 주세요"
                error={errors[`members.${i}.phone`]}
              />
            </div>
          </div>
        </div>
      ))}
    </fieldset>
  );
};
