export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="animate-drift absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-amber/20 blur-[120px]" />
      <div
        className="animate-drift absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-[120px]"
        style={{ animationDelay: '-9s' }}
      />
    </div>
  )
}
