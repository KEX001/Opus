import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = "text", showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-black/90 backdrop-blur-sm group">
      <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-auto">
          <button
            onClick={copyToClipboard}
            className="text-white/60 hover:text-white transition-colors p-1 rounded"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <pre className={cn("p-4 pt-14 text-white/90 overflow-x-auto text-sm", showLineNumbers && "line-numbers")}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
