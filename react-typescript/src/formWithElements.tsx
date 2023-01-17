import React , {useState} from 'react';

type SomePosition = {
    id:string,
    value:string,
    title:string
}
const POSITIONS:SomePosition[] = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  }
];
interface ShowData {
    name:string,
    text:string,
    position:string
}
const DEFAULT_SELECT_VALUE:string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' };

const FormWitElements = ()=> {
  
  const [inputText,setInputText] = useState('');
  const [textareaText, setTextareaText] = useState('')
  const [selectText,setSelectText] = useState(DEFAULT_SELECT_VALUE)
  const [showData,setShowData] = useState<ShowData>({
    name: '',
    text: '',
    position: '',
  })
  
  const rootRef = React.createRef<HTMLSelectElement>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void=> {
    const { target: { value: inputText } } = e;
    setInputText(inputText)
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { target: { value: textareaText } } = e;
    setTextareaText(textareaText)
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target: { value: selectText } } = e;
    setSelectText(selectText)
  };

  const handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    
    setInputText('')
    setTextareaText('')
    setSelectText(DEFAULT_SELECT_VALUE)
    setShowData({
        name: inputText,
        text: textareaText,
        position: selectText,
    })
  };
  
    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={(e)=>handleInputChange(e)}
            />
          </label>

          <label style={styles}>
            Text:
            <textarea
              value={textareaText}
              onChange={(e)=>handleTextareaChange(e)}
            />
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={(e)=>handleSelectChange(e)}
            ref={rootRef}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option
                key={id}
                value={value}
              >{title}</option>
            ))}
          </select>

          <button onClick={(e)=>handleShow(e)}>Show Data</button>
        </form>

        <h2>{showData.name}</h2>
        <h3>{showData.text}</h3>
        <h3>{showData.position}</h3>
      </>
    );
}

export default FormWitElements;