import React from "react";

import Card from "../molecules/Card";

import "./listItem.scss";

const ListItem = () => {
  const data = [
    {
      id: 0,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "69 Diamonds",
      gameName: "PUBG",
      discount: 50,
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "available",
    },
    {
      id: 1,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "420 Diamonds",
      gameName: "Dota",
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "limited",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "666 Diamonds",
      gameName: "Mobile Legend",
      discount: 50,
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "available",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "6996969 Diamonds",
      gameName: "Ragnarok",
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "limited",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "123456 Diamonds",
      gameName: "Rising Force",
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "limited",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/hIXmJH9xhoo/640x420",
      itemName: "1 Diamonds",
      gameName: "Seal Online",
      deliveryBadge: "10 menit kirim",
      totalSold: 1000,
      price: 100_000,
      desc: "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 500,
      availibility: "available",
    },
  ];

  return (
    <div className="list-item">
      <Card item={data} />
    </div>
  );
};

export default ListItem;
