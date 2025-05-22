import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({ value, onChange, placeholder, disabled }: ChatInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  );
}