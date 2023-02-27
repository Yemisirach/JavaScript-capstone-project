/**
 * @jest-environment jsdom
 */

import commentsCounter from '../src/Modules/commentCount.js';

describe('Counters', () => {
  it('Comments counters', () => {
    document.body.innerHTML = `<div class="left">
  <p class="eachScore">
    2022-09-09
    <span>Nganje:</span>
  </p>
  <span>
    <p class="numberSc">Great</p>
  </span>
</div>`;
    const count = document.querySelectorAll('.left');
    expect(commentsCounter(count)).toBe(0);
  });
});
