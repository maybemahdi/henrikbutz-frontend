"use client";
import Footer from "@/components/shared/Footer/Footer";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { cn } from "@/lib/utils";
import {
  decrementOrderQuantity,
  incrementOrderQuantity,
  orderedProductsSelector,
  removeProduct,
  subTotalSelector,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Image,
  InputNumber,
  Space,
  Typography,
} from "antd";
import { useRef } from "react";
import FAQ from "../HomePage/FAQ/FAQ";
import { products } from "../HomePage/OurCollection/OurCollection";
import BestSelling from "./BestSelling/BestSelling";

const { Title, Text } = Typography;

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(orderedProductsSelector);
  const subTotal = useAppSelector(subTotalSelector);

  // Calculate total (in this case same as subtotal, but could include taxes, shipping, etc.)
  const total = subTotal;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startHolding = (action: () => void) => {
    action(); // fire once immediately
    intervalRef.current = setInterval(action, 150); // repeat every 150ms
  };

  const stopHolding = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleIncrement = (productId: string) => {
    dispatch(incrementOrderQuantity(productId));
  };

  const handleDecrement = (productId: string) => {
    dispatch(decrementOrderQuantity(productId));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb
          className="mb-6"
          items={[{ title: "Home", href: "/" }, { title: "Cart" }]}
          separator=">"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 font-medium text-gray-700">
                <div className="col-span-1"></div>
                <div className="col-span-2">Image</div>
                <div className="col-span-3">Name</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Sub total</div>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mt-4">
                {cartProducts?.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100"
                  >
                    {/* Remove Button */}
                    <div className="col-span-1">
                      <Button
                        type="text"
                        danger
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={() => handleRemove(product.id)}
                        className="bg-red-50 text-white hover:!bg-red-100"
                      />
                    </div>

                    {/* Product Image */}
                    <div className="col-span-2">
                      <Image
                        src={
                          product.images[0] ||
                          "/placeholder.svg?height=80&width=80&query=laptop"
                        }
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>

                    {/* Product Name */}
                    <div className="col-span-3">
                      <Text className="font-medium">{product.name}</Text>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <Text className="font-medium">
                        ${product.price.toFixed(2)}
                      </Text>
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-2">
                      <Space.Compact>
                        <Button
                          icon={<MinusOutlined />}
                          //   onClick={() => handleDecrement(product.id)}
                          onMouseDown={() =>
                            startHolding(() => handleDecrement(product.id))
                          }
                          onMouseUp={stopHolding}
                          onMouseLeave={stopHolding}
                          disabled={product.orderQuantity <= 1}
                        />
                        <InputNumber
                          value={product.orderQuantity}
                          min={1}
                          readOnly
                          className={cn("text-center", {
                            "w-12": product.orderQuantity > 9,
                            "w-8": product.orderQuantity <= 9,
                          })}
                        />
                        <Button
                          icon={<PlusOutlined />}
                          //   onClick={() => handleIncrement(product.id)}
                          onMouseDown={() =>
                            startHolding(() => handleIncrement(product.id))
                          }
                          onMouseUp={stopHolding}
                          onMouseLeave={stopHolding}
                        />
                      </Space.Compact>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-2">
                      <Text className="font-medium">
                        ${(product.price * product.orderQuantity).toFixed(2)}
                      </Text>
                    </div>
                  </div>
                ))}

                {cartProducts.length === 0 && (
                  <div className="text-center py-12">
                    <Text className="text-gray-500">Your cart is empty</Text>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Cart Totals */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm">
              <Title level={4} className="mb-4">
                Cart Totals
              </Title>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <Text>Sub total</Text>
                  <Text className="font-medium">${subTotal.toFixed(2)}</Text>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <Text className="font-medium">Total</Text>
                  <Text className="font-bold text-lg">${total.toFixed(2)}</Text>
                </div>

                <MyButton label="Proceed to Checkout" fullWidth />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-10 md:my-16">
        <div className="col-span-3 mb-5">
          <h3 className="text-2xl md:text-[34px] font-semibold text-center">
            Related Products
          </h3>
        </div>
        {products?.slice(0, 3).map((product) => (
          <ProductCard
            btnAction={"Add to Cart"}
            bg="bg-black"
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Best selling products */}
      <BestSelling bg={"bg-black"} />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
