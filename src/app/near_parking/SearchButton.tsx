import React, { useState } from "react";
import { SearchButtonProps } from "../types";

export default function SearchButton({
                                         buttonText,
                                         options,
                                         onClick,
                                     }: SearchButtonProps) {
    const [showOptions, setShowOptions] = useState(false);
    const handleButtonClick = () => {
        setShowOptions((prevState) => !prevState);
    };
    const handleOptionClick = (option: string) => {
        onClick(option);
        setShowOptions(false);
    };
    return (
        <>
            <div className="dropdown w-96 flex justify-center items-center">
                <button
                    onClick={handleButtonClick}
                    tabIndex={0}
                    role="button"
                    className="btn m-1 w-40 hover:bg-slate-100 text-lg text-black"
                >
                    {buttonText}
                </button>
                {showOptions && (
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {options.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                className="h-9 hover:bg-main-orange hover:text-white text-center text-lg pt-1"
                            >
                                {option}
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}