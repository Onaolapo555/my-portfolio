

 function HeaderSkeleton() {
  return (
    <div className="mt-20 w-[90%] m-auto mb-20 max-w-xl animate-pulse">
      {/* Profile Picture Placeholder */}
      <div className="w-34 h-34 rounded-full mb-5 bg-zinc-800" />

      {/* Heading Placeholders */}
      <div className="mb-4 space-y-3">
        {/* Hey, I'm... line */}
        <div className="h-7 bg-zinc-800 rounded-lg w-2/3" />
        {/* Frontend Engineer... line */}
        <div className="h-6 bg-zinc-900 rounded-md w-5/6" />
      </div>

      {/* Description Text Placeholders */}
      <div className="mb-5 max-w-lg space-y-2">
        <div className="h-4 bg-zinc-900 rounded w-full" />
        <div className="h-4 bg-zinc-900 rounded w-full" />
        <div className="h-4 bg-zinc-900 rounded w-3/4" />
      </div>

      {/* Action Buttons Placeholders */}
      <div className="flex flex-row gap-6">
        {/* Let's Talk button block */}
        <div className="h-9 w-28 bg-zinc-800 rounded-xl" />
        {/* Open To Work badge block */}
        <div className="h-9 w-36 bg-zinc-900 rounded-2xl" />
      </div>
    </div>
  );
}

export default HeaderSkeleton;