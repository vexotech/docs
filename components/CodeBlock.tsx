'use client';

import React, { useState } from 'react';
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

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

  const highlightCode = (code: string, language: string) => {
    // First escape HTML entities to prevent issues
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');

    if (language === 'javascript' || language === 'jsx' || language === 'js') {
      // Comments FIRST - so keywords inside comments don't get highlighted
      highlighted = highlighted.replace(
        /\/\/.*$/gm,
        '<span style="color: #6a9955; font-style: italic;">$&</span>'
      );

      // Strings (now with escaped quotes) - SECOND
      highlighted = highlighted.replace(
        /(&quot;)((?:\\.|(?!&quot;)[^\\])*?)(&quot;)/g,
        '<span style="color: #ce9178;">$1$2$3</span>'
      );
      highlighted = highlighted.replace(
        /(&#x27;)((?:\\.|(?!&#x27;)[^\\])*?)(&#x27;)/g,
        '<span style="color: #ce9178;">$1$2$3</span>'
      );

      // Keywords LAST - but only outside of already highlighted spans
      highlighted = highlighted.replace(
        /\b(const|let|var|function|async|await|return|if|else|for|while|class|import|export|from|default|null|undefined|true|false)\b(?![^<]*<\/span>)/g,
        '<span style="color: #569cd6;">$1</span>'
      );

      // Numbers
      highlighted = highlighted.replace(
        /\b(\d+\.?\d*)\b(?![^<]*<\/span>)/g,
        '<span style="color: #b5cea8;">$1</span>'
      );
    }

    if (language === 'html') {
      // HTML tags (now with escaped brackets)
      highlighted = highlighted.replace(
        /(&lt;\/?[a-zA-Z][^&]*&gt;)/g,
        '<span style="color: #569cd6;">$1</span>'
      );

      // HTML attributes
      highlighted = highlighted.replace(
        /(\w+)(=)(&quot;[^&]*&quot;)/g,
        '<span style="color: #9cdcfe;">$1</span><span style="color: #d4d4d4;">$2</span><span style="color: #ce9178;">$3</span>'
      );
    }

    return highlighted;
  };

  // Check if this is a code block with language
  const codeElement = React.isValidElement(children) && children.type === 'code' ? children : null;
  const codeClassName = codeElement?.props?.className || '';
  const language = codeClassName.replace('language-', '') || '';
  const codeContent = getTextContent(children);

  const supportedLanguages = ['javascript', 'jsx', 'html', 'js'];
  const shouldHighlight = supportedLanguages.includes(language);

  return (
    <div className="relative group">
      <pre className="hljs">
        {shouldHighlight ? (
          <code dangerouslySetInnerHTML={{
            __html: highlightCode(codeContent, language)
          }} />
        ) : (
          children
        )}
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