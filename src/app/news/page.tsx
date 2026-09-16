import NewsPage from "@/page/news/page";

export const metadata = {
  title: "Crypto News | Portfolio",
  description: "Latest cryptocurrency news",
};

export default function News({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  return <NewsPage searchParams={searchParams} />;
}
