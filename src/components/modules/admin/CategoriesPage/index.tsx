"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

interface Category {
  id: string;
  name: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Mobile" },
    { id: "2", name: "iPhone" },
    { id: "3", name: "Laptop" },
    { id: "4", name: "WristTech" },
    { id: "5", name: "Watch" },
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    toast.success("Category deleted successfully");
  };

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      toast.error("Please enter a category name");
      return;
    }

    const newCat: Category = {
      id: Date.now().toString(),
      name: newCategory.trim(),
    };

    setCategories([...categories, newCat]);
    setNewCategory("");
    toast.success("Category added successfully");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          All categories
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="relative border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              bodyStyle={{ padding: "24px 16px", textAlign: "center" }}
            >
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <CloseOutlined className="text-white text-xs" />
              </button>
              <div className="text-gray-900 font-medium text-base">
                {category.name}
              </div>
            </Card>
          ))}
        </div>

        {/* Add Category Section */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-gray-900">
            Product Category
          </label>

          <Input
            placeholder="Write category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-12 text-base"
            style={{
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />

          <MyButton
            label="Add Category"
            onClick={handleAddCategory}
            customIcon={<PlusOutlined />}
            iconPosition="left"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
