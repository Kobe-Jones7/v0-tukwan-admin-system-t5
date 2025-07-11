"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Loader2Icon, PlusIcon, Trash2, Upload } from "lucide-react";
import clsx from "clsx";
import { uploadFile } from "@/lib/queries/upload-file";

type UploadProps = {
    name: string
    bucket?: "attractions" | "marketplace" | "tour_packages" | "itinerary";
    type: "image" | "pdf";
    disabled?: boolean;
    onValueChanged: (value: string) => void;
};

const FileUpload = ({
    name,
    bucket = "attractions",
    type,
    disabled = false,
    onValueChanged,
}: UploadProps) => {
    /**
     * refs
     */
    const imageRef = useRef<any>(null);

    /**
     * variables
     */
    const [uploading, setUploading] = useState(false);
    const format: string[] = (() => {
        const format = [];

        if (type === "image") {
            format.push(["image/jpg", "image/jpeg", "image/png", "image/webp"]);
        }

        if (type === "pdf") {
            format.push(["application/pdf"]);
        }

        return format.flat();
    })();

    return (
        <>
            <input
                name={name}
                type="file"
                ref={imageRef}
                className="hidden"
                accept={format.join(", ")}
                disabled={uploading || disabled}
                onChange={async ({ currentTarget: { files } }) => {
                    if (files?.[0]) {
                        setUploading(true);
                        const uploaded_file = await uploadFile(files[0], bucket);
                        if (uploaded_file.url) {
                            onValueChanged(uploaded_file.url);
                            setUploading(false);
                        }
                        setTimeout(() => {
                            imageRef.current.value = "";
                        });
                    }
                }}
            />

            <div
                className={clsx({ "cursor-pointer": !disabled }, "h-40 aspect-square border-2 border-dashed rounded-md flex flex-col items-center justify-center hover:bg-gray-50")}
                onClick={() => { imageRef.current.click(); }}
            >
                {uploading ? <Loader2Icon className="w-5 h-5 animate-spin" /> :
                    <>
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload</p>
                    </>
                }
            </div>
        </>
    );
};

export default FileUpload;
