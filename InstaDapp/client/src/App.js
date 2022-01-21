import React, { useState, useEffect } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import InstaDapp from './contracts/InstaDapp.json';
import getWeb3 from './getWeb3';
import { HomeWrapper } from './pages/home/Home';
import './App.css';

export default function App() {

  useEffect(() => {
    document.title = "InstaDapp";
  }, [])

  const [dependencies, setDependencies] = useState({ web3: null, account: null, instaDapp: null, loaded: false });

  useEffect(() => {
    (async function() {
      const web3 = await getWeb3();
      const networkId = await web3.eth.net.getId();
      const networkData = await InstaDapp.networks[networkId];
      const instaDapp = new web3.eth.Contract(InstaDapp.abi, networkData.address);
      const [account] = await web3.eth.getAccounts();
      setDependencies(previousState => ({ ...previousState, web3, account, loaded: true, instaDapp}));
    })();
  }, []);

  async function connect() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const { web3 } = dependencies;
    const [account] = await web3.eth.getAccounts();
    setDependencies(previousState => ({...previousState, account}));
  }

  return (
    dependencies.loaded ?
      dependencies.account ?
        <HomeWrapper account={dependencies.account} instaDapp={dependencies.instaDapp}/> :
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Container>
              <Typography component="h1" variant="h2" align="center" color="text.primary">InstaDapp</Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Upload images to the blockchain instantly!
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={1} justifyContent="center">
                <Button variant="contained" onClick={connect}>Connect to MetaMask</Button>
                <Button variant="outlined" href={"https://metamask.io/"}>Crate MetaMask wallet</Button>
              </Stack>
            </Container>
          </div>:
            <p>loading....</p>
  )
}