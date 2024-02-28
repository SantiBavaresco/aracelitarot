"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import PdfReader from "./pdfReader/pdfReader"
import { FaArrowRightToBracket } from "react-icons/fa6";
import { pdfjs } from "react-pdf";
// import { useDisclosure } from "@nextui-org/react";

interface Props {
    url: string;
    title: string;
    layer: string;
    autoplay: number;
}

const ModalPdf: React.FC<Props> = ({ url, title, layer, autoplay }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [scrollBehavior, setScrollBehavior] = React.useState("inside");

    // const [numPages, setNumPages] = useState<number>();
    // const [pageNumber, setPageNumber] = useState<number>(1);

    // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    //     setNumPages(numPages);
    // }

    return (
        <div>
            <Button onPress={onOpen} className={layer}>
                {title} <FaArrowRightToBracket className="mt-1/2 ml-1/2" />{" "}
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <PdfReader url={url}/>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cerrar
                                </Button>
                                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
export default ModalPdf;
