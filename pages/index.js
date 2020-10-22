import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Box, Text, Input, InputGroup, InputLeftAddon, Icon, Button, Link } from '@chakra-ui/core';
import CustomInput from '../components/CustomInput'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ML Haiti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box mb="4">
          <Text fontSize="3xl">ML HAITI</Text>
        </Box>
        <Box p="6" borderWidth="1px" rounded="md" my="3">
          <Text fontSize="2xl" mb="2">Login to your account</Text>
          <CustomInput name="email" type="text" label="Email address" size="24px" color="gray.300" inputSize="md" />
          <CustomInput name="lock" type="password" label="Password" size="24px" color="gray.300" inputSize="md" />
          <Button size="lg" width="100%" variant="solid">Login</Button>
          <Box d="flex" alignItems="center" justifyContent="center" mt="6">forget your password ? <Link href="/register">sign up</Link> </Box>
        </Box>        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
