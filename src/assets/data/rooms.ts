export type Room = {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
};

const deluxeImages = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1572335350482359729/original/c603a21d-0070-4184-bdce-cbd8f788ebe7.jpeg",
  "https://a0.muscache.com/im/pictures/miso/Hosting-738867358240366186/original/2e3e35ff-6afb-4f24-8b1a-a7b3d340e8ef.jpeg",
];

const superiorImages = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1591045831422082607/original/f2049783-6eec-4fa1-833d-82b15e122a96.jpeg",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-913354713293847677/original/4cfaf38a-9263-4378-b85a-1d929e97e64c.jpeg",
];

const standardImages = [
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
];

const suiteImages = [
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
];

const roomTypes = [
  {
    title: "Deluxe Room",
    images: deluxeImages,
    basePrice: 3200,
    description:
      "Spacious deluxe room with mountain view balcony and modern interiors.",
  },
  {
    title: "Superior Room",
    images: superiorImages,
    basePrice: 2800,
    description:
      "Comfortable superior room with wooden flooring and cozy ambiance.",
  },
  {
    title: "Standard Room",
    images: standardImages,
    basePrice: 2200,
    description: "Affordable and comfortable room perfect for short stays.",
  },
  {
    title: "Family Suite",
    images: suiteImages,
    basePrice: 4500,
    description: "Large suite ideal for families with separate sitting area.",
  },
];

export const rooms: Room[] = Array.from({ length: 24 }).map((_, i) => {
  const type = roomTypes[i % 4];
  return {
    id: i + 1,
    title: `${type.title} ${i + 1}`,
    price: type.basePrice + (i % 3) * 300,
    images: type.images,
    description: type.description,
  };
});
