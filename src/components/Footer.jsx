export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>
          sravanthi@portfolio:~$ <span className="cursor-blink text-amber">_</span>
        </p>
        <p>&copy; {new Date().getFullYear()} Sravanthi Proddatoori. Built with React &amp; Tailwind.</p>
      </div>
    </footer>
  )
}
