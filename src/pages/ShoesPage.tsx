// Shoes catalog page — Main-Shoes export plus the Floating Search & Filters
// companion. Filter state (search text, categories, gender, best-seller)
// lives here as page variables — exactly how the published page shares them
// between the grid and the floating pill — and flows into both components
// as controlled props with change handlers.
import { useCallback, useState } from 'react';
import MainShoes from '../framer/MainShoes.js';
import FloatingSearch from '../framer/FloatingSearch.js';
import ResponsiveWrapper from '../framer/utils/ResponsiveWrapper';
import PageEffects from './PageEffects';
import './pages.css';

export default function ShoesPage() {
  // undefined = filter not active (queries treat null/empty as "all")
  const [productTitle, setProductTitle] = useState<string | undefined>(undefined);
  const [categories, setCategories] = useState<unknown>(undefined);
  const [bestSeller, setBestSeller] = useState<boolean | undefined>(undefined);
  const [gender, setGender] = useState<unknown>(undefined);

  const reset = useCallback(() => {
    setProductTitle(undefined);
    setCategories(undefined);
    setBestSeller(undefined);
    setGender(undefined);
  }, []);

  return (
    <>
      <ResponsiveWrapper
        Component={MainShoes}
        variants={{ base: 'Phone', md: 'Tablet', lg: 'Desktop' }}
        XyXJmcDiZ={productTitle}
        onXyXJmcDiZChange={setProductTitle}
        uHKJQq5TZ={categories}
        onuHKJQq5TZChange={setCategories}
        YS4w4ld0g={bestSeller}
        onYS4w4ld0gChange={setBestSeller}
        r5V6HHb8k={gender}
        onr5V6HHb8kChange={setGender}
        J2ObfK78U={reset}
        style={{ width: '100%', minHeight: '100vh' }}
      />
      {/* Published page: z-index:10; position:fixed; bottom:40px; centered */}
      <div className="floating-search-slot">
        <FloatingSearch
          NnDXoDUnx={productTitle}
          onNnDXoDUnxChange={setProductTitle}
          PPUs8twVg={categories}
          onPPUs8twVgChange={setCategories}
          udm9VeqFi={bestSeller}
          onudm9VeqFiChange={setBestSeller}
          cMjQL3FyO={gender}
          oncMjQL3FyOChange={setGender}
          OpuIHcazg={reset}
        />
      </div>
      <PageEffects />
    </>
  );
}
