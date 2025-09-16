"use client";

import { useState } from "react";
import { Form, Input, Select, Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import MyButton from "@/components/ui/core/MyButton/MyButton";

const { TextArea } = Input;
const { Option } = Select;

// Fake category data
const categories = [
  { id: "cat-1", label: "Technology" },
  { id: "cat-2", label: "Business" },
  { id: "cat-3", label: "Lifestyle" },
  { id: "cat-4", label: "Health" },
  { id: "cat-5", label: "Education" },
];

interface BlogFormData {
  categoryId: string;
  title: string;
  shortDescription: string;
  topicTitle: string;
  topicDescription: string;
}

export default function CreateBlogPage() {
  const [form] = Form.useForm();
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [optionalImageFile, setOptionalImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCoverImageUpload: UploadProps["customRequest"] = ({
    file,
    onSuccess,
  }) => {
    setCoverImageFile(file as File);
    onSuccess?.("ok");
  };

  const handleOptionalImageUpload: UploadProps["customRequest"] = ({
    file,
    onSuccess,
  }) => {
    setOptionalImageFile(file as File);
    onSuccess?.("ok");
  };

  const onFinish = async (values: BlogFormData) => {
    if (!coverImageFile) {
      message.error("Cover image is required!");
      return;
    }

    setLoading(true);

    try {
      // Create FormData as specified
      const formData = new FormData();
      formData.append("coverImage", coverImageFile);

      if (optionalImageFile) {
        formData.append("optionalImage", optionalImageFile);
      }

      formData.append(
        "bodyData",
        JSON.stringify({
          categoryId: values.categoryId,
          title: values.title,
          shortDescription: values.shortDescription,
          topicTitle: values.topicTitle,
          topicDescription: values.topicDescription,
        })
      );

      // Here you would send the formData to your API
      console.log("FormData ready to send:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      message.success("Blog created successfully!");
      form.resetFields();
      setCoverImageFile(null);
      setOptionalImageFile(null);
    } catch (error) {
      message.error("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const uploadButton = (
    <div className="flex flex-col items-center justify-center p-8 text-gray-400">
      <PlusOutlined className="text-2xl mb-2 text-red-500" />
      <div>Drop your files here</div>
    </div>
  );

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-6"
      >
        {/* Category Selection */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">
              Select Category
            </span>
          }
          name="categoryId"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select Category" size="large" className="w-full">
            {categories.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Title */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">Title</span>
          }
          name="title"
          rules={[
            { required: true, message: "Please enter a title!" },
            { min: 5, message: "Title must be at least 5 characters!" },
          ]}
        >
          <Input
            placeholder="Write topic"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Short Description */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">
              Short Description
            </span>
          }
          name="shortDescription"
          rules={[
            { required: true, message: "Please enter a short description!" },
            { min: 10, message: "Description must be at least 10 characters!" },
          ]}
        >
          <TextArea
            placeholder="Write description"
            rows={4}
            className="rounded-lg"
          />
        </Form.Item>

        {/* Cover Image */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">
              Cover Image
            </span>
          }
          required
        >
          <Upload.Dragger
            name="coverImage"
            customRequest={handleCoverImageUpload}
            showUploadList={false}
            accept="image/*"
            className="rounded-lg transition-colors"
          >
            {coverImageFile ? (
              <div className="p-4">
                <div className="text-green-600 mb-2">
                  ✓ Cover image uploaded
                </div>
                <div className="text-sm text-gray-500">
                  {coverImageFile.name}
                </div>
              </div>
            ) : (
              uploadButton
            )}
          </Upload.Dragger>
        </Form.Item>

        {/* Add Blog Part Button */}
        {/* <div className="flex justify-start">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 border-0 rounded-lg px-6 py-2 h-auto"
          >
            Add Blog Part
          </Button>
        </div> */}

        {/* Topic Title */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">Title</span>
          }
          name="topicTitle"
          rules={[
            { required: true, message: "Please enter a topic title!" },
            { min: 3, message: "Topic title must be at least 3 characters!" },
          ]}
        >
          <Input
            placeholder="Write topic"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Topic Description */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">
              Description
            </span>
          }
          name="topicDescription"
          rules={[
            { required: true, message: "Please enter a topic description!" },
            {
              min: 10,
              message: "Topic description must be at least 10 characters!",
            },
          ]}
        >
          <TextArea
            placeholder="Write description"
            rows={4}
            className="rounded-lg"
          />
        </Form.Item>

        {/* Optional Image */}
        <Form.Item
          label={
            <span className="text-sm font-medium text-gray-700">
              Image (Optional)
            </span>
          }
        >
          <Upload.Dragger
            name="optionalImage"
            customRequest={handleOptionalImageUpload}
            showUploadList={false}
            accept="image/*"
            className="rounded-lg transition-colors"
          >
            {optionalImageFile ? (
              <div className="p-4">
                <div className="text-green-600 mb-2">
                  ✓ Optional image uploaded
                </div>
                <div className="text-sm text-gray-500">
                  {optionalImageFile.name}
                </div>
              </div>
            ) : (
              uploadButton
            )}
          </Upload.Dragger>
        </Form.Item>

        {/* Publish Button */}
        <Form.Item className="mb-0">
          <MyButton label="Publish Blog" fullWidth type="submit" />
        </Form.Item>
      </Form>
    </div>
  );
}
