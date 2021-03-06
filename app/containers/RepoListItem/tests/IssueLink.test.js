import React from 'react';
import { render } from '@testing-library/react';
import 'linaria-jest';

import IssueLink from '../IssueLink';

describe('<IssueLink />', () => {
  it('should have a className attribute', () => {
    const { container } = render(<IssueLink />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<IssueLink id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<IssueLink attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
