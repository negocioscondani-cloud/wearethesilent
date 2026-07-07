'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import {
  generateProductNameAction,
  type FormState,
} from '@/app/product-namer/actions';

const formSchema = z.object({
  productDescription: z.string().min(10, {
    message: 'Please provide a more detailed description (at least 10 characters).',
  }),
  targetAudience: z.string().min(3, {
    message: 'Target audience must be at least 3 characters.',
  }),
  desiredStyle: z.string().min(3, {
    message: 'Desired style must be at least 3 characters.',
  }),
});

export function ProductNameForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    result: null,
    error: null,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productDescription: '',
      targetAudience: '',
      desiredStyle: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFormState({ status: 'loading', result: null, error: null });
    const result = await generateProductNameAction(values);
    setFormState(result);
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            Brand Parameters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="productDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A line of sustainable, minimalist skincare products made from natural ingredients."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Eco-conscious millennials, skincare enthusiasts"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Style / Tone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Elegant, modern, playful"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={formState.status === 'loading'} className="w-full">
                {formState.status === 'loading' ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Generate Name
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {formState.status === 'success' && formState.result && (
        <Card className="mt-8 animate-in fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Generated Name & Rationale
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-3xl font-headline text-primary">{formState.result.productName}</h3>
            <p className="text-muted-foreground">{formState.result.reasoning}</p>
          </CardContent>
        </Card>
      )}

      {formState.status === 'error' && (
        <Card className="mt-8 border-destructive">
            <CardHeader>
                <CardTitle className="font-headline text-destructive text-2xl">Error</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{formState.error}</p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
