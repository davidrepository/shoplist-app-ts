import { useState } from "react";

type Props = { imageUrl: string; alt: string };

export const LazyImage = ({ imageUrl, alt }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-40 h-40 bg-gray-200 animate-pulse">
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.currentTarget.src = "/fallback-image.png";
          setLoaded(true);
        }}
        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
