
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PrintOption } from "@/types";

interface PrintOptionsProps {
  options: PrintOption[];
  onSelect: (option: PrintOption) => void;
  selectedOption: PrintOption;
}

const PrintOptions = ({ options, onSelect, selectedOption }: PrintOptionsProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3">Print Options</h3>
      <RadioGroup value={selectedOption.id} onValueChange={(value) => {
        const selected = options.find(option => option.id === value);
        if (selected) onSelect(selected);
      }}>
        {options.map((option) => (
          <div key={option.id} className="flex items-center justify-between space-x-2 p-3 border rounded-lg mb-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="cursor-pointer flex-1">
                <div>
                  <span className="font-medium">{option.label}</span>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </Label>
            </div>
            <span className="font-medium">${option.price.toFixed(2)}</span>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default PrintOptions;
