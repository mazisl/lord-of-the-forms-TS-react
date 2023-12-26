import { ChangeEventHandler, Dispatch, SetStateAction, useRef } from "react";

//TS tuple imported for phoneInputState
import { PhoneInputState } from "./FunctionalForm";

interface PhoneInputProps {
  phoneInputState: PhoneInputState;
  handlePhoneInputState: Dispatch<SetStateAction<PhoneInputState>>;
}

export const PhoneInput = ({ phoneInputState, handlePhoneInputState }: PhoneInputProps) => {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const createOnChangeHandler = (index: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> => (e: React.FormEvent<HTMLInputElement>) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = refs[index + 1];
    const prevRef = refs[index - 1];
    const inputValue = e.currentTarget.value;

    const shouldGoToNextRef = currentMaxLength === inputValue.length && nextRef;

    const shouldGoToPrevRef = inputValue.length === 0 && prevRef;

    const newState = phoneInputState.map((phoneInput, phoneInputIndex): string => {
      return index === phoneInputIndex ? inputValue : phoneInput;
    }) as PhoneInputState;

    if (shouldGoToNextRef) {
      nextRef.current?.focus();
    }

    if (shouldGoToPrevRef) {
      prevRef.current?.focus();
    }

    if (
      [..."abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-[]{};:\"<,.>?/|\\'"].some(
        (letter) => newState.includes(letter)
      )
    ) {
      return;
    }

    if (inputValue.length <= currentMaxLength) {
      handlePhoneInputState(newState);
    }
  };

  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <input
          id="phone-input-1"
          value={phoneInputState[0]}
          onChange={createOnChangeHandler(0)}
          ref={refs[0]}
          type="text"
          placeholder="55"
        />
        -
        <input
          id="phone-input-2"
          value={phoneInputState[1]}
          onChange={createOnChangeHandler(1)}
          ref={refs[1]}
          type="text"
          placeholder="55"
        />
        -
        <input
          id="phone-input-3"
          value={phoneInputState[2]}
          onChange={createOnChangeHandler(2)}
          ref={refs[2]}
          type="text"
          placeholder="55"
        />
        -
        <input
          id="phone-input-4"
          value={phoneInputState[3]}
          onChange={createOnChangeHandler(3)}
          ref={refs[3]}
          type="text"
          placeholder="5"
        />
      </div>
    </div>
  );
};
