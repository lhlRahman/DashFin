'use client';

import React, { ChangeEvent, useState, MouseEvent } from 'react';

type Props = {};

const SearchBar: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>('');

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>Search</button>
        </div>
    );
};

export default SearchBar;
