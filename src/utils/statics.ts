import { IFile } from '@/entities/File';

export const getStaticFileUrl = (file?: IFile, baseUrl?: string) => {
  if (!file) return '';
  const url = baseUrl ?? process.env.NEXT_PUBLIC_BACKEND_API_URL;
  return `${url}/${file.path}`;
};
