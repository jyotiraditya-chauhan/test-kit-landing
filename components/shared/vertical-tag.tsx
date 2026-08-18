export function VerticalTag({ text }: { text: string }) {
  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex">
      <div className="bg-foreground px-3 py-6 text-xs font-bold tracking-widest text-background">
        <span className="[writing-mode:vertical-rl]">{text}</span>
      </div>
    </div>
  );
}
