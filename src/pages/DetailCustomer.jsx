// src/pages/DetailCustomer.jsx

import { useParams, Link } from "react-router-dom";

import customers from "../Data/customers.json";

import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Container from "../components/Container";

import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaCheckCircle
} from "react-icons/fa";

function DetailCustomer() {

  const { id } = useParams();

  const customer = customers.find(
    (item) => item.customerId === id
  );

  // NOT FOUND
  if (!customer) {

    return (
      <Container>

        <div className="min-h-screen flex items-center justify-center">

          <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center border border-slate-100">

            <div className="text-6xl mb-4">
              🔍
            </div>

            <h1 className="text-3xl font-bold text-slate-800">

              Customer Tidak Ditemukan

            </h1>

            <p className="text-slate-500 mt-2">

              ID yang Anda cari tidak terdaftar di sistem kami.

            </p>

            <div className="mt-8 flex justify-center">

              <Link to="/customers">

                <Button type="primary">
                  Kembali ke Daftar
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

      <div className="max-w-5xl mx-auto space-y-8">

        {/* BACK BUTTON */}
        <Link
          to="/customers"
          className="inline-block"
        >

          <Button
            type="outline"
            icon={<FaArrowLeft />}
          >
            Kembali
          </Button>

        </Link>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100 grid lg:grid-cols-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0d9488] p-12 text-white flex flex-col items-center justify-center relative">

            {/* BLUR EFFECT */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>

            {/* AVATAR */}
            <div className="relative">

              <Avatar
                image={`https://i.pravatar.cc/300?img=${parseInt(
                  customer.customerId.replace("C", "")
                )}`}
                name={customer.customerName}
                active={true}
              />

              {/* VERIFIED */}
              <div className="absolute -bottom-3 -right-3 bg-teal-500 text-white p-3 rounded-2xl shadow-xl">

                <FaCheckCircle className="text-xl" />

              </div>

            </div>

            {/* CUSTOMER NAME */}
            <div className="mt-8 text-center">

              <h1 className="text-3xl font-bold tracking-tight">

                {customer.customerName}

              </h1>

              <p className="text-teal-200/80 font-medium mt-1 tracking-widest uppercase text-sm">

                ID: {customer.customerId}

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 p-8 md:p-14">

            {/* HEADER */}
            <header className="flex justify-between items-start mb-10">

              <div>

                <h2 className="text-3xl font-extrabold text-slate-800">

                  Profil Customer

                </h2>

                <p className="text-slate-400 mt-1">

                  Data detail keanggotaan pelanggan

                </p>

              </div>

              {/* BADGE */}
              <Badge loyalty={customer.loyalty} />

            </header>

            {/* CONTENT */}
            <div className="grid gap-6">

              {/* EMAIL */}
              <div className="group bg-slate-50 p-6 rounded-2xl border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-md transition-all duration-300">

                <div className="flex items-center gap-4">

                  {/* ICON */}
                  <div className="p-3 bg-white rounded-xl shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">

                    <FaEnvelope className="text-xl" />

                  </div>

                  {/* TEXT */}
                  <div>

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">

                      Email Address

                    </p>

                    <p className="text-lg font-bold text-slate-700">

                      {customer.email}

                    </p>

                  </div>

                </div>

              </div>

              {/* PHONE */}
              <div className="group bg-slate-50 p-6 rounded-2xl border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-md transition-all duration-300">

                <div className="flex items-center gap-4">

                  {/* ICON */}
                  <div className="p-3 bg-white rounded-xl shadow-sm text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">

                    <FaPhone className="text-xl" />

                  </div>

                  {/* TEXT */}
                  <div>

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">

                      Phone Number

                    </p>

                    <p className="text-lg font-bold text-slate-700">

                      {customer.phone}

                    </p>

                  </div>

                </div>

              </div>

              {/* FOOTER NOTE */}
              <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm italic">

                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>

                Data terakhir diperbarui hari ini

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </Container>
  );
}

export default DetailCustomer;