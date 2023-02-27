/**
 * @jest-environment jsdom
 */

import mealsCounter from '../src/Modules/mealCounte.js';

describe('Counters', () => {
  it('Comments counters', () => {
    document.body.innerHTML = '<div id="meal-item" class="meal-item">meals (2)</div>';
    const count = document.querySelectorAll('.meal-item');
    expect(mealsCounter(count)).toBe(1);
  });
});
