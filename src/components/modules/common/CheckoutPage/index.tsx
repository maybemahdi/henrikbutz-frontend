"use client";
import React from "react";
import { Form, Input, Checkbox, Button, Card, Divider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import Footer from "@/components/shared/Footer/Footer";

interface OrderItem {
  key?: string;
  product: string;
  quantity: number;
  subtotal: string;
}

const CheckoutPage: React.FC = () => {
  const [form] = Form.useForm();

  const orderColumns: ColumnsType<OrderItem> = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      align: "right",
    },
  ];

  const orderData: OrderItem[] = [
    {
      key: "1",
      product: "Product One",
      quantity: 1,
      subtotal: "$30.00",
    },
    {
      key: "2",
      product: "Product Two",
      quantity: 1,
      subtotal: "$30.00",
    },
    {
      key: "3",
      product: "Product Three",
      quantity: 1,
      subtotal: "$30.00",
    },
  ];

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Billing Details Section */}
          <div className="lg:col-span-3">
            <Card
              title="Billing Details"
              //   className="shadow-md"
              headStyle={{ fontSize: "20px", fontWeight: "bold" }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item
                    name="firstName"
                    label={<span className="font-semibold">First Name*</span>}
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    label="Last Name*"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>

                <Form.Item name="company" label="Company Name (Optional)">
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="country"
                  label="Country/Region*"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Street Address*"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="city"
                  label="Town/City*"
                  rules={[
                    { required: true, message: "Please input your city!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="postcode"
                  label="Postcode*"
                  rules={[
                    { required: true, message: "Please input your postcode!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone*"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email Address*"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>

                <Form.Item
                  name="additionalInfo"
                  label="Others Information (Optional)"
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </Form>
            </Card>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-2">
            <Card
              title="Your Order"
              className="shadow-md"
              headStyle={{ fontSize: "20px", fontWeight: "bold" }}
            >
              <Table
                columns={orderColumns}
                dataSource={orderData}
                pagination={false}
                className="mb-6"
                summary={() => (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell
                        index={0}
                        colSpan={2}
                        className="font-semibold"
                      >
                        Subtotal
                      </Table.Summary.Cell>
                      <Table.Summary.Cell
                        index={1}
                        className="text-right font-semibold"
                      >
                        $120.00
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                    <Table.Summary.Row>
                      <Table.Summary.Cell
                        index={0}
                        colSpan={2}
                        className="font-semibold"
                      >
                        Total
                      </Table.Summary.Cell>
                      <Table.Summary.Cell
                        index={1}
                        className="text-right font-semibold"
                      >
                        $120.00
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                )}
              />

              <Divider />

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-4">
                  Select payment method
                </h3>

                <Form>
                  <Form.Item name="paymentMethod" rules={[{ required: true }]}>
                    <Checkbox.Group className="w-full">
                      <div className="flex flex-col space-y-3">
                        <Checkbox value="cash" className="py-2">
                          Cash on Delivery
                        </Checkbox>
                        <Checkbox value="card" className="py-2">
                          Card on Delivery
                        </Checkbox>
                        <Checkbox value="online" className="py-2">
                          Online Bank Transfer/Cheque on Delivery
                        </Checkbox>
                      </div>
                    </Checkbox.Group>
                  </Form.Item>
                </Form>
              </div>

              <Divider />

              <Form>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                "You must agree to the terms and conditions"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox>
                    I have read and agree to the website terms and condition.
                    <div className="text-sm text-gray-500 mt-1">
                      Please: policy, status and return policy
                    </div>
                  </Checkbox>
                </Form.Item>
              </Form>

              <MyButton label="Place Order" fullWidth />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
