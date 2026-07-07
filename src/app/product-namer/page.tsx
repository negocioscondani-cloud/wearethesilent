import { ProductNameForm } from '@/components/product-namer/product-name-form';

export default function ProductNamerPage() {
  return (
    <div className="container py-12 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline tracking-tight">
            AI Product Naming Tool
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Describe your product or brand, and let our AI branding expert suggest the perfect name.
          </p>
        </div>
        <ProductNameForm />
      </div>
    </div>
  );
}
