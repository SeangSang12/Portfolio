"use server";

import { NewsResponse } from "@/types/news.type";

export const fetchCryptoNews = async (page?: string, country?: string, language?: string): Promise<NewsResponse> => {
  const apiKey = process.env.API_Key;
  if (!apiKey) {
    throw new Error("API_Key is not defined in environment variables");
  }

  let url = `https://newsdata.io/api/1/crypto?apikey=${apiKey}`;
  if (page) url += `&page=${page}`;
  // NOTE: The /1/crypto endpoint does not support the country parameter!
  if (language) url += `&language=${language}`;
  
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    // If the API returns 422 (e.g. Unsupported filter like language=km for crypto)
    if (response.status === 422) {
      return { status: "success", results: [], totalResults: 0 };
    }
    throw new Error(`Failed to fetch crypto news: ${response.statusText}`);
  }

  return response.json();
};

export const fetchLatestNews = async (page?: string, country?: string, language?: string): Promise<NewsResponse> => {
  const apiKey = process.env.API_Key;
  if (!apiKey) {
    throw new Error("API_Key is not defined in environment variables");
  }

  let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}`;
  if (page) url += `&page=${page}`;
  if (country) url += `&country=${country}`;
  if (language) url += `&language=${language}`;
  
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    if (response.status === 422) {
      return { status: "success", results: [], totalResults: 0 };
    }
    throw new Error(`Failed to fetch latest news: ${response.statusText}`);
  }

  return response.json();
};

export const fetchNewsSources = async (page?: string, country?: string, language?: string): Promise<any> => {
  const apiKey = process.env.API_Key;
  if (!apiKey) {
    throw new Error("API_Key is not defined in environment variables");
  }

  let url = `https://newsdata.io/api/1/sources?apikey=${apiKey}`;
  if (page) url += `&page=${page}`;
  if (country) url += `&country=${country}`;
  if (language) url += `&language=${language}`;
  
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    if (response.status === 422) {
      return { status: "success", results: [], totalResults: 0 };
    }
    throw new Error(`Failed to fetch news sources: ${response.statusText}`);
  }

  return response.json();
};

export const fetchMarketNews = async (page?: string, country?: string, language?: string): Promise<any> => {
  const apiKey = process.env.API_Key;
  if (!apiKey) {
    throw new Error("API_Key is not defined in environment variables");
  }

  let url = `https://newsdata.io/api/1/market?apikey=${apiKey}`;
  if (page) url += `&page=${page}`;
  if (country) url += `&country=${country}`;
  if (language) url += `&language=${language}`;
  
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    if (response.status === 422) {
      return { status: "success", results: [], totalResults: 0 };
    }
    throw new Error(`Failed to fetch market news: ${response.statusText}`);
  }

  return response.json();
};
