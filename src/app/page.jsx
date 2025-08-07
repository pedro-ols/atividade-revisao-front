import Image from "next/image";
import styles from "./page.module.css";
import Products from "../components/products";
import Header from "../components/header";

export default function Home() {
  const products = [
    {
      id: 1,
      category: "smartphones",
      image:
        "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop",
      alt: "iPhone 15 Pro Max",
      title: "iPhone 15 Pro Max 256GB",
      price: "R$ 8.999,00",
      description:
        "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.8) - 1.234 avaliações" },
    },
    {
      id: 2,
      category: "smartphones",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop",
      alt: "Samsung Galaxy S24 Ultra",
      title: "Samsung Galaxy S24 Ultra 512GB",
      price: "R$ 7.499,00",
      description:
        "Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.7) - 987 avaliações" },
    },
    {
      id: 3,
      category: "laptops",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop",
      alt: "MacBook Pro",
      title: 'MacBook Pro 14" M3 Pro 18GB',
      price: "R$ 15.999,00",
      description:
        "Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.9) - 2.156 avaliações" },
    },
    {
      id: 4,
      category: "laptops",
      image: "/public/images/4.png",
      alt: "Dell XPS",
      title: "Dell XPS 13 Intel i7 16GB SSD 512GB",
      price: "R$ 6.799,00",
      description:
        "Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.6) - 543 avaliações" },
    },
    {
      id: 5,
      category: "tablets",
      image: "",
      alt: "iPad Pro",
      title: 'iPad Pro 12.9" M2 WiFi 128GB',
      price: "R$ 7.299,00",
      description:
        "O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.8) - 1.876 avaliações" },
    },
    {
      id: 6,
      category: "tablets",
      image: null,
      alt: "Galaxy Tab",
      title: "Samsung Galaxy Tab S9+ 256GB",
      price: "R$ 4.999,00",
      description:
        "Tablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.5) - 432 avaliações" },
    },
    {
      id: 7,
      category: "acessorios",
      image: null,
      alt: "AirPods Pro",
      title: "Apple AirPods Pro 2ª Geração",
      price: "R$ 2.399,00",
      description:
        "Fones sem fio com cancelamento ativo de ruído, áudio espacial e até 30h de bateria.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.7) - 3.421 avaliações" },
    },
    {
      id: 8,
      category: "acessorios",
      image: null,
      alt: "Apple Watch",
      title: "Apple Watch Series 9 GPS 45mm",
      price: "R$ 4.299,00",
      description:
        "Smartwatch mais avançado com chip S9, Double Tap, monitoramento de saúde completo.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.6) - 2.187 avaliações" },
    },
    {
      id: 9,
      category: "acessorios",
      image: null,
      alt: "Carregador",
      title: "Carregador Sem Fio MagSafe 15W",
      price: "R$ 399,00",
      description:
        "Carregamento sem fio rápido e seguro para iPhone, alinhamento magnético perfeito.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.4) - 876 avaliações" },
    },
    {
      id: 10,
      category: "smartphones",
      image: "",
      alt: "Xiaomi",
      title: "Xiaomi 13 Pro 256GB Leica",
      price: "R$ 3.999,00",
      description:
        "Smartphone premium com câmeras Leica, carregamento ultra-rápido 120W e tela AMOLED.",
      rating: { stars: "⭐⭐⭐⭐⭐", reviews: "(4.5) - 654 avaliações" },
    },
  ];
  return (
    <div className={styles.container}>
      <Header productsQuant={products.length}/>
      <div className={styles.products}>
        <Products products={products} />
      </div>
    </div>
  );
}
