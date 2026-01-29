import { useEffect, useRef, useState } from "react";

interface ProtectedImageProps {
  src: string;
  alt: string;
  watermarkText?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  watermarkText = "© Radiance by Radhika | +91 9009064426",
  className = "",
  style = {},
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [displaySrc, setDisplaySrc] = useState(src);

  useEffect(() => {
    let watermarkedBlobUrl: string | null = null;

    const createWatermarkedImage = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;

      return new Promise<string>((resolve) => {
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw original image
          ctx.drawImage(img, 0, 0);

          // Add watermarks (only for download)
          ctx.font = 'bold 40px Arial';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
          ctx.lineWidth = 3;

          // Multiple diagonal watermarks
          const watermarks = 6;
          for (let i = 0; i < watermarks; i++) {
            const x = (canvas.width / watermarks) * i + 100;
            const y = canvas.height / 2;
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 6);
            ctx.strokeText(watermarkText, 0, 0);
            ctx.fillText(watermarkText, 0, 0);
            ctx.restore();
          }

          // Corner watermark
          ctx.font = 'bold 24px Arial';
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
          ctx.fillRect(canvas.width - 380, canvas.height - 50, 370, 40);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.fillText(watermarkText, canvas.width - 375, canvas.height - 22);

          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              resolve(url);
            }
          }, 'image/png');
        };
      });
    };

    const handleContextMenu = async (e: MouseEvent) => {
      e.preventDefault();
      
      // Generate watermarked version and replace temporarily
      if (!watermarkedBlobUrl) {
        watermarkedBlobUrl = await createWatermarkedImage();
        if (watermarkedBlobUrl) {
          setDisplaySrc(watermarkedBlobUrl);
          
          // Revert back to clean image after 3 seconds
          setTimeout(() => {
            setDisplaySrc(src);
          }, 3000);
        }
      }
    };

    const handleKeyDown = async (e: KeyboardEvent) => {
      // Detect PrintScreen or screenshot shortcuts
      if (e.key === 'PrintScreen' || 
          (e.ctrlKey && e.shiftKey && e.key === 'S') ||
          (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key))) {
        
        if (!watermarkedBlobUrl) {
          watermarkedBlobUrl = await createWatermarkedImage();
          if (watermarkedBlobUrl) {
            setDisplaySrc(watermarkedBlobUrl);
            
            setTimeout(() => {
              setDisplaySrc(src);
            }, 2000);
          }
        }
      }
    };

    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener('contextmenu', handleContextMenu);
      }
      document.removeEventListener('keydown', handleKeyDown);
      if (watermarkedBlobUrl) {
        URL.revokeObjectURL(watermarkedBlobUrl);
      }
    };
  }, [src, watermarkText]);

  return (
    <img
      ref={imgRef}
      src={displaySrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        userSelect: 'none',
        WebkitUserDrag: 'none',
      } as React.CSSProperties}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default ProtectedImage;
