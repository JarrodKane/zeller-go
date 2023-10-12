import { useState } from 'react'
import Layout from './components/Layout'
import SelectRadio from './components/SelectRadio'
import Divider from './components/UI/Divider'
import Heading from './components/UI/Heading'
import Section from './components/UI/Section'
import './styles/App.css'

export enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
}

export const selectionList: UserRole[] = [UserRole.Admin, UserRole.Manager];

const isUserRole = (role: string): role is UserRole => {
  return Object.values(UserRole).includes(role as UserRole)
}

function App() {
  const [userSelection, setUserSelection] = useState<UserRole>(UserRole.Admin)

  const handleSelection = (selectedRole: string) => {
    if (isUserRole(selectedRole)) {
      setUserSelection(selectedRole);
    } else {
      console.error('Invalid user role:', selectedRole);
    }
  }



  return (
    <Layout>
      <Divider />
      <Section>
        <Heading content='User Types' type='h2' />
        <SelectRadio selected={userSelection} list={selectionList} handleSelection={handleSelection} group='roles' />
      </Section>
      <Divider />
      <Section>
        <Heading content={`${userSelection} users`} type='h2' />
      </Section>
    </Layout>
  )
}

export default App
