import { type LucideIcon } from "lucide-react";
import { sequenceCss } from "@/lib/sequence";

const CYCLE_SECONDS = 14;
const FIRST_MESSAGE_AT = 0.04;
const LAST_MESSAGE_AT = 0.46;
const TYPING_AT = 0.56;
const REPLY_AT = 0.66;

/**
 * Example requests arriving as chat messages, one after another, then a
 * typing indicator and our reply; the thread clears and plays again. The
 * messages are real copy, so they stay readable to assistive tech; with
 * reduced motion the whole thread just shows.
 */
export default function RequestThread({
  heading,
  messages,
  reply,
  replyIcon: ReplyIcon,
}: {
  heading: string;
  messages: string[];
  reply: string;
  /** Avatar icon beside the reply. */
  replyIcon: LucideIcon;
}) {
  const step = (LAST_MESSAGE_AT - FIRST_MESSAGE_AT) / Math.max(messages.length - 1, 1);
  const css = sequenceCss(
    [
      ...messages.map((_, index) => ({
        name: `thread-msg-${index}`,
        showAt: FIRST_MESSAGE_AT + index * step,
      })),
      { name: "thread-typing", showAt: TYPING_AT, hideAt: REPLY_AT - 0.01 },
      { name: "thread-reply", showAt: REPLY_AT },
    ],
    { cycleSeconds: CYCLE_SECONDS },
  );

  return (
    <div className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="rounded-card border border-sky bg-sky p-5 sm:p-7">
        <p className="text-eyebrow text-blue-text">{heading}</p>

        <ul className="mt-5 space-y-3">
          {messages.map((message, index) => (
            <li
              key={message}
              className={`thread-msg-${index} pausable-anim ml-auto w-fit max-w-[88%] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[4px] rounded-bl-[16px] bg-navy px-4 py-3 text-[15px] leading-snug text-white`}
            >
              {message}
            </li>
          ))}
        </ul>

        <div className="relative mt-5 flex items-end gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
            <ReplyIcon size={20} strokeWidth={1.5} aria-hidden />
          </span>
          <div className="relative">
            {/* Typing indicator sits where the reply lands; hidden at rest */}
            <span
              aria-hidden
              className="thread-typing pausable-anim absolute bottom-0 left-0 flex h-11 items-center gap-1.5 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[4px] border border-white bg-white px-4 opacity-0"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="h-2 w-2 rounded-full bg-blue/70" />
              <span className="h-2 w-2 rounded-full bg-blue/40" />
            </span>
            <p className="thread-reply pausable-anim rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[4px] bg-white px-4 py-3 text-[15px] leading-snug font-semibold text-navy">
              {reply}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
