import { useEffect, useState } from 'react'
import type { UserData } from './api/helpers/fetchData'
import { fetchZellaData } from './api/helpers/fetchData'
import Layout from './components/Layout'
import SelectRadio from './components/SelectRadio'
import Divider from './components/UI/Divider'
import Heading from './components/UI/Heading'
import Section from './components/UI/Section'
import User from './components/User'
import './styles/App.css'

enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
}


const selectionList: UserRole[] = [UserRole.Admin, UserRole.Manager];

const isUserRole = (role: string): role is UserRole => {
  return Object.values(UserRole).includes(role as UserRole)
}

function App() {
  const [userSelection, setUserSelection] = useState<UserRole>(UserRole.Admin)
  const [userList, setUserList] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchZellaData()
        if (data) {
          setUserList(data)
        } else {
          setUserList([]);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData()
  }, [])

  const handleSelection = (selectedRole: string) => {
    if (isUserRole(selectedRole)) {
      setUserSelection(selectedRole);
    } else {
      console.error('Invalid user role:', selectedRole);
    }
  }

  const filteredUserList = userList?.filter((user) => user?.role === userSelection.toUpperCase());


  return (
    <Layout>
      <Divider />
      <Section>
        <Heading content='User Types' type='h2' />
        <SelectRadio selected={userSelection} list={selectionList} handleSelection={handleSelection} group='roles' />
      </Section>
      <Divider />
      <Section gap='medium'>
        <Heading content={`${userSelection} users`} type='h2' />
        {isLoading && <p>Loading users...</p>}
        {!isLoading && (
          filteredUserList.map((user) => (
            <User {...user} key={user.id} />
          ))
        )}
      </Section>
      <Divider />
    </Layout>
  )
}

export default App
