import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '/Users/a1.618/Dropbox/ucla_bootcamp/projects/photo-port/src/components/Nav/index.js';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
})