"use client";
import { useRef, useState } from "react";
import { X, Loader2, Upload } from "lucide-react";
import { fileToCompressedDataUri } from "@/lib/imageUpload";

interface ImageUploadProps {
  value: string;
  onChange: (dataUri: string) => void;
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);

  async function processFile(file: File | undefined) {
    if (!file) return;
    setError("");
    setLoading(true);
    try {
      const dataUri = await fileToCompressedDataUri(file);
      onChange(dataUri);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    processFile(e.dataTransfer.files?.[0]);
  }

  return (
    <div>
      {value ? (
        <div className="relative rounded-xl overflow-hidden group border border-white/[0.10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Cover preview" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg bg-white/90 text-black text-xs font-semibold hover:bg-white transition-all"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="px-3 py-1.5 rounded-lg bg-red-500/90 text-white text-xs font-semibold hover:bg-red-500 transition-all flex items-center gap-1"
            >
              <X size={12} /> Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          disabled={loading}
          className={`w-full h-40 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-all ${
            dragOver
              ? "border-violet-500/60 bg-violet-500/10"
              : "border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.20]"
          }`}
        >
          {loading ? (
            <>
              <Loader2 size={22} className="text-violet-400 animate-spin" />
              <span className="text-white/50 text-sm">Processing image…</span>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Upload size={18} className="text-white/40" />
              </div>
              <span className="text-white/60 text-sm font-medium">Click or drag an image to upload</span>
              <span className="text-white/30 text-xs">JPG, PNG, WEBP — up to 10MB</span>
            </>
          )}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => processFile(e.target.files?.[0])}
      />
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  );
}