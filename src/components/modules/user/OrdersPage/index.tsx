"use client";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { Button, Form, Input, Modal, Rate } from "antd";
import Link from "next/link";
import React, { useState } from "react";

interface Order {
  id: string;
  name: string;
  category: string;
  price: number;
  date: string;
}

const AllOrdersPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("Year");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { rating: number; review: string }) => {
    setLoading(true);
    try {
      console.log("Submitted values:", values);

      // ✅ You can send values to your API here
      // await api.post("/reviews", { ...values, productName });

      form.resetFields();
      setIsModalOpen(false);
    } finally {
      setLoading(false);
    }
  };

  // Sample data - replace with your actual data
  const orders: Order[] = [
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07890",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    {
      id: "ATA07880",
      name: "iPhone 15 latest",
      category: "Smartphone",
      price: 1000.0,
      date: "25 June,2025",
    },
    // Add more orders for pagination demo
    {
      id: "ATA07881",
      name: "MacBook Pro",
      category: "Laptop",
      price: 2000.0,
      date: "24 June,2025",
    },
    {
      id: "ATA07882",
      name: "iPad Air",
      category: "Tablet",
      price: 600.0,
      date: "23 June,2025",
    },
  ];

  const totalPages = 200;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesChange = (entries: number) => {
    setEntriesPerPage(entries);
    setCurrentPage(1);
  };

  const getPaginationRange = (currentPage: number, totalPages: number) => {
    const range = [];
    const showPages = 5; // Number of page buttons to show

    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust start if we're near the end
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      range.push(1);
      if (startPage > 2) {
        range.push("...");
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        range.push("...");
      }
      range.push(totalPages);
    }

    return range;
  };

  const PaginationButton: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    active?: boolean;
  }> = ({ children, onClick, disabled = false, active = false }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1 text-sm border rounded transition-colors duration-200 ${
        active
          ? "bg-blue-500 text-white border-blue-500"
          : disabled
          ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <span className="cursor-pointer hover:text-gray-900 transition-colors">
            Home
          </span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-900 font-medium">Orders</span>
        </div>

        {/* Header with Title and Filters */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">All Orders</h1>

          {/* Filter Options */}
          <div className="flex items-center space-x-4">
            {/* Month Filter */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="Month">Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="Year">Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentOrders.map((order, index) => (
                  <tr key={`${order.id}-${index}`} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${order.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-2 whitespace-nowrap text-sm text-gray-900">
                      <Link href={`/shop/${order.id}`}>
                        <MyButton
                          label="View"
                          className="py-1 px-2 text-sm rounded-lg"
                        />
                      </Link>
                      <MyButton
                        onClick={() => setIsModalOpen(true)}
                        label="Review"
                        className="py-1 px-2 text-sm rounded-lg"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer with Entries selector and Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            {/* Entries selector */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Entries</span>
              <select
                value={entriesPerPage}
                onChange={(e) => handleEntriesChange(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={6}>6</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            {/* Pagination */}
            <div className="flex items-center space-x-1">
              <PaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ←
              </PaginationButton>

              {getPaginationRange(currentPage, totalPages).map((page, index) =>
                typeof page === "number" ? (
                  <PaginationButton
                    key={index}
                    onClick={() => handlePageChange(page)}
                    active={page === currentPage}
                  >
                    {page}
                  </PaginationButton>
                ) : (
                  <span key={index} className="px-2 text-gray-500">
                    {page}
                  </span>
                )
              )}

              <PaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                →
              </PaginationButton>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={600}
      >
        <div className="text-center space-y-3 mb-6">
          <h2 className="text-2xl font-semibold">{"iPhone 17 Latest"}</h2>
          <div className="flex items-center justify-center gap-2">
            <Rate disabled value={Math.round(4)} />
            <span className="font-medium">{(4.4).toFixed(2)}</span>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ rating: 0 }}
        >
          <Form.Item
            label="Write a review"
            name="rating"
            rules={[{ required: true, message: "Please provide a rating!" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            name="review"
            rules={[
              { required: true, message: "Please write your review!" },
              { min: 10, message: "Review must be at least 10 characters." },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Write review..." />
          </Form.Item>

          <Form.Item>
            <MyButton type="submit" label="Submit" fullWidth />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AllOrdersPage;
