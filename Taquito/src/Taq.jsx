import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';
import { InMemorySigner } from '@taquito/signer';

const Taq = () => {

    const [Counter, setCounter] = useState(0);

    const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com/');

    const getContract = async () => {
        const contract = await Tezos.wallet.at('KT1HUyN2hVkLAPnzz3B322oy76RTD2bZ27NN');
        const counter = await contract.storage();
        setCounter(Number(counter));
        console.log(`The Counter Storage is : ${counter}`);
    }

    getContract();

    const IncrementButton = async () => {

        Tezos.setProvider({signer: new InMemorySigner('edsk4K6ZLFxSZo1GDVjA7tJvBnx6s4hd8uZeitTzVGmW3cbB9gKKMQ')})

        const amount = 100;
        const address = 'tz1hkcH6eiUu5eNrUo3S38sni1YmXRxbC34H';

        console.log(`Transfering ${amount} ꜩ to ${address}...`);
        Tezos.contract
            .transfer({ to: address, amount: amount })
            .then((op) => {
                console.log(`Waiting for ${op.hash} to be confirmed...`);
                return op.confirmation(1).then(() => op.hash);
            })
            .then((hash) =>  console.log(`Operation injected: https://ghost.tzstats.com/${hash}`))
            .catch((error) =>  console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }

    return (
        <div style={{ width: 'fit-content', margin: 'auto', display: 'block', fontSize: '2.3rem' }}>

            <p style={{ width: 'fit-content', margin: 'auto', display: 'block', fontSize: '2.3rem' }}>Tezos Increment</p>

            <p>Number :{Counter}</p>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: "30px" }}>
                <button onClick={IncrementButton}>Increment</button>
                <button>Decrement</button>
            </div>
        </div>
    )
}

export default Taq