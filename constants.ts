
import { GalleryItemData, LayoutConfig } from './types';

export const GALLERY_LAYOUTS: LayoutConfig[][] = [
  // Layout Template 1: "The Showcase" - Features a large hero item.
  [
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1' },
  ],
  // Layout Template 2: "The Rhythm" - A more staggered, rhythmic flow.
  [
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
  ],
  // Layout Template 3: "The Mosaic" - A dense, balanced mix of sizes.
  [
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
    { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' },
  ],
];

export const GALLERY_IMAGES: GalleryItemData[] = [
  { 
    id: 1, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop', 
    caption: '客厅绿洲',
    description: "家的核心，为宁静而设计。宽大的窗户让空间充满自然光，而中性色调的豪华定制家具则让人放松。一个中央的极简壁炉成为空间的基石。",
    details: ['https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=1974&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop', 'https://images.unsplash.com/photo-1560185127-6ed189bf02a4?q=80&w=2070&auto=format&fit=crop'],
    category: '现代'
  },
  { 
    id: 2, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1596205252494-b044c38e1e74?q=80&w=1964&auto=format&fit=crop', 
    caption: '极简厨房',
    description: "功能性与艺术性在一个精简至极的厨房中相遇。无把手橱柜、集成电器和一体式大理石岛台创造了一个无缝且富有雕塑感的美食创作空间。",
    details: ['https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a67769bfd?q=80&w=2070&auto=format&fit=crop'],
    vrUrl: 'https://vr.justeasy.cn/view/16965am85u5cq242-1696855679.html',
    category: '极简'
  },
  { 
    id: 3, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce0687954?q=80&w=2070&auto=format&fit=crop', 
    caption: '宁静卧室',
    description: "一个休憩的圣地，这间卧室采用柔和的漫射光和柔和的大地色调。天然亚麻纺织品和温暖的橡木地板营造出纯粹平静和舒适的氛围。",
    details: ['https://images.unsplash.com/photo-1595125998182-3636173a704e?q=80&w=2070&auto=format&fit=crop'],
    category: '现代'
  },
  { 
    id: 101, 
    type: 'text', 
    title: "A Harmonious Blend", 
    paragraph: "Fusing raw, natural textures with clean, modern lines to create a space that is both grounding and uplifting.",
  },
  { 
    id: 4, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop', 
    caption: '室外雅致',
    description: "建筑以其简洁的几何线条和呼应自然景观的材料拥抱周围环境。设计优先考虑室内外环境之间的无缝过渡。",
    details: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'],
    category: '室外'
  },
  { 
    id: 5, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1567016432779-1fee84168239?q=80&w=1964&auto=format&fit=crop', 
    caption: '现代浴室',
    description: "一个水疗般的休憩空间，设有独立浴缸、步入式雨淋花洒和悬浮式洗手台。大尺寸石砖最大限度地减少了砖缝，营造出干净、整体的美感。",
    details: ['https://images.unsplash.com/photo-1593436122699-ce148d5ad779?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2080&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582502262226-00078216c8ec?q=80&w=1974&auto=format&fit=crop'],
    category: '极简'
  },
  { 
    id: 6, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1613918233303-013a74205515?q=80&w=2070&auto=format&fit=crop', 
    caption: '庭院圣地',
    description: "一个专为四季设计的户外生活区。它配备了舒适的休息座椅、一个火塘和精致的集成照明，为夜晚的放松营造出完美的氛围。",
    details: ['https://images.unsplash.com/photo-1598972149103-510003a34a94?q=80&w=1932&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop'],
    category: '室外'
  },
  { 
    id: 7, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop', 
    caption: '专注工作区',
    description: "一个专用的家庭办公室，激发清晰的思路和专注力。内置搁架和极简书桌减少了杂乱，而大窗户则提供了充足的自然光和与户外的连接。",
    details: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop'],
    category: '现代'
  },
   { 
    id: 8, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop', 
    caption: '经典书房',
    description: "丰富的桃花心木和皮革为阅读和思考创造了一个永恒而精致的氛围。",
    details: ['https://images.unsplash.com/photo-1618221195720-dd6b41fae0a2?q=80&w=1974&auto=format&fit=crop'],
    category: '经典'
  },
   { 
    id: 9, 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1542379362-986b6539a69b?q=80&w=2070&auto=format&fit=crop', 
    caption: '城市屋顶花园',
    description: "城市中的一片绿洲。这个屋顶设计融合了茂盛的绿植和模块化座椅，创造了一个多功能的娱乐和休憩空间。",
    details: ['https://images.unsplash.com/photo-1589949433178-3e3a479a43a8?q=80&w=1974&auto=format&fit=crop'],
    category: '室外'
  },
];

export const CONTACT_CONTENT = {
    title: "联系我们",
    paragraphs: [
        "我们乐于倾听您的想法。无论是项目咨询、合作机会，还是仅仅想打个招呼，都欢迎您通过以下方式与我们取得联系。",
        "邮箱: contact@etherealrenovations.com",
        "电话: +1 (234) 567-8900",
        "地址: 123 设计大道, 创意城, 10101"
    ]
};
