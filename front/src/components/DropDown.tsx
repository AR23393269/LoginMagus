import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../interfaces/DarkMode";

const DropDown = ({ options, onSelect }: { options: string[]; onSelect: (option: string) => void }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { isDarkMode } = useDarkMode();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsExpanded(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center px-3 py-2 rounded ${isDarkMode ? 'bg-gray-900' : 'bg-white border border-gray-200'}`}
                aria-expanded={isExpanded}
            >
                Opciones
                <div className="ml-2">
                    {isExpanded ? <CaretRight size={16} /> : <CaretDown size={16} />}
                </div>
            </button>

            {isExpanded && (
                <div
                    className={`${isDarkMode ? 'bg-gray-900 border-gray-950' : 'bg-white'} py-4 border rounded absolute mt-2 w-32`}
                >
                    <ul>
                        {options.map(option => (
                            <li
                                className={`p-default cursor-pointer transition-all ${
                                    option === "Eliminar"
                                        ? "hover:bg-red-500 hover:text-white"
                                        : "hover:bg-cyan-500 hover:text-white"
                                }`}
                                key={option}
                                role="menuitem"
                                onClick={() => {
                                    onSelect(option);
                                    setIsExpanded(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropDown;
