import { axios } from '@/common/AxiosClient';
import { Response } from '@/entities/Response';
import { IFile } from '@/entities/File';


type UploadFileResponse = Response<{
  files: IFile[];
}>;

export async function uploadFile(file: File): Promise<UploadFileResponse> {
  try {
    const formData = new FormData();

    formData.append('files', file);

    const response = await axios.post<UploadFileResponse>('/files/upload', formData);

    return response.data;
  } catch (error) {
    console.log({ error });
    return {
      success: false,
      message: 'An internal error has ocurred',
      files: []
    };
  }
}