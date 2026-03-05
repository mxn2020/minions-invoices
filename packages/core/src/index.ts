/**
 * Minions Invoices SDK
 *
 * Invoice generation, payment tracking, due dates, and billing status for agency clients
 *
 * @module @minions-invoices/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Invoices.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
