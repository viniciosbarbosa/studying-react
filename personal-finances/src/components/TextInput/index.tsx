import { useId, type ChangeEvent } from "react";
import { Container, Input, Label } from "./style";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  borderRadius?: "sm" | "md";
};

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  borderRadius = "md",
}: Props) => {
  const referenceId = useId();

  return (
    <Container>
      {label && <Label htmlFor={referenceId}>{label}</Label>}
      <Input
        id={referenceId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $borderRadius={borderRadius}
      />
    </Container>
  );
};

export default TextInput;
