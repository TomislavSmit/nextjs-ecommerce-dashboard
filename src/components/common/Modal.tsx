'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'

interface ModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export default function Modal({
    title,
    isOpen,
    onClose,
    children,
}: ModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
