'use server';

/**
 * @fileOverview Product name generator flow.
 *
 * - generateProductName - A function that generates a product name based on brand parameters.
 * - ProductNameInput - The input type for the generateProductName function.
 * - ProductNameOutput - The return type for the generateProductName function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductNameInputSchema = z.object({
  productDescription: z
    .string()
    .describe('A detailed description of the product or brand.'),
  targetAudience: z
    .string()
    .describe('The target audience for the product or brand.'),
  desiredStyle: z
    .string()
    .describe(
      'The desired style or tone for the product name (e.g., elegant, modern, playful).'
    ),
});
export type ProductNameInput = z.infer<typeof ProductNameInputSchema>;

const ProductNameOutputSchema = z.object({
  productName: z
    .string()
    .describe('A creative and suitable name for the product or brand.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the generated product name.'),
});
export type ProductNameOutput = z.infer<typeof ProductNameOutputSchema>;

export async function generateProductName(
  input: ProductNameInput
): Promise<ProductNameOutput> {
  return productNameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productNamePrompt',
  input: {schema: ProductNameInputSchema},
  output: {schema: ProductNameOutputSchema},
  prompt: `You are a creative branding expert specializing in generating product and brand names.

  Based on the following parameters, generate a suitable name for the product or brand.

  Product Description: {{{productDescription}}}
  Target Audience: {{{targetAudience}}}
  Desired Style: {{{desiredStyle}}}

  Consider the target audience and desired style when generating the name.
  Also provide a brief reasoning for why the generated name is suitable.
  `,
});

const productNameFlow = ai.defineFlow(
  {
    name: 'productNameFlow',
    inputSchema: ProductNameInputSchema,
    outputSchema: ProductNameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
