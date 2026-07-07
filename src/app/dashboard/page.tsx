import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, BookOpen, Star, Zap } from 'lucide-react';
import Link from 'next/link';

const curatedContent = [
  {
    title: 'Brand Strategy Guide',
    description: 'An editorial overview of building a silent, yet powerful brand presence.',
    href: '/brand-strategy-guide',
    icon: BookOpen
  },
  {
    title: 'The Art of Visual Storytelling',
    description: 'Explore techniques in luxury marketing.',
    href: '#',
    icon: Star
  },
  {
    title: 'AI Product Naming Tool',
    description: 'Generate the perfect name for your product or brand.',
    href: '/product-namer',
    icon: Zap
  },
];

export default function DashboardPage() {
  return (
    <div className="container py-12 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-headline mb-4">Welcome to the Suite</h1>
        <p className="text-muted-foreground mb-8">
          Your application is complete. Access your curated collection of content, designed to
          inspire and inform your brand strategy.
        </p>

        <div className="space-y-6">
          {curatedContent.map((item, index) => (
            <Link href={item.href} key={index}>
              <Card className="hover:border-primary transition-colors duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
