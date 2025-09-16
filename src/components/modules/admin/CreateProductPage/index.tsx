"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Upload,
} from "antd";
import { useEffect, useState } from "react";

const { TextArea } = Input;
const { Option } = Select;

// Mock data for categories
const categories = [
  { id: "cat-1", label: "Electronics" },
  { id: "cat-2", label: "Clothing" },
  { id: "cat-3", label: "Home & Garden" },
  { id: "cat-4", label: "Sports" },
];

// Mock data for available tags
const availableTags = ["smartphone", "phone", "electronics", "mobile", "tech"];

// Color options
const colorOptions = [
  { label: "White", value: "white", color: "#ffffff" },
  { label: "Black", value: "black", color: "#000000" },
  { label: "Blue", value: "blue", color: "#1890ff" },
  { label: "Red", value: "red", color: "#ff4d4f" },
  { label: "Green", value: "green", color: "#52c41a" },
  { label: "Purple", value: "purple", color: "#722ed1" },
];

interface FAQ {
  question: string;
  answer: string;
}

export default function CreateProductPage() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }]);
  const [previewData, setPreviewData] = useState({
    name: "iPhone 17 Pro",
    price: 1099.0,
    image: "/iphone-17-pro-with-purple-gradient-screen-showing-.jpg",
  });

  const handleFormChange = () => {
    const values = (form as any).getFieldsValue();

    let previewImage =
      "/iphone-14-pro-with-purple-gradient-screen-showing-.jpg";

    if (fileList.length > 0) {
      const firstFile = fileList[0];
      if (firstFile.originFileObj) {
        previewImage = URL.createObjectURL(firstFile.originFileObj);
      } else if (firstFile.url) {
        previewImage = firstFile.url;
      }
    }

    setPreviewData({
      name: values.productTitle || "Product Name",
      price: values.price || 0,
      image: previewImage,
    });
  };

  useEffect(() => {
    handleFormChange();
  }, [fileList]);

  const handleUploadChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const addFAQ = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFAQ = (index: number) => {
    if (faqs.length > 1) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  const updateFAQ = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const onFinish = (values: any) => {
    const formData = new FormData();

    // Add images to FormData
    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("productImages", file.originFileObj);
      }
    });

    // Prepare body data
    const bodyData = {
      name: values.productTitle,
      categoryId: values.category,
      price: values.price,
      colors: values.colors || [],
      productIntro: values.productIntro,
      productGuide: values.productGuide,
      sku: values.sku,
      tags: values.tags || [],
      productTitle: values.productTitle,
      productDescription: values.description,
      faqs: faqs.filter((faq) => faq.question && faq.answer),
    };

    formData.append("bodyData", JSON.stringify(bodyData));

    console.log("FormData prepared:", bodyData);
    message.success("Product added successfully!");
  };

  return (
    <div className="min-h-screen">
      <Row gutter={24}>
        {/* Form Section */}
        <Col span={16}>
          <Card className="shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onValuesChange={handleFormChange}
              initialValues={{
                productTitle: "iPhone 17 Pro",
                price: 1099,
                sku: "prd-001",
              }}
            >
              {/* Product Title */}
              <Form.Item
                label="Product title"
                name="productTitle"
                rules={[
                  { required: true, message: "Please enter product title" },
                ]}
              >
                <Input placeholder="Product title" />
              </Form.Item>

              {/* Upload Images */}
              <Form.Item label="Upload product images">
                <Upload.Dragger
                  multiple
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleUploadChange}
                  beforeUpload={() => false}
                  className="upload-area"
                >
                  <div className="text-center p-4">
                    <PlusOutlined className="text-2xl text-gray-400 mb-2" />
                    <div className="text-gray-500">Drop your images here</div>
                  </div>
                </Upload.Dragger>
              </Form.Item>

              {/* Category */}
              <Form.Item
                label="Select Category"
                name="category"
                rules={[
                  { required: true, message: "Please select a category" },
                ]}
              >
                <Select placeholder="Category">
                  {categories.map((cat) => (
                    <Option key={cat.id} value={cat.id}>
                      {cat.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Price */}
              <Form.Item
                label="Product Price"
                name="price"
                rules={[{ required: true, message: "Please enter price" }]}
              >
                <InputNumber
                  placeholder="Product Price"
                  style={{ width: "100%" }}
                  min={0}
                  step={0.01}
                  precision={2}
                />
              </Form.Item>

              {/* Colors */}
              <Form.Item label="Add Color" name="colors">
                <Select
                  mode="multiple"
                  placeholder="Select colors"
                  style={{ width: "100%" }}
                >
                  {colorOptions.map((color) => (
                    <Option key={color.value} value={color.value}>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color.color }}
                        />
                        {color.label}
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Product Intro */}
              <Form.Item label="Product Intro" name="productIntro">
                <TextArea rows={3} placeholder="Intro" />
              </Form.Item>

              {/* Product Guide */}
              <Form.Item label="Product Guide" name="productGuide">
                <TextArea rows={3} placeholder="Description" />
              </Form.Item>

              {/* SKU */}
              <Form.Item
                label="SKU"
                name="sku"
                rules={[{ required: true, message: "Please enter SKU" }]}
              >
                <Input placeholder="Input SKU" />
              </Form.Item>

              {/* Tags */}
              <Form.Item label="Tags" name="tags">
                <Select
                  mode="tags"
                  placeholder="Input tag"
                  style={{ width: "100%" }}
                >
                  {availableTags.map((tag) => (
                    <Option key={tag} value={tag}>
                      {tag}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Description */}
              <Form.Item label="Description">
                <Form.Item name="title" style={{ marginBottom: 8 }}>
                  <Input placeholder="Title" />
                </Form.Item>
                <Form.Item name="description" style={{ marginBottom: 0 }}>
                  <TextArea rows={3} placeholder="Description" />
                </Form.Item>
              </Form.Item>

              {/* FAQs */}
              <Form.Item label="Frequently Asked Question">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">FAQ {index + 1}</span>
                      {faqs.length > 1 && (
                        <Button
                          type="text"
                          danger
                          size="small"
                          icon={<DeleteOutlined />}
                          onClick={() => removeFAQ(index)}
                        />
                      )}
                    </div>
                    <Input
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) =>
                        updateFAQ(index, "question", e.target.value)
                      }
                      className="mb-2"
                    />
                    <TextArea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) =>
                        updateFAQ(index, "answer", e.target.value)
                      }
                      rows={2}
                    />
                  </div>
                ))}
                <Button
                  type="dashed"
                  onClick={addFAQ}
                  icon={<PlusOutlined />}
                  className="w-full"
                >
                  Add FAQ
                </Button>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <MyButton
                  label="Add Product"
                  fullWidth
                  type="submit"
                  iconPosition="left"
                  customIcon={<PlusOutlined />}
                />
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Preview Section */}
        <Col span={8}>
          <Card title="Preview" className="shadow-sm">
            <div className="bg-white rounded-lg p-4">
              <img
                src={previewData.image || "/placeholder.svg"}
                alt={previewData.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{previewData.name}</h3>
              <p className="text-gray-600 mb-4">
                ${previewData.price.toFixed(2)}
              </p>
              <div className="flex gap-2">
                <Button type="primary" size="small">
                  Edit
                </Button>
                <Button type="primary" danger size="small">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
