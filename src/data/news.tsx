export interface NewsArticle {
  id: string;
  sourceName: string;
  sourceIconUrl: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    sourceName: "ytv news NNN",
    sourceIconUrl: "https://ui-avatars.com/api/?name=YTV&background=ef4444&color=fff",
    date: "9/16/2026",
    title: "【速報】全国のセブンイレブンでシステム障害 一部店舗で交通系...",
    description: "全国のセブンイレブンで発生しているシステム障害により、一部の店舗では交通系ICカードの利用ができなくなっています...",
    imageUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
    tags: ["lifestyle", "top"]
  },
  {
    id: "2",
    sourceName: "東森新聞",
    sourceIconUrl: "https://ui-avatars.com/api/?name=東&background=000&color=fff",
    date: "9/16/2026",
    title: "才因破紀錄豪雨釀13死 日本3地區恐再現警報級大雨",
    description: "日本千葉縣上月遭破紀錄豪雨重創致13死。日本氣象協會指出，今(16)日九州至東北太平洋側仍有雨...",
    imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80",
    tags: ["environment", "top"]
  },
  {
    id: "3",
    sourceName: "동아일보",
    sourceIconUrl: "https://ui-avatars.com/api/?name=동&background=10b981&color=fff",
    date: "9/16/2026",
    title: "美밴스 “이란전, 앞으로 수개월간 전혀 다른 단계 진입할 것”",
    description: "JD 밴스 미국 부통령이 이란과의 전쟁이 향후 수개월 안에 “전혀 다른 단계”로 접어들 것이라고 밝혔다...",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    tags: ["politics", "top"]
  },
  {
    id: "4",
    sourceName: "Cafe",
    sourceIconUrl: "https://ui-avatars.com/api/?name=C&background=3b82f6&color=fff",
    date: "9/16/2026",
    title: "Ai từng chuyển tiền vào 70 tài khoản đứng tên 18 doanh nghiệp...",
    description: "Qua điều tra xác định các đối tượng đã sử dụng hơn 70 tài khoản đứng tên 18 doanh nghiệp để nhận và chuyển tiền lừa đảo...",
    imageUrl: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=800&q=80",
    tags: ["crime", "top"]
  },
  {
    id: "5",
    sourceName: "Google News",
    sourceIconUrl: "https://ui-avatars.com/api/?name=G&background=4285F4&color=fff",
    date: "9/16/2026",
    title: "Beatty reveals heated discussion with Trump over Kennedy Cent...",
    description: "Beatty reveals heated discussion with Trump over Kennedy Center The Hill Trump's handpicked Kennedy Center board votes to...",
    imageUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
    tags: ["politics"]
  },
  {
    id: "6",
    sourceName: "Channel Newsasia",
    sourceIconUrl: "https://ui-avatars.com/api/?name=CNA&background=ef4444&color=fff",
    date: "9/16/2026",
    title: "Ed Sheeran's tour in trouble after opening acts drop out in...",
    description: "Ed Sheeran's highly anticipated world tour has hit a massive roadblock after two opening acts dropped out...",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f92e?w=800&q=80",
    tags: ["entertainment", "music"]
  },
  {
    id: "7",
    sourceName: "Dinamalar",
    sourceIconUrl: "https://ui-avatars.com/api/?name=D&background=3b82f6&color=fff",
    date: "9/16/2026",
    title: "மனுத்தாக்கல் இன்று நிறைவு",
    description: "தாராபுரம்,:தாராபுரம் சட்டசபை தொகுதி இடைத்தேர்தல் அறிவிக்கப்பட்டுள்ள நிலையில், இன்று, வேட்பு மனு தாக்கல்...",
    imageUrl: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=800&q=80",
    tags: ["politics", "local"]
  },
  {
    id: "8",
    sourceName: "Cafe",
    sourceIconUrl: "https://ui-avatars.com/api/?name=C&background=3b82f6&color=fff",
    date: "9/16/2026",
    title: "Startup công nghệ AVES mở cuộc thi tìm ý tưởng thiết kế xe máy...",
    description: "Startup công nghệ AVES đã bắt đầu tìm kiếm những ý tưởng cho thế hệ xe tương lai thông qua một cuộc thi thiết kế trên toàn quốc...",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
    tags: ["top", "technology"]
  }
];
