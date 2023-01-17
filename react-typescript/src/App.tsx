import React from 'react';
import Counter from './classComponent';
import FormComponent from './formComponent'
import FormWitElements from './formWithElements'
import SimplePortal from './simplePortal'
import ContextComponent from './contextComponent'
type TitleProps = {
  title: string,
  test?: string,
  test2: number
}

const Title = ({title, test = 'test', test2 = 2}: TitleProps) => <h1>{title} {test} {test2}</h1>;

const App = () => 
  <>
  <Title title="test" test2={2}/>
  <Counter title={'Class Component Test'} />
  <FormComponent />
  <FormWitElements />
  <SimplePortal/>
  <ContextComponent />
  </>

export default App;
