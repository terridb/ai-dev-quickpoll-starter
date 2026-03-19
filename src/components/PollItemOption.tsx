type PollItemOptionProps = {
    option: string,
    onClick?: (option: string) => void
}

function PollItemOption({option, onClick}: PollItemOptionProps) {
    return (
        <li className="px-4 py-2 bg-gray-100 rounded-full"
            key={option}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick(option);
            }}
        >
            {option}
        </li>
    );
}

export default PollItemOption;