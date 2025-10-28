export enum Page {
  Home,
  Gallery,
  About,
}

export interface GalleryImage {
  id: number;
  type: 'image';
  src: string;
  caption: string;
  description: string;
  details: string[];
  colSpan: string;
  rowSpan: string;
}

export interface GalleryTextBlock {
  id: number;
  type: 'text';
  title: string;
  paragraph: string;
  colSpan:string;
  rowSpan: string;
}

export type GalleryItemData = GalleryImage | GalleryTextBlock;