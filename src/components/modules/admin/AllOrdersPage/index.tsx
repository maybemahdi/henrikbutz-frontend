"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { DatePicker, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const { Option } = Select;

interface OrderData {
  key: string;
  product: string;
  date: string;
  price: string;
  category: string;
  status: "Approved" | "Rejected" | "Pending";
  customer: string;
}

const mockData: OrderData[] = [
  {
    key: "1",
    product: "iPhone 14",
    date: "10 Jan",
    price: "$30.00",
    category: "Smartphone",
    status: "Approved",
    customer: "Emily Rose",
  },
  {
    key: "2",
    product: "iPhone 14",
    date: "10 Jan",
    price: "$30.00",
    category: "Smartphone",
    status: "Rejected",
    customer: "Emily Rose",
  },
  // ... more data
];

export default function AllOrdersPage() {
  const [activeTab, setActiveTab] = useState<
    "Pending" | "Accepted" | "Rejected"
  >("Pending");

  const [selectedYear, setSelectedYear] = useState(dayjs().year().toString());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [objectQuery, setObjectQuery] = useState<
    { name: string; value: any }[]
  >([
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "limit",
      value: pageSize,
    },
  ]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const handleView = (order: OrderData) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  useEffect(() => {
    setObjectQuery([
      {
        name: "page",
        value: currentPage,
      },
      {
        name: "limit",
        value: pageSize,
      },
    ]);
  }, [currentPage, pageSize]);

  const handleYearChange = (
    date: Dayjs | null,
    dateString: string | string[]
  ) => {
    if (typeof dateString === "string") setSelectedYear(dateString);
  };

  const handleTabChange = (tab: "Pending" | "Accepted" | "Rejected") => {
    setActiveTab(tab);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-500";
      case "Rejected":
        return "text-red-500";
      case "Pending":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  const columns: ColumnsType<OrderData> = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className="flex items-center gap-1">
          <span className={`${getStatusColor(status)} font-medium`}>
            {status}
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <MyButton
          onClick={() => {
            handleView(record);
          }}
          label="View"
          className="py-1 px-3"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {/* Tabs */}
          <div className="flex gap-2">
            {["Pending", "Accepted", "Rejected"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as any)}
                className={`h-9 px-5 rounded-lg font-medium border transition ${
                  activeTab === tab
                    ? "bg-core-gradient border-blue-600 text-white"
                    : "bg-transparent border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <Select
              defaultValue="Category"
              className="h-10 w-32"
              suffixIcon={
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="#666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              <Option value="all">All Categories</Option>
              <Option value="smartphone">Smartphone</Option>
              <Option value="laptop">Laptop</Option>
            </Select>
            <Select
              defaultValue="Status"
              className="h-10 w-32"
              suffixIcon={
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="#666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              <Option value="all">All Status</Option>
              <Option value="approved">Approved</Option>
              <Option value="pending">Pending</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
            <DatePicker
              onChange={handleYearChange}
              picker="year"
              defaultValue={dayjs(selectedYear, "YYYY")}
              className="w-20"
              size="middle"
            />
          </div>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={mockData}
          pagination={false}
          className="orders-table"
        />
        {/* Pagination */}
        <div className="flex items-center justify-center w-fit mx-auto gap-4 my-5">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={20}
            onChange={handlePageChange}
            className="custom-pagination"
          />
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        title="Order Detail"
      >
        {selectedOrder && (
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Payment method:</span> Cash on
              delivery
            </p>
            <div className="grid grid-cols-2 gap-4 border rounded-md p-4">
              <div>
                <p className="font-semibold">Billed to</p>
                <p>{selectedOrder.customer}</p>
                <p>example@email.com</p>
              </div>
              <div>
                <p className="font-semibold">Billed date</p>
                <p>15 January, 2025</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold">Email</p>
                <p>example@email.com</p>
                <p className="mt-2 font-semibold">Phone</p>
                <p>0123456789</p>
                <p className="mt-2 font-semibold">Address</p>
                <p>123 Design Street, Suite 200, Austin, TX 78701, USA</p>
              </div>
            </div>

            <div className="mt-4 border-t pt-2">
              <div className="grid grid-cols-4 font-semibold border-b pb-1">
                <span>Item</span>
                <span>Quantity</span>
                <span>Rate</span>
                <span>Total</span>
              </div>
              <div className="grid grid-cols-4 py-1">
                <span>iPhone 15</span>
                <span>1</span>
                <span>$1000.00</span>
                <span>$1000.00</span>
              </div>
              <div className="grid grid-cols-4 py-1">
                <span>Add-ons (Headphone, Cover)</span>
                <span></span>
                <span></span>
                <span>$600.00</span>
              </div>
              <div className="grid grid-cols-4 py-1 font-semibold">
                <span>Subtotal</span>
                <span></span>
                <span></span>
                <span>$1600.00</span>
              </div>
              <div className="grid grid-cols-4 py-1 font-semibold text-lg">
                <span>Total</span>
                <span></span>
                <span></span>
                <span>$1600.00</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
