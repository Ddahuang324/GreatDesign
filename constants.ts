import { GalleryItemData } from './types';

export const GALLERY_IMAGES: GalleryItemData[] = [
  { 
    id: 1, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p1/1200/800', 
    caption: 'Living Room Oasis',
    description: "The heart of the home, designed for tranquility. Expansive windows flood the space with natural light, while plush, custom-made furniture in neutral tones invites relaxation. A central, minimalist fireplace acts as the grounding element.",
    details: ['https://picsum.photos/seed/d1a/800/600', 'https://picsum.photos/seed/d1b/800/600', 'https://picsum.photos/seed/d1c/800/600'],
    colSpan: 'col-span-1 md:col-span-2', 
    rowSpan: 'md:row-span-2' 
  },
  { 
    id: 2, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p2/800/1200', 
    caption: 'Minimalist Kitchen',
    description: "Functionality meets artistry in a kitchen stripped to its essentials. Handle-less cabinetry, integrated appliances, and a monolithic marble island create a seamless and sculptural workspace for culinary creativity.",
    details: ['https://picsum.photos/seed/d2a/800/600', 'https://picsum.photos/seed/d2b/800/600'],
    colSpan: 'col-span-1', 
    rowSpan: 'md:row-span-2',
    vrUrl: 'https://vr.justeasy.cn/view/16965am85u5cq242-1696855679.html'
  },
  { 
    id: 3, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p3/800/600', 
    caption: 'Serene Bedroom',
    description: "A sanctuary for rest, this bedroom features soft, diffused lighting and a palette of muted earth tones. Natural linen textiles and warm oak flooring create an atmosphere of pure calm and comfort.",
    details: ['https://picsum.photos/seed/d3a/800/600'],
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1' 
  },
  { 
    id: 101, 
    type: 'text', 
    title: "A Harmonious Blend", 
    paragraph: "Fusing raw, natural textures with clean, modern lines to create a space that is both grounding and uplifting.",
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1' 
  },
  { 
    id: 4, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p4/800/600', 
    caption: 'Exterior Elegance',
    description: "The architecture embraces its surroundings with clean geometric lines and materials that echo the natural landscape. The design prioritizes a seamless transition between the indoor and outdoor environments.",
    details: ['https://picsum.photos/seed/d4a/800/600', 'https://picsum.photos/seed/d4b/800/600'],
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1' 
  },
  { 
    id: 5, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p5/800/1200', 
    caption: 'Modern Bathroom',
    description: "A spa-like retreat featuring a freestanding tub, walk-in rain shower, and floating vanity. Large-format stone tiles minimize grout lines, contributing to a clean, monolithic aesthetic.",
    details: ['https://picsum.photos/seed/d5a/800/600', 'https://picsum.photos/seed/d5b/800/600', 'https://picsum.photos/seed/d5c/800/600'],
    colSpan: 'col-span-1', 
    rowSpan: 'md:row-span-2' 
  },
  { 
    id: 6, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p6/1200/800', 
    caption: 'Patio Sanctuary',
    description: "An outdoor living area designed for all seasons. It features comfortable lounge seating, a fire pit, and subtle, integrated lighting, creating the perfect ambiance for evening relaxation.",
    details: ['https://picsum.photos/seed/d6a/800/600', 'https://picsum.photos/seed/d6b/800/600'],
    colSpan: 'col-span-1 md:col-span-2', 
    rowSpan: 'md:row-span-2' 
  },
  { 
    id: 7, 
    type: 'image', 
    src: 'https://picsum.photos/seed/p7/800/600', 
    caption: 'Workspace Focus',
    description: "A dedicated home office that inspires clarity and focus. Built-in shelving and a minimalist desk reduce clutter, while a large window provides ample natural light and a connection to the outdoors.",
    details: ['https://picsum.photos/seed/d7a/800/600'],
    colSpan: 'col-span-1', 
    rowSpan: 'row-span-1' 
  },
];

export const ABOUT_CONTENT = {
    title: "Design Philosophy",
    paragraphs: [
        "Our approach is rooted in a philosophy of subtraction. We believe that true luxury lies not in what is added, but in what is thoughtfully taken away. Each line, material, and source of light is meticulously considered to create spaces that are not just visually stunning, but emotionally resonant.",
        "We blend timeless materials with modern techniques to craft environments that breathe. Natural wood, stone, and expansive glass are our core palette, used to blur the lines between interior and exterior, creating a seamless flow that enhances daily life.",
        "This project was a journey in restraint and refinement. From the foundational structure to the finest details, our goal was to build a home that feels both monumental and intimate—a sanctuary of calm and inspiration."
    ]
};