import React from "react";

const FormComponent = () => {

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
      }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted!');
    }

    const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Coppied!');
    }

    return (
        <form
        onSubmit={(e)=>handleSubmit(e)}
      >
        <label className="formTest">
          Simple text:
          <input
            className="formInput"
            onFocus={(e)=>handleFocus(e)}
            onCopy={(e)=>handleCopy(e)}
            type="text"
            name="text"
          />
          <button
            type="submit"
          >Submit</button>
        </label>
      </form>
    )
}

export default FormComponent