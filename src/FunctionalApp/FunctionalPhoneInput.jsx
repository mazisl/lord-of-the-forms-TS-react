import { useRef } from "react";
import { isNumberKey } from "../utils/validations";

export const PhoneInput = ({phoneInputState, handlePhoneInputState}) => {
  
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const createOnChangeHandler = (index) => (e) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = refs[index + 1];
    const prevRef = refs[index - 1];
    const inputValue = e.target.value;
    
    const shouldGoToNextRef = currentMaxLength === inputValue.length && nextRef;

    const shouldGoToPrevRef = inputValue.length === 0 && prevRef;

    const newState = phoneInputState.map((phoneInput, phoneInputIndex) => {
      return index === phoneInputIndex ? inputValue : phoneInput
    })

    if (shouldGoToNextRef) {
      nextRef.current?.focus();
    }

    if (shouldGoToPrevRef) {
      prevRef.current?.focus();
    }

    if (inputValue.length <= currentMaxLength) {
      handlePhoneInputState(newState)
    }    
  }

  return (
    <div className="input-wrap">
      <label htmlFor="phone">Phone:</label>
      <div id="phone-input-wrap">
        <input
          id="phone-input-1"
          value={phoneInputState[0]}
          onChange={createOnChangeHandler(0)}
          onKeyPress={(e) => isNumberKey(e)}
          ref={refs[0]}
          type="text"
          placeholder='55'
        />
        -
        <input
          id="phone-input-2"
          value={phoneInputState[1]}
          onChange={createOnChangeHandler(1)}
          onKeyPress={(e) => isNumberKey(e)}
          ref={refs[1]}
          type="text"
          placeholder='55'
        />
        -
        <input
          id="phone-input-3"
          value={phoneInputState[2]}
          onChange={createOnChangeHandler(2)}
          onKeyPress={(e) => isNumberKey(e)}
          ref={refs[2]}
          type="text"
          placeholder='55'
        />
        -
        <input
          id="phone-input-4"
          value={phoneInputState[3]}
          onChange={createOnChangeHandler(3)}
          onKeyPress={(e) => isNumberKey(e)}
          ref={refs[3]}
          type="text"
          placeholder='5'
        />
      </div>      
      
    </div>    
  )
}