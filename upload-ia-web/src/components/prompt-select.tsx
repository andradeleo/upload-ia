import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

interface PromptSelectProps {
	onPromptSelected: (template: string) => void;
}

export function PromptSelect({ onPromptSelected }: PromptSelectProps) {
	return (
		<Select onValueChange={(value) => onPromptSelected(value)}>
			<SelectTrigger>
				<SelectValue placeholder="Selecione um prompt" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="título">Título YouTube</SelectItem>
				<SelectItem value="descrição">Descrição YouTube</SelectItem>
			</SelectContent>
		</Select>
	);
}
