import './App.css';
import './scss/FileName.scss';
import ''
import './tailwind.css';
import Button from './components/Button';
import Tab from './components/Tab';

function App() {
 
  return (
    <>

    <div style={{padding:20}}>
      <Tab activeTab={1}>
        <Tab.Panel title="profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
      </Tab>
    </div>
    <div style={{padding:20}}>
      <Button text="buton örnegi" />
      <Button text="buton örnegi" variant="success"/>
      <Button text="buton örnegi" variant="danger"/>
      <Button text="buton örnegi" variant="warning"/>
    </div>

    </>
  );
}

export default App;
