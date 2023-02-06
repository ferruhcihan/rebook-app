export interface Book {
  id: string;
  title: string;
  thumbnail: string;
  authors: string[];
  language: string;
  saleInfo: {
    saleability: string;
    buyLink?: string;
  };
}

export interface PaginationType {
  total: number;
  current: number;
  pagination: any;
}
