export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816]">

      <div className="flex flex-col items-center gap-6">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-pink-400 border-t-transparent"></div>

        <p className="text-lg tracking-[0.3em] text-pink-400 uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}