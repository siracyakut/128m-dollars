export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-200 flex items-center justify-center flex-col gap-y-7 px-12">
      <span className="w-[68px] h-[68px] border-[5px] border-white border-b-black rounded-full animate-spin"></span>
      <span className="font-bold uppercase tracking-widest">YÜKLENİYOR...</span>
    </div>
  );
}
