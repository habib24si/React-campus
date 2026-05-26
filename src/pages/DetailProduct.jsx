// src/pages/DetailProduct.jsx

import { useParams, Link } from "react-router-dom";

import products from "../Data/products.json";

import Button from "../components/Button";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import Container from "../components/Container";

import {
  FaArrowLeft,
  FaShoppingCart,
  FaWallet,
  FaCheckCircle
} from "react-icons/fa";

function DetailProduct() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  // PRODUCT NOT FOUND
  if (!product) {

    return (
      <Container>

        <div className="min-h-screen flex items-center justify-center">

          <div className="text-center bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100">

            <h1 className="text-4xl font-black text-[#1e293b] mb-4">

              Product

              <span className="text-[#0d9488]">
                {" "}Tidak Ditemukan
              </span>

            </h1>

            <div className="flex justify-center mt-8">

              <Link to="/product">

                <Button type="primary">
                  Kembali ke Toko
                </Button>

              </Link>

            </div>

          </div>

        </div>

      </Container>
    );
  }

  return (
    <Container>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* BACK BUTTON */}
        <div>

          <Link to="/product">

            <Button
              type="outline"
              icon={<FaArrowLeft />}
            >
              Kembali
            </Button>

          </Link>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 grid md:grid-cols-2">

          {/* IMAGE SECTION */}
          <div className="relative group overflow-hidden bg-slate-100">

            <img
              src={product.gambar}
              alt={product.tittle}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* PREMIUM BADGE */}
            <div className="absolute top-8 left-8">

              <Badge type="info">
                Premium Choice
              </Badge>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-10 md:p-16 flex flex-col justify-center">

            {/* CATEGORY */}
            <div className="flex items-center gap-2 mb-4">

              <div className="w-10 h-1 bg-[#0d9488] rounded-full"></div>

              <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">

                {product.category}

              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-black text-[#1e293b] leading-tight">

              {product.tittle}

            </h1>

            {/* PRICE */}
            <div className="mt-6 flex items-baseline gap-2">

              <span className="text-slate-400 text-xl font-medium">
                Rp
              </span>

              <p className="text-[#0d9488] text-5xl font-black tracking-tighter">

                {product.price.toLocaleString("id-ID")}

              </p>

            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-8">

              {/* OFFICIAL STORE */}
              <div className="flex items-center gap-2 bg-teal-50 text-[#0d9488] px-4 py-2 rounded-xl text-sm font-bold">

                <FaCheckCircle className="text-xs" />

                Official Store

              </div>

              {/* SKU */}
              <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold">

                SKU: {product.code}

              </div>

              {/* STOCK */}
              <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-sm font-bold">

                Stock: {product.stock} pcs

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-500 mt-10 leading-relaxed text-lg font-medium">

              Nikmati pengalaman kuliner terbaik dengan{" "}

              <span className="text-[#1e293b] font-bold">

                {product.tittle}

              </span>

              . Dibuat dari bahan-bahan pilihan yang segar dan diproses secara higienis untuk menjaga kualitas serta cita rasa autentik khas Sedap Restaurant.

            </p>

            {/* ACTION BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">

              {/* BUY NOW */}
              <div className="flex-1">

                <Button
                  type="dark"
                  icon={<FaWallet />}
                >
                  Beli Sekarang
                </Button>

              </div>

              {/* ADD CART */}
              <div className="flex-1">

                <Button
                  type="outline"
                  icon={<FaShoppingCart />}
                >
                  + Keranjang
                </Button>

              </div>

            </div>

            {/* FOOTER INFO */}
            <p className="text-center text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">

              Gratis Ongkir Seluruh Indonesia

            </p>

          </div>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </Container>
  );
}

export default DetailProduct;