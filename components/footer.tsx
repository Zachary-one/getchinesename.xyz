// 导入 Next.js 的 Link 组件
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack z-30 bg-white px-5 py-2 text-center font-base">
      <div className="mt-2">
        Made with <span className="animate-pulse text-red-500">♥</span>{" "}
        <Link
          href="https://x.com/BruceLeeone1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading underline hover:text-gray-600 dark:hover:text-gray-300"
        >
          BruceLeeone1
        </Link>
      </div>
    </footer>
  );
}
