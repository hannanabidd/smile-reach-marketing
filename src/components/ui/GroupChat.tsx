import { Users } from "lucide-react";
import { Fragment } from "react";
import { sequenceCss } from "@/lib/sequence";

export type ChatMessage = { from: string; text: string };

const CYCLE_SECONDS = 15;
const FIRST_MESSAGE_AT = 0.04;
const MESSAGE_STEP = 0.12;

/** Bold every occurrence of `term` inside `text`. */
function emphasize(text: string, term?: string) {
  if (!term) return text;
  return text.split(term).map((part, index, parts) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? <strong className="font-bold text-navy">{term}</strong> : null}
    </Fragment>
  ));
}

/**
 * An example group chat that plays out one message at a time, then clears
 * and starts again. Illustrative only, so it's labelled as an example and
 * hidden from assistive tech; the copy beside it carries the point. With
 * reduced motion the whole conversation shows.
 */
export default function GroupChat({
  title,
  exampleLabel,
  messages,
  highlight,
}: {
  title: string;
  /** Visible tag marking the conversation as illustrative, e.g. "Example". */
  exampleLabel: string;
  messages: ChatMessage[];
  /** A name to bold wherever it appears in the messages. */
  highlight?: string;
}) {
  const css = sequenceCss(
    messages.map((_, index) => ({
      name: `group-chat-${index}`,
      showAt: FIRST_MESSAGE_AT + index * MESSAGE_STEP,
    })),
    { cycleSeconds: CYCLE_SECONDS },
  );
  // Alternate bubble tints per person so the conversation reads at a glance
  const people = [...new Set(messages.map((message) => message.from))];

  return (
    <div aria-hidden className="pausable mx-auto w-full max-w-120 lg:max-w-none">
      <style>{css}</style>
      <div className="overflow-hidden rounded-card border border-sky bg-white">
        <div className="flex items-center justify-between gap-3 border-b border-sky px-5 py-4 sm:px-6">
          <p className="flex items-center gap-3 text-[16px] font-bold text-navy">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-blue">
              <Users size={20} strokeWidth={1.5} />
            </span>
            {title}
          </p>
          <span className="rounded-full bg-gray px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-charcoal/70 uppercase">
            {exampleLabel}
          </span>
        </div>

        <ul className="space-y-4 bg-gray/60 px-5 py-6 sm:px-6">
          {messages.map((message, index) => {
            const person = people.indexOf(message.from);
            return (
              <li key={index} className={`group-chat-${index} pausable-anim flex items-end gap-2.5`}>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold ${
                    person % 2 ? "bg-navy text-white" : "bg-sky text-navy"
                  }`}
                >
                  {message.from.charAt(0)}
                </span>
                <span className="max-w-[85%]">
                  <span className="mb-1 block pl-1 text-[12px] font-semibold text-charcoal/70">
                    {message.from}
                  </span>
                  <span className="block rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[4px] border border-sky bg-white px-4 py-3 text-[15px] leading-snug text-charcoal">
                    {emphasize(message.text, highlight)}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
