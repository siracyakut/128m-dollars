export default function Footer() {
  return (
    <div className="mt-5 h-[50px] bg-white w-full px-3 flex items-center justify-center text-center text-[#212529] text-[15px] leading-[22.5px]">
      Merkez Bankası rezervleri gibi tüm hakları saklıdır - ©{" "}
      {new Date().getFullYear()}
    </div>
  );
}
