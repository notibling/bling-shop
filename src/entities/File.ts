interface IFile {
  id: number;
  path: string;
  mimeType: string;
  status: 'active' | 'inactive';

  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}

export { type IFile };