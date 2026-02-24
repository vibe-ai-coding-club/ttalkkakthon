"use client";

import type { TeamMember } from "@/lib/validations/team";

type MemberFieldsetProps = {
  index: number;
  member: TeamMember;
  onChange: (index: number, member: TeamMember) => void;
  onRemove: (index: number) => void;
  removable: boolean;
  errors?: Record<string, string[]>;
};

export const MemberFieldset = ({
  index,
  member,
  onChange,
  onRemove,
  removable,
  errors,
}: MemberFieldsetProps) => {
  const update = (field: keyof TeamMember, value: string | boolean) => {
    onChange(index, { ...member, [field]: value });
  };

  const fieldError = (field: string) => {
    const key = `members.${index}.${field}`;
    return errors?.[key];
  };

  return (
    <fieldset className="rounded-lg border border-border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <legend className="text-sm font-semibold">
          팀원 {index + 1}
          {member.isLeader && (
            <span className="ml-2 rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
              팀장
            </span>
          )}
        </legend>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={member.isLeader}
              onChange={(e) => update("isLeader", e.target.checked)}
              className="accent-accent"
            />
            팀장
          </label>
          {removable && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="text-sm text-error hover:text-error/80 cursor-pointer"
            >
              삭제
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="block text-sm text-muted-foreground mb-1">
            이름 *
          </label>
          <input
            type="text"
            value={member.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="홍길동"
            required
            maxLength={50}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
          {fieldError("name")?.map((e) => (
            <p key={e} className="mt-1 text-xs text-error">
              {e}
            </p>
          ))}
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">
            이메일 *
          </label>
          <input
            type="email"
            value={member.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="hong@example.com"
            required
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
          {fieldError("email")?.map((e) => (
            <p key={e} className="mt-1 text-xs text-error">
              {e}
            </p>
          ))}
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">
            전화번호 *
          </label>
          <input
            type="tel"
            value={member.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="010-1234-5678"
            required
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
          {fieldError("phone")?.map((e) => (
            <p key={e} className="mt-1 text-xs text-error">
              {e}
            </p>
          ))}
        </div>
      </div>
    </fieldset>
  );
};
