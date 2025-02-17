import { Trash2Icon } from 'lucide-react'
import { Button, IconButton } from '~/components/ui'
import { FileUpload, type FileUploadProps } from '~/components/ui/file-upload'

export const Demo = (props: FileUploadProps) => (
  <FileUpload.Root maxFiles={3} {...props}>
    <FileUpload.Dropzone>
      <FileUpload.Label>Drop your files here</FileUpload.Label>
      <FileUpload.Trigger asChild>
        <Button size="sm">Open Dialog</Button>
      </FileUpload.Trigger>
    </FileUpload.Dropzone>
    <FileUpload.ItemGroup>
      {(files) =>
        files.map((file, id) => (
          <FileUpload.Item key={id} file={file}>
            <FileUpload.ItemPreviewImage />
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger asChild>
              <IconButton variant="link" size="sm">
                <Trash2Icon />
              </IconButton>
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        ))
      }
    </FileUpload.ItemGroup>
  </FileUpload.Root>
)
