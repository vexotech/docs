'use client';

import React, { useState } from 'react';
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = getTextContent(children);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
      return node;
    }
    if (typeof node === 'number') {
      return node.toString();
    }
    if (React.isValidElement(node)) {
      return getTextContent(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(getTextContent).join('');
    }
    return '';
  };

  return (
    <div className="relative group">
      <pre className={className}>
        {children}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <ClipboardCheckIcon className="h-4 w-4 text-green-400" />
          ) : (
            <ClipboardIcon className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </pre>
    </div>
  );
};