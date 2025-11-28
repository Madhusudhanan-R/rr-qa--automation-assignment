import { expect } from '@playwright/test';

export const assert = {
  textContains: async (actual: string, expected: string) => {
    expect(actual).toContain(expected);
  },
  statusOk: async (status: number) => {
    expect(status).toBeGreaterThanOrEqual(200);
    expect(status).toBeLessThan(300);
  }
};
