import React, { useState } from 'react'
import Layout from '../components/Layout'
import styles from './index.module.scss'
import axios from 'axios'

type HomeProps = {
  title?: string;
}

const Home = ({}: HomeProps) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [postcode, setPostcode] = useState('')
  const [mobile, setMobile] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post('https://ch-common-functions.azurewebsites.net/api/devtest', {
        code: 'Ewg6_uNwa0DNMhi4OtY5RdyN2EwK5NRPX34QXoGpZZM1AzFusxP7gg==',
        email,
        firstName,
        lastName,
        postcode,
        mobile,
        dateOfBirth
      })
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Layout
      title={''} 
    >
      <div className={styles.main}>
        <h1 className={styles.header}>1House Dev Task</h1>
        <form className={styles.formArea} action="" method="post">
          <div className={styles.details}>
            <label>Email: </label>
            <input 
              className={styles.inputField}
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.details}>
            <label>First Name: </label>
            <input 
              className={styles.inputField}
              type="text" 
              value={firstName}
              onChange={e => setFirstName(e.target.value.replace(/[^a-z]/gi, ''))} 
            />
          </div>
          <div className={styles.details}>
            <label>Last Name: </label>
            <input 
              className={styles.inputField}
              type="text" 
              value={lastName} 
              onChange={e => setLastName(e.target.value.replace(/[^a-z]/gi, ''))} 
            />
          </div>
          <div className={styles.details}>
            <label>Postcode: </label>
            <input 
              className={styles.inputField}
              type="number" 
              value={postcode} 
              onChange={e => e.target.value.length < 5 && setPostcode(e.target.value)}
            />
          </div>
          <div className={styles.details}>
            <label>Mobile: </label>
            <input 
              className={styles.inputField}
              type="number" 
              value={mobile} 
              onChange={e => e.target.value.length < 11 && setMobile(e.target.value)}
            />
          </div>
          <div className={styles.details}>
            <label>Date of Birth: </label>
            <input 
              className={styles.inputField}
              type="date" 
              value={dateOfBirth} 
              onChange={e => setDateOfBirth(e.target.value)} 
            />
          </div>
          <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </Layout>
  )
}

export default Home;
