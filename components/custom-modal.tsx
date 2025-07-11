"use client";
import { DialogTitle } from "@radix-ui/react-dialog";
import React from "react";
import clsx from "clsx";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "./ui/dialog";
import { useModal } from "@/providers/modal";

type Props = {
    title: string;
    description?: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

const CustomModal = ({
    children,
    className,
    defaultOpen,
    description,
    title,
}: Props) => {
    const { isOpen, setClose } = useModal();
    return (
        <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
            <DialogContent className={clsx("md:max-h-[calc(100dvh-3rem)]", className)}>
                <DialogHeader className="text-left">
                    <DialogTitle className="text-xl text-center font-bold">
                        {title}
                    </DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default CustomModal;
