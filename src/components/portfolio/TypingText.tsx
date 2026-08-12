import { useEffect, useState } from "react";

export function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
        } else if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        } else {
          setText(
            deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
          );
        }
      },
      done ? 1400 : deleting ? 40 : 75,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="caret-blink ml-0.5 inline-block text-accent">|</span>
    </span>
  );
}
