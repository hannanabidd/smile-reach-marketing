import { Check, type LucideIcon } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

export type PhoneAlert = { time: string; text: string; icon: LucideIcon };

const CYCLE_SECONDS = 14;
const FIRST_ALERT_AT = 0.04;
const ALERT_STEP = 0.1;

/**
 * A phone where a family's day goes wrong one alert at a time, ending with
 * "where should we go?" and the answer: a name they already know. The
 * alerts are real copy and stay readable to assistive tech; with reduced
 * motion everything simply shows.
 */
export default function PhoneAlerts({
  heading,
  alerts,
  question,
  answer,
}: {
  /** Small label at the top of the screen, e.g. "Today". */
  heading: string;
  alerts: PhoneAlert[];
  question: string;
  answer: { name: string; detail: string; badge: string; icon: LucideIcon };
}) {
  const questionAt = FIRST_ALERT_AT + alerts.length * ALERT_STEP + 0.02;
  const answerAt = questionAt + 0.12;
  const css = sequenceCss(
    [
      ...alerts.map((_, index) => ({
        name: `phone-alert-${index}`,
        showAt: FIRST_ALERT_AT + index * ALERT_STEP,
      })),
      { name: "phone-question", showAt: questionAt },
      { name: "phone-answer", showAt: answerAt },
    ],
    { cycleSeconds: CYCLE_SECONDS, enterFrom: "translateY(-10px)" },
  );
  const AnswerIcon = answer.icon;

  return (
    <div className="pausable mx-auto w-full max-w-[340px]">
      <style>{css}</style>
      {/* Phone body */}
      <div className="rounded-[44px] bg-white p-3">
        <div className="relative overflow-hidden rounded-[34px] bg-sky px-4 pt-10 pb-6">
          <span aria-hidden className="absolute top-3 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" />
          <p className="text-eyebrow px-1 text-blue-text">{heading}</p>

          <ul className="mt-3 space-y-2.5">
            {alerts.map((alert, index) => (
              <li
                key={alert.text}
                className={`phone-alert-${index} pausable-anim flex items-center gap-3 rounded-[16px] bg-white p-3`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-blue">
                  <alert.icon size={18} strokeWidth={1.5} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-[14px] leading-snug font-semibold text-navy">
                  {alert.text}
                </span>
                <span aria-hidden className="shrink-0 self-start text-[12px] text-charcoal/70">
                  {alert.time}
                </span>
              </li>
            ))}
          </ul>

          <p className="phone-question pausable-anim mt-4 ml-auto w-fit rounded-tl-[16px] rounded-tr-[16px] rounded-br-[4px] rounded-bl-[16px] bg-navy px-4 py-2.5 text-[15px] font-semibold text-white">
            {question}
          </p>

          <div className="phone-answer pausable-anim mt-3 rounded-[16px] border-2 border-navy bg-white p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <AnswerIcon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[15px] font-bold text-navy">{answer.name}</span>
                <span className="block text-[13px] text-charcoal/80">{answer.detail}</span>
              </span>
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky px-3 py-1 text-[13px] font-semibold text-navy">
              <Check size={14} strokeWidth={2.5} aria-hidden />
              {answer.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
