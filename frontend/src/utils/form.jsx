import { Select, SelectContent, SelectValue } from "@/components/ui/select";
import Input from "../components/ui/input";
import React from "react";
import { SelectTrigger } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
export default function form({ formData }) {
  function renderInputsByComponentType(getCotrolItem) {
    let element = null;
    const value = formData[getCotrolItem.name] || "";
    switch (getCotrolItem.componentType) {
      case "Input":
        element = (
          <Input
            name={getCotrolItem.name}
            type={getCotrolItem.type}
            id={getCotrolItem.name}
            placeholder={getCotrolItem.placeholder}
            value={value}
          />
        );
        break;
      case "Select":
        element = (
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={getCotrolItem.label} />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        );
        break;
      case "TextArea":
        element = (
          <Textarea
            name={getCotrolItem.name}
            id={getCotrolItem.name}
            placeholder={getCotrolItem.placeholder}
            value={value}
          />
        );
        break;
      default:
        element = (
          <Input
            name={getCotrolItem.name}
            type={getCotrolItem.type}
            id={getCotrolItem.name}
            placeholder={getCotrolItem.placeholder}
            value={value}
          />
        );
    }
    return element;
  }
}
