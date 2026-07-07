'use server';

import {
  generateProductName,
  type ProductNameInput,
  type ProductNameOutput,
} from '@/ai/flows/product-name-generator';

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  result: ProductNameOutput | null;
  error: string | null;
}

export async function generateProductNameAction(
  input: ProductNameInput
): Promise<FormState> {
  try {
    const result = await generateProductName(input);
    return {
      status: 'success',
      result: result,
      error: null,
    };
  } catch (error) {
    console.error('Error generating product name:', error);
    return {
      status: 'error',
      result: null,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
