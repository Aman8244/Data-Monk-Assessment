"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { IndianRupeeIcon } from "lucide-react";
import { Share } from "lucide-react";


const FormPrintingCost = () => {
    const [formData, setFormData] = useState({
        quantity: 0,
        rate: 0,
        size: "A4",
        type: "plain",
        side: "single",
        binding: "none",
        property: []
    })
    const [totalPrice, setTotalPrice] = useState(formData.rate * formData.quantity)
    const handleCheckboxChange = (checked, value) => {
        setFormData((prev) => {
            const newProperties = checked
                ? [...prev.property, value]
                : prev.property.filter((item) => item !== value);

            return {
                ...prev,
                property: newProperties,
            };
        });
    };

    return (
        <div
            className="shadow-input mx-auto w-full rounded-none  p-4 md:rounded-2xl md:p-8 bg-black">
            <h2 className="text-xl font-bold text-neutral-200">
                Welcome to Printing Cost Calculator
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-300">
                Calculate the printing cost by providing necessary information
            </p>
            <form className="my-8">
                <div
                    className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input onChange={(e) => {
                            setFormData((prevdata) => {
                                if (e.target.value === "")
                                    return {
                                        ...prevdata,
                                        quantity: 0
                                    }
                                return {
                                    ...prevdata,
                                    quantity: parseFloat(e.target.value)
                                }
                            })
                            setTotalPrice(e.target.value * formData.rate)
                        }} value={formData.quantity === "" ? "0" : formData.quantity.toString()} id="quantity" placeholder="0" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="rate">Rate per page</Label>
                        <Input id="rate" onChange={(e) => {
                            setFormData((prevdata) => {
                                if (e.target.value === "")
                                    return {
                                        ...prevdata,
                                        rate: 0
                                    }
                                return {
                                    ...prevdata,
                                    rate: parseFloat(e.target.value)
                                }
                            })
                            setTotalPrice(e.target.value * formData.quantity)
                        }} value={formData.rate === "" ? "0" : formData.rate.toString()} placeholder="0" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="size">Size</Label>
                    <Select onValueChange={(val) => setFormData((prevdata) => {
                        return {
                            ...prevdata,
                            size: val
                        }
                    })} value={formData.size}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="A4" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="A4">A4</SelectItem>
                            <SelectItem value="A3">A3</SelectItem>
                        </SelectContent>
                    </Select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label className="mb-2">Page Properties</Label>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-sm text-white">
                            <Checkbox
                                id="color"
                                checked={formData.property.includes("color")}
                                onCheckedChange={(checked) => handleCheckboxChange(checked, "color")}
                            />

                            Color
                        </label>
                        <label className="flex items-center gap-2 text-sm text-white">
                            <Checkbox
                                id="bw"
                                checked={formData.property.includes("bw")}
                                onCheckedChange={(checked) => handleCheckboxChange(checked, "bw")}
                            />
                            Black & White
                        </label>
                    </div>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="type">Paper Type</Label>
                    <Select onValueChange={(val) => setFormData((prevdata) => {
                        return {
                            ...prevdata,
                            type: val
                        }
                    })} value={formData.type}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Plain" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="plain">Plain</SelectItem>
                            <SelectItem value="glossy">Glossy</SelectItem>
                            <SelectItem value="matte">Matte</SelectItem>
                            <SelectItem value="recycled">Recycled</SelectItem>
                        </SelectContent>
                    </Select>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="print-side">Print Side</Label>
                    <Select onValueChange={(val) => setFormData((prevdata) => {
                        return {
                            ...prevdata,
                            side: val
                        }
                    })} value={formData.side}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Single Side" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single Side</SelectItem>
                            <SelectItem value="double">Double Side</SelectItem>
                        </SelectContent>
                    </Select>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="binding">Binding</Label>
                    <Select onValueChange={(val) => setFormData((prevdata) => {
                        return {
                            ...prevdata,
                            binding: val
                        }
                    })} value={formData.binding}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="None" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="spiral">Spiral</SelectItem>
                            <SelectItem value="stapled">Stapled</SelectItem>
                            <SelectItem value="pinned">Pinned</SelectItem>
                        </SelectContent>
                    </Select>
                </LabelInputContainer>


                {/* <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit">
                    Calculate &rarr;
                    <BottomGradient />
                </button> */}

                <div
                    className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />


            </form>
            <div className="flex flex-col text-white items-center justify-center w-full">
                <div className="text-xl gap-4 flex  md:text-3xl my-6">
                    Total Price : <div className=" flex items-center gap-2">
                        <IndianRupeeIcon /> {totalPrice.toString()}
                    </div>
                </div>
                <div className="flex items-center w-full justify-center gap-4">
                    <button
                        className=" px-4 cursor-pointer  h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    >
                        Download PDF &rarr;
                        <BottomGradient />
                    </button>
                    <button
                        className=" flex cursor-pointer gap-2 items-center justify-center px-4  h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    >
                        <Share className="mr-2"/> Share
                        <BottomGradient />
                    </button>
                </div>
            </div>
        </div>
    );
}
const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

export default FormPrintingCost;