import { BasicComponent } from '@/utils/typeing'

export interface UploaderProps extends BasicComponent {
    name: string

    //   文件上传数量
    maxCount: number | string

    maxFileSize: number | string

    //  文件超出限制大小
    onOversize?: (file: File[]) => void
}

export type FileItemStatus =
    | 'ready'
    | 'uploading'
    | 'success'
    | 'error'
    | 'removed'

export class FileItem {
    status: FileItemStatus = 'ready'

    message = '准备中'

    uid: string = new Date().getTime().toString()

    name?: string

    url?: string

    type?: string

    path?: string

    percentage: string | number = 0

    formData: FormData = new FormData()

    responseText?: string
}
