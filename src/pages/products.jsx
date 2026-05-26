// src/pages/Product.jsx

import products from "../Data/products.json";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import {
  FaEye,
  FaTag,
  FaBox
} from "react-icons/fa";

import Button from "../components/Button";
import Badge from "../components/Badge";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Container from "../components/Container";

function Product() {

  // STATE
  const [productData, setProductData] = useState([]);

  // LOAD DATA
  useEffect(() => {

    setProductData(products);

  }, []);

  return (
    <Container>

      <div className="space-y-8">

        {/* PAGE HEADER */}
        <PageHeader
          title="Product Store"
          breadcrumb="Management Product"
        >

          <Button
            type="primary"
            icon={<FaBox />}
          >
            Add Product
          </Button>

        </PageHeader>

        {/* SUBTITLE */}
        <div>

          <p className="text-slate-400 text-lg font-medium">

            Daftar Product JSON dengan Table dan Looping

          </p>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">

          <table className="w-full border-collapse">

            {/* TABLE HEADER */}
            <thead className="bg-[#1e293b] text-white">

              <tr>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  No

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Image

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Title

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Code

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Category

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Brand

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Price

                </th>

                <th className="py-5 px-6 text-left text-xs uppercase tracking-widest font-bold">

                  Stock

                </th>

                <th className="py-5 px-6 text-center text-xs uppercase tracking-widest font-bold">

                  Action

                </th>

              </tr>

            </thead>

            {/* TABLE BODY */}
            <tbody>

              {productData.map((item, index) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-50 hover:bg-teal-50/50 transition duration-200 group"
                >

                  {/* NUMBER */}
                  <td className="py-5 px-6 font-semibold text-slate-400">

                    {index + 1}

                  </td>

                  {/* IMAGE */}
                  <td className="py-5 px-6">

                    <img
                      src={item.gambar}
                      alt={item.tittle}
                      className="w-14 h-14 rounded-2xl object-cover shadow-sm border-2 border-white group-hover:scale-110 transition-transform"
                    />

                  </td>

                  {/* TITLE */}
                  <td className="py-5 px-6">

                    <h2 className="font-bold text-[#1e293b]">

                      {item.tittle}

                    </h2>

                  </td>

                  {/* CODE */}
                  <td className="py-5 px-6 text-slate-400 font-medium">

                    {item.code}

                  </td>

                  {/* CATEGORY */}
                  <td className="py-5 px-6">

                    <div className="bg-teal-50 text-[#0d9488] px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 w-fit">

                      <FaTag className="text-[10px]" />

                      {item.category}

                    </div>

                  </td>

                  {/* BRAND */}
                  <td className="py-5 px-6 text-slate-600 font-medium">

                    {item.brand}

                  </td>

                  {/* PRICE */}
                  <td className="py-5 px-6">

                    <span className="text-[#1e293b] font-black">

                      Rp {item.price.toLocaleString("id-ID")}

                    </span>

                  </td>

                  {/* STOCK */}
                  <td className="py-5 px-6">

                    {item.stock > 10 ? (

                      <Badge type="success">
                        {item.stock} pcs
                      </Badge>

                    ) : (

                      <Badge type="warning">
                        {item.stock} pcs
                      </Badge>

                    )}

                  </td>

                  {/* ACTION */}
                  <td className="py-5 px-6 text-center">

                    <Link to={`/product/${item.id}`}>

                      <div className="flex justify-center">

                        <Button
                          type="primary"
                          icon={<FaEye />}
                        >
                          Detail
                        </Button>

                      </div>

                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </Container>
  );
}

export default Product;