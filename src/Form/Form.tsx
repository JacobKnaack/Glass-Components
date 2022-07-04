import { SyntheticEvent } from "react";
import { Surface } from '../Surface';
import { FormHeading } from "./FormHeading/FormHeading";
import { FormButton } from "./FormButton/FormButton";
import { FormInput } from "./FormInput/FormInput";
import './Form.css';

export function Form() {

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
  }

  return (
    <Surface>
      <form id="glass-form" onSubmit={handleSubmit}>
        <FormHeading>Here is the Heading</FormHeading>
        <FormInput label="label text" placeholder="placeholder text" />
        <FormButton title="Click Me" />
      </form>
    </Surface>
  )
}
