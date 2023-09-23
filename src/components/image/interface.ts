import React from 'react'

export interface ImageProps {
    src: string
    alt: string
    fit: ImageFit
    width: number | string
    height: number | string
    radius: number | string
    loading: boolean | React.ReactNode
    error: boolean | React.ReactNode
    lazy: boolean
    onLoad: () => void
    onError: () => void
}

export type ImageFit =
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | string
