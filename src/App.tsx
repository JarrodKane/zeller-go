import { useState } from 'react'
import Layout from './components/Layout'
import SelectRadio from './components/SelectRadio'
import Divider from './components/UI/Divider'
import Heading from './components/UI/Heading'
import Section from './components/UI/Section'
import './styles/App.css'


enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
}

const selectionList: UserRole[] = [UserRole.Admin, UserRole.Manager]

function App() {
  const [userSelection, setUserSelection] = useState(0)

  const handleSelection = (key: number) => {
    setUserSelection(key)
  }

  return (
    <Layout>
      <Divider />
      <Section>
        <Heading content='User Types' type='h2' />
        <SelectRadio selected={userSelection} list={selectionList} handleSelection={handleSelection} />
      </Section>
      <Divider />


    </Layout>
  )
}

export default App
