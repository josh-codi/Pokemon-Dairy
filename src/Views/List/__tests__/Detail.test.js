import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Detail from '../Detail';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('Detail component', () => {
    test('renders tab navigation and switches tabs', async () => { // Added 'async' to test function signature
        const pokemon = { 
            img: 'img.png',
            name: 'Bulbasaur',
            id: 1,
            about: {
                height: '1.7m',
                weight: '90.5kg',
                abilities: ['Blaze', 'Solar Power']
            },
            stats: {
                HP: 78,
                attack: 84,
                defense: 78,
                special_attack: 109,
                special_defense: 85,
                speed: 100,
            }
        };

        render(
            <BrowserRouter>
                <Detail pokemon={pokemon} />
            </BrowserRouter>
        );

        // Check if the default tabs are visible as About, Stats, and Similar
        // expect(screen.getByText('About')).toBeInTheDocument(); 
        expect(screen.getByText('Stats')).toBeInTheDocument(); // Uncommented this line
        expect(screen.getByText('Similar')).toBeInTheDocument(); // Uncommented this line

        // When switching to the 'Stats' tab
        act(()=>{
            userEvent.click(screen.getByText('Stats'));
            screen.findByText('Stats', { class: 'bg-white' });
            
        })

        // Switch to 'Similar' tab
        act(()=>{
            userEvent.click(screen.getByText('Similar'));
            screen.findByText('Similar', {class: 'bg-white'})
            expect(screen.getByText('Similar')).toHaveClass('bg-white');
        })
    });
});
