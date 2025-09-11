"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "antd";
import MyButton from "@/components/ui/core/MyButton/MyButton";
import { cn } from "@/lib/utils";

const addonCategories = [
  { id: "headphone", name: "Headphone", active: true },
  { id: "protector", name: "Protector", active: false },
  { id: "charger", name: "Charger", active: false },
  { id: "back-cover", name: "Back Cover", active: false },
  { id: "case", name: "Case", active: false },
  { id: "stand", name: "Stand", active: false },
];

export function AddonSlider() {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 overflow-hidden">
        <div className="flex gap-2 flex-1">
          {addonCategories.map((category) => (
            <MyButton
              key={category.id}
              label={category.name}
              variant={category.active ? "filled" : "outline"}
              className={cn({
                "!bg-sec-gradient !py-2 !px-3 text-sm !text-black":
                  category.active,
                "!py-2 !px-3 text-sm !text-black": !category.active,
              })}
            />
          ))}
        </div>
        <Button size="small" icon={<ChevronRight className="w-4 h-4" />} />
      </div>
    </div>
  );
}
