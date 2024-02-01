'use client';

import React, { ChangeEvent, useState, MouseEvent } from 'react';

interface Props {
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
    setSearch: (search: string) => void;
};

const SearchBar: React.FC<Props> = ({ search, handleChange, handleClick, setSearch }: Props): JSX.Element => {

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>Search</button>
        </div>
    );
};

export default SearchBar;
