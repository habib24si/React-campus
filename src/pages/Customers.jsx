import {
  FaEnvelope,
  FaPhone,
  FaEye,
  FaUserPlus,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";

import { Link } from "react-router-dom";

import customersData from "../Data/customers.json";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Card from "../components/Card";
import Table from "../components/Table";

export default function Customers() {

  // TABLE HEADERS
  const headers = [
    "Profile",
    "Contact Info",
    "Loyalty",
    "Actions",
  ];

  // STATE
  const [customers, setCustomers] = useState(customersData);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Gold",
  });

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.customerName ||
      !formData.email
    ) {

      return alert("Please fill all fields");

    }

    const newCustomer = {

      customerId:
        "C" +
        (customers.length + 1)
          .toString()
          .padStart(3, "0"),

      image: `https://i.pravatar.cc/150?img=${
        customers.length + 1
      }`,

      ...formData,

    };

    setCustomers([
      ...customers,
      newCustomer,
    ]);

    setShowForm(false);

    // RESET FORM
    setFormData({
      customerName: "",
      email: "",
      phone: "",
      loyalty: "Gold",
    });

  };

  return (
    <Container>

      <div className="space-y-8">

        {/* PAGE HEADER */}
        <PageHeader
          title="Customers"
          breadcrumb="Management System"
        >

          <Button
            type="primary"
            onClick={() => setShowForm(true)}
            icon={<FaUserPlus />}
          >
            Add Customer
          </Button>

        </PageHeader>

        {/* MODAL */}
        {showForm && (

          <div className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-md flex items-center justify-center z-50 p-4">

            <Card className="w-full max-w-md overflow-hidden rounded-[2.5rem]">

              {/* MODAL HEADER */}
              <div className="bg-[#1e293b] p-6 text-white flex justify-between items-center">

                <h2 className="text-xl font-bold">
                  New Customer
                </h2>

                <button
                  onClick={() => setShowForm(false)}
                  className="hover:rotate-90 transition-transform"
                >

                  <FaTimes />

                </button>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="p-8 space-y-4"
              >

                {/* FULL NAME */}
                <div className="space-y-1">

                  <label className="text-sm font-semibold text-slate-500 ml-1">

                    Full Name

                  </label>

                  <input
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:bg-white transition-all text-[#1e293b]"
                  />

                </div>

                {/* EMAIL & PHONE */}
                <div className="grid grid-cols-2 gap-4">

                  {/* EMAIL */}
                  <div className="space-y-1">

                    <label className="text-sm font-semibold text-slate-500 ml-1">

                      Email

                    </label>

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:bg-white transition-all text-[#1e293b]"
                    />

                  </div>

                  {/* PHONE */}
                  <div className="space-y-1">

                    <label className="text-sm font-semibold text-slate-500 ml-1">

                      Phone

                    </label>

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812..."
                      className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:bg-white transition-all text-[#1e293b]"
                    />

                  </div>

                </div>

                {/* LOYALTY */}
                <div className="space-y-1">

                  <label className="text-sm font-semibold text-slate-500 ml-1">

                    Loyalty Tier

                  </label>

                  <select
                    name="loyalty"
                    value={formData.loyalty}
                    onChange={handleChange}
                    className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:bg-white transition-all text-[#1e293b]"
                  >

                    <option value="Gold">
                      Gold
                    </option>

                    <option value="Silver">
                      Silver
                    </option>

                    <option value="Bronze">
                      Bronze
                    </option>

                  </select>

                </div>

                {/* ACTION */}
                <div className="flex justify-end gap-3 pt-4">

                  <Button
                    type="outline"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>

                  <Button type="primary">
                    Save Data
                  </Button>

                </div>

              </form>

            </Card>

          </div>

        )}

        {/* TABLE COMPONENT */}
        <Table headers={headers}>

          {customers.length > 0 ? (

            customers.map((cust, index) => (

              <tr
                key={cust.customerId}
                className="group hover:bg-[#f0fdfa] transition-all duration-300 border-b border-slate-100"
              >

                {/* PROFILE */}
                <td className="py-5 px-8">

                  <div className="flex items-center gap-4">

                    {/* IMAGE */}
                    <div className="relative">

                      <img
                        src={
                          cust.image ||
                          `https://i.pravatar.cc/150?img=${index + 1}`
                        }

                        alt={cust.customerName}

                        className="w-12 h-12 rounded-2xl object-cover ring-2 ring-teal-50 group-hover:ring-teal-200 transition-all shadow-md"
                      />

                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          index % 2 === 0
                            ? "bg-green-500"
                            : "bg-slate-300"
                        }`}
                      ></div>

                    </div>

                    {/* NAME */}
                    <div>

                      <h3 className="font-bold text-[#1e293b] group-hover:text-[#0d9488] transition-colors">

                        {cust.customerName}

                      </h3>

                      <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-tighter">

                        {cust.customerId}

                      </span>

                    </div>

                  </div>

                </td>

                {/* CONTACT */}
                <td className="py-5 px-6">

                  <div className="space-y-1">

                    <div className="flex items-center gap-2 text-sm text-slate-600">

                      <FaEnvelope className="text-[#0d9488]/60 text-xs" />

                      {cust.email}

                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <FaPhone className="text-[#0d9488]/60 text-xs" />

                      {cust.phone}

                    </div>

                  </div>

                </td>

                {/* BADGE */}
                <td className="py-5 px-6">

                  <Badge loyalty={cust.loyalty} />

                </td>

                {/* ACTION */}
                <td className="py-5 px-6 text-center">

                  <Link
                    to={`/customers/${cust.customerId}`}
                  >

                    <div className="flex justify-center">

                      <Button
                        type="outline"
                        icon={<FaEye />}
                      >
                        View Profile
                      </Button>

                    </div>

                  </Link>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="text-center py-20"
              >

                <div className="flex flex-col items-center opacity-30">

                  <div className="text-5xl mb-4">
                    📭
                  </div>

                  <p className="text-slate-500 font-medium italic">

                    Empty customer database

                  </p>

                </div>

              </td>

            </tr>

          )}

        </Table>

        {/* FOOTER */}
        <Footer />

      </div>

    </Container>
  );
}