'use client';
import React, { useEffect, useState } from 'react';

interface Message {
  title: string;
  description: string;
}

interface GlobalMessageProps {
  messages?: Message[]; // Array de objetos con title y description
  duration?: number;
}

export function GlobalMessage({ messages = [], duration = 3000 }: GlobalMessageProps) {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);

  useEffect(() => {
    if (messages.length > 0) {
      const updateMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(messages[randomIndex]);
      };

      // Muestra un mensaje inicial
      updateMessage();

      // Establece un intervalo para actualizar el mensaje
      const interval = setInterval(updateMessage, duration);

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [messages, duration]);

  return (
    <div className='w-full h-auto overflow-hidden'>
      {currentMessage && (
        <div className='p-1'>
          <h2 className='text-md font-semibold text-ellipsis text-wrap whitespace-nowrap'>
            {currentMessage.title}
          </h2>
          <p className='text-xs text-ellipsis'>
            {currentMessage.description}
          </p>
        </div>
      )}
    </div>
  );
}
