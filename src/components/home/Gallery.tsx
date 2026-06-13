import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Camera } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

// Each image appears ONCE — alt is purely for accessibility, label shows on hover only
const images = [
  {
    src: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=1200',
    label: 'Store Front',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    height: 'h-[320px] md:h-full',
  },
  {
    src: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800',
    label: 'Store Interior',
    colSpan: '',
    rowSpan: '',
    height: 'h-[200px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    label: 'Fresh Vegetables',
    colSpan: '',
    rowSpan: '',
    height: 'h-[200px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800',
    label: 'Fresh Fruits',
    colSpan: '',
    rowSpan: '',
    height: 'h-[200px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&q=80&w=1200',
    label: 'Happy Customers',
    colSpan: 'md:col-span-2',
    rowSpan: '',
    height: 'h-[200px]',
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState<{ src: string; label: string } | null>(null);

  return (
    <section id="gallery" className="py-28 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">

        <SectionHeader
          badge="Photo Gallery"
          heading={<>Inside <span className="text-gradient">Akila Store</span></>}
          description="A peek at our welcoming store, fresh produce aisles, and the community we serve daily."
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[200px_200px]">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => setSelected(img)}
              aria-label={`View ${img.label}`}
              className={`relative overflow-hidden rounded-2xl group
                          cursor-zoom-in text-left
                          ${img.colSpan} ${img.rowSpan} ${img.height}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover overlay — shows label ONCE */}
              <div className="absolute inset-0
                              bg-gradient-to-t from-black/70 via-black/20 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              flex flex-col items-center justify-center gap-2">
                <ZoomIn className="text-white w-9 h-9 drop-shadow-lg
                                   translate-y-2 group-hover:translate-y-0
                                   transition-transform duration-300" />
                <span className="text-white font-display font-semibold text-sm tracking-wide
                                 translate-y-2 group-hover:translate-y-0
                                 transition-transform duration-300 delay-75">
                  {img.label}
                </span>
              </div>

              {/* Camera icon badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full
                              bg-black/40 backdrop-blur-sm flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={14} className="text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/96 backdrop-blur-xl
                       flex flex-col items-center justify-center p-6 gap-4"
            onClick={() => setSelected(null)}
          >
            <button
              aria-label="Close lightbox"
              className="absolute top-5 right-5 p-2.5 rounded-full
                         bg-white/10 text-white/70 hover:text-white
                         hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={24} />
            </button>

            <motion.img
              key={selected.src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              src={selected.src}
              alt={selected.label}
              className="max-w-full max-h-[82vh] rounded-2xl shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            />

            {/* Caption below image — label shown here not twice in grid */}
            <p className="text-white/70 text-sm font-medium tracking-wide">
              {selected.label}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
