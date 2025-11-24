import { Button, Input } from "antd";
import ThemeProvider from "./theme";
const App = () => {
  return (
    <ThemeProvider>
      <div className='p-5 font-bold flex flex-col gap-5 w-max'>
        <h1>Hello World!</h1>
        <Button>Antd Default Button</Button>
        <Button type='primary'>Antd Primary Button</Button>
        <Input placeholder='Antd Input' />
      </div>
    </ThemeProvider>
  );
};

export default App;
