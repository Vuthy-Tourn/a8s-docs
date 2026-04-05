export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Autonomous Logo"
        className="h-7 w-auto"
      />

      <span className="font-bold text-[16px] tracking-[-0.02em] bg-linear-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
        Autonomous
      </span>

      {/* <span className={[
        'text-[10px] font-semibold tracking-[0.04em] uppercase',
        'px-[7px] py-[2px] rounded-full',
        'bg-[rgba(245,96,33,0.12)] text-[#F56021]',
        'border border-[rgba(245,96,33,0.3)]',
      ].join(' ')}>
        Docs
      </span> */}
    </div>
  )
}