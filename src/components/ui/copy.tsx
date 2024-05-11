interface CopyProps {
    section?: string;
}

/**
 * Copy component.
 */
export const Copy = ({ section = "" }: CopyProps) => {
    return (
        <span data-testid={`copy-${section}`} className="text-sm font-semibold text-secondary">
            Автор Шараев Руслан
        </span>
    );
};
