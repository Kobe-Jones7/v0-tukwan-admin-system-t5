"use client";

import { InputHTMLAttributes } from "react";

import { Location } from "@/app/generated/prisma";
import { Input } from "./ui/input";
import { Places } from "./Map";

export interface PlaceProps
    extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "value">> {
    setFieldValue?: any;
    setFieldTouched?: any;
    name: string;
    value: Location;
    country?: string[];
}

export function Place({
    name,
    value,
    country,
    placeholder = "",
    setFieldValue,
    setFieldTouched,
    ...props
}: PlaceProps) {
    return (
        <Places
            country={country}
            id={name}
            onChange={(value: Location) => {
                setFieldValue?.(name, value);
                setTimeout(() => setFieldTouched?.(name, true), 500);
            }}
        >
            <Input
                placeholder={placeholder}
                defaultValue={value?.address || ""}
                {...props} />
        </Places>
    );
}
