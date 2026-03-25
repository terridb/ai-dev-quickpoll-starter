type PollItemOptionProps = {
    option: string,
    onClick?: (option: string, index:number) => void,
    index: number
}

function PollItemOption({option, onClick, index}: PollItemOptionProps) {
    return (
        <li className="px-4 py-2 bg-gray-100 rounded-full"
            key={option}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onClick) {
                    onClick(option, index);
                }
            }}
        >
            {option}
        </li>
    );
}

export default PollItemOption;