'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/atoms';
import { FaTimes } from 'react-icons/fa';

interface InputFileProps {
  method: 'area' | 'button'; // Define el método de carga de archivos
  labelText?: string; // Texto de la etiqueta
  onFilesSelected: (files: FileList | null) => void; // Callback para manejar los archivos seleccionados
  areaText?: string; // Texto para el área de selección
  buttonText?: string; // Texto para el botón de carga
}

const InputFile: React.FC<InputFileProps> = ({ method, labelText = 'Cargar archivos', onFilesSelected, areaText = 'Arrastre los archivos aquí o haga clic para seleccionar', buttonText = 'Seleccionar archivos' }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<{ file: File; url: string }[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onFilesSelected(files);
      const newPreviews = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files) {
      onFilesSelected(files);
      const newPreviews = Array.from(files).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleRemovePreview = (file: File) => {
    setPreviews((prev) => prev.filter((preview) => preview.file !== file));
  };

  return (
    <div>
      {labelText && (
        <div className="text-center w-full text-sm py-3">
          <label dangerouslySetInnerHTML={{ __html: labelText }} />
        </div>
      )}
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} multiple />
      {method === 'area' && (
        <div onClick={handleAreaClick} onDrop={handleDrop} onDragOver={handleDragOver} className="rounded-md border text-sm border-slate-400 border-dashed cursor-pointer bg-slate-100 p-5 text-center flex justify-center items-center">
          {areaText}
        </div>
      )}
      {method === 'button' && (
        <Button onClick={handleAreaClick} className={'btn-md bling-btn-primary'}>
          {buttonText}
        </Button>
      )}
      <div className="flex flex-wrap mt-4 gap-4  justify-center items-center">
        {previews.map((preview, index) => (
          <div key={index} className="relative max-w-[800px] border border-slate-200 rounded-md p-2 flex justify-center items-center">
            <img src={preview.url} alt={`Vista previa ${index + 1}`} className="max-w-[300px] max-h-[300px]" />
            <Button icon={<FaTimes />} className="w-5 h-5 absolute top-0 right-0 bg-red-500 text-white rounded-full " onClick={() => handleRemovePreview(preview.file)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { InputFile };
