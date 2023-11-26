import React, { FunctionComponent } from 'react'
import { FileItem, UploaderProps } from './interface'

const classPrefix = 'ashe-uploader'
const defaultProps = {
    name: 'file',
    maxCount: 1,
    maxFileSize: Number.MAX_VALUE,
} as UploaderProps
export const Uploader: FunctionComponent<
    Partial<UploaderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
    const { name, maxCount, maxFileSize, onOversize, children } = {
        ...defaultProps,
        ...props,
    }

    const filterFiles = (files: File[]) => {
        const oversizes = new Array<File>()
        const filterFile = files.filter((file) => {
            if (file.size > (maxFileSize as number)) {
                oversizes.push(file)
                return false
            }
            return true
        })
        if (oversizes.length) {
            onOversize && onOversize(oversizes)
        }
        return filterFile
    }

    const readFile = (files: File[]) => {
        files.forEach((file) => {
            const formData = new FormData()
            formData.append(name, file)
            const fileItem = new FileItem()
            fileItem.name = file.name
            fileItem.status = 'ready'
            fileItem.type = file.type
            fileItem.formData = formData
            fileItem.uid = file.lastModified + fileItem.uid
        })
    }
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const e = event.target
        const { files } = e
        // const _files = filterFiles(new Array<File>().slice.call(files))
        const _files = filterFiles(new Array<File>().slice.call(files))
        readFile(_files)
    }
    return (
        <div className={classPrefix}>
            <input
                type="file"
                className={`${classPrefix}__input`}
                onChange={onFileChange}
            />
        </div>
    )
}

Uploader.defaultProps = defaultProps
Uploader.displayName = 'AsheUploader'
