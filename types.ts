export enum Page {
  Home,
  Gallery,
  About,
  Archive,
}

export interface LayoutConfig {
  colSpan: string;
  rowSpan: string;
}

export interface GalleryImage {
  id: number;
  type: 'image';
  src: string;
  caption: string;
  description: string;
  details: string[];
  vrUrl?: string;
  category: string;
}

export interface GalleryTextBlock {
  id: number;
  type: 'text';
  title: string;
  paragraph: string;
}

export type GalleryItemData = GalleryImage | GalleryTextBlock;