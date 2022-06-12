import type { NextPage } from 'next'

import Profile from '../src/components/Profile'

const Home: NextPage = () => {
  return (
    <>
      <h2>Home</h2>

      <Profile
        name='sukemaru'
        age={24}
        like="Travel" />
    </>
  )
}

export default Home
