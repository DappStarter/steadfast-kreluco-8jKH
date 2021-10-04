require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn pulp include clock bubble shoot'; 
let testAccounts = [
"0x5110bbe6a43d8e022f411aedd960fda54fe935256a54313a6c32362ac596d85c",
"0xed018ae65606afab48b7cb79cb4e6cc81534486e65bb351d74f6067194643b1a",
"0xae8b0874933cf2ed50a8db03e384799df5f31a2eb967c33af82abfb616f38203",
"0x68c85f44a69b5c783cf67a4d63035c158bd1d56db8b4ef01dc648507a886d154",
"0x38546efd25f6602215974ab889ee8411097f06bfed97722083965468442e35e4",
"0x727a5a9cac7c3786462e6514afce42f94905dcbae7cf391f709fa36a51a6b670",
"0xea3063f4ffb2d73f270665564c018ccb9ca9624eb296a0334304cacd6eb71a12",
"0x90eafe2c804ab4f5bc129066143f7316bbeb39e2f09e06b8bbe428de40bbe56d",
"0x22e098849a90866442a581055ced20ea0baabce7a2c1c954e43bfa500bd370d6",
"0x050cc2e161a42841d707f39c9c75c4bf56741e07207cfd09073967daeeb3b491"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

