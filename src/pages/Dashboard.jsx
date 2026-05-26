import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaPlus
} from "react-icons/fa";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Card from "../components/Card";

export default function Dashboard() {

  // AREA CHART DATA
  const chartData = [
    { name: "Jan", orders: 30 },
    { name: "Feb", orders: 45 },
    { name: "Mar", orders: 60 },
    { name: "Apr", orders: 40 },
    { name: "May", orders: 80 },
    { name: "Jun", orders: 65 }
  ];

  // DONUT CHART DATA
  const pieData = [
    { name: "Completed", value: 400 },
    { name: "Pending", value: 300 },
    { name: "Cancelled", value: 200 }
  ];

  // CHART COLORS
  const COLORS = [
    "#22c55e",
    "#eab308",
    "#ef4444"
  ];

  return (

    <Container>

      {/* WRAPPER */}
      <div className="space-y-8 flex-1 flex flex-col">

        {/* PAGE HEADER */}
        <PageHeader
          title="Dashboard"
          breadcrumb="Home"
        >

          <Button
            type="primary"
            icon={<FaPlus />}
          >
            Add Button
          </Button>

        </PageHeader>

        {/* STATISTIC CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

          {/* TOTAL ORDERS */}
          <Card className="group flex items-center gap-5 p-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

            {/* ICON */}
            <div className="bg-[#10b981] text-white rounded-full p-4 shadow-lg shadow-emerald-100 group-hover:scale-110 transition-all">

              <FaShoppingCart className="text-lg" />

            </div>

            {/* CONTENT */}
            <div>

              <h2 className="text-3xl font-black text-[#1e293b]">

                75

              </h2>

              <p className="text-slate-400 font-medium">

                Total Orders

              </p>

            </div>

          </Card>

          {/* DELIVERED */}
          <Card className="group flex items-center gap-5 p-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

            {/* ICON */}
            <div className="bg-[#3b82f6] text-white rounded-full p-4 shadow-lg shadow-blue-100 group-hover:scale-110 transition-all">

              <FaTruck className="text-lg" />

            </div>

            {/* CONTENT */}
            <div>

              <h2 className="text-3xl font-black text-[#1e293b]">

                175

              </h2>

              <p className="text-slate-400 font-medium">

                Delivered

              </p>

            </div>

          </Card>

          {/* CANCELLED */}
          <Card className="group flex items-center gap-5 p-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

            {/* ICON */}
            <div className="bg-[#ef4444] text-white rounded-full p-4 shadow-lg shadow-red-100 group-hover:scale-110 transition-all">

              <FaBan className="text-lg" />

            </div>

            {/* CONTENT */}
            <div>

              <h2 className="text-3xl font-black text-[#1e293b]">

                40

              </h2>

              <p className="text-slate-400 font-medium">

                Cancelled

              </p>

            </div>

          </Card>

          {/* REVENUE */}
          <Card className="group flex items-center gap-5 p-5 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

            {/* ICON */}
            <div className="bg-[#f59e0b] text-white rounded-full p-4 shadow-lg shadow-amber-100 group-hover:scale-110 transition-all">

              <FaDollarSign className="text-lg" />

            </div>

            {/* CONTENT */}
            <div>

              <h2 className="text-3xl font-black text-[#1e293b]">

                Rp.128K

              </h2>

              <p className="text-slate-400 font-medium">

                Revenue

              </p>

            </div>

          </Card>

        </div>

        {/* CHART SECTION */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* AREA CHART */}
          <Card className="p-7">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-xl font-bold text-[#1e293b]">

                  Orders Overview

                </h2>

                <p className="text-slate-400 text-sm mt-1">

                  Monthly analytics performance

                </p>

              </div>

            </div>

            {/* CHART */}
            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <AreaChart data={chartData}>

                {/* GRADIENT */}
                <defs>

                  <linearGradient
                    id="colorOrders"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#10b981"
                      stopOpacity={0.4}
                    />

                    <stop
                      offset="95%"
                      stopColor="#10b981"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                {/* GRID */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                />

                {/* X AXIS */}
                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                />

                {/* Y AXIS */}
                <YAxis
                  stroke="#94a3b8"
                />

                {/* TOOLTIP */}
                <Tooltip />

                {/* AREA */}
                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#colorOrders)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </Card>

          {/* DONUT CHART */}
          <Card className="p-7">

            {/* HEADER */}
            <div className="mb-6">

              <h2 className="text-xl font-bold text-[#1e293b]">

                Order Status

              </h2>

              <p className="text-slate-400 text-sm mt-1">

                Current order distribution

              </p>

            </div>

            {/* CHART */}
            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >

                  {pieData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Legend />

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </Card>

        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </Container>
  );
}