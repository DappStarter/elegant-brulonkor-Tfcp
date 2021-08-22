require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth mean exchange hockey kiwi onion tennis'; 
let testAccounts = [
"0x4e7def6556f6b92992b278533988881d2d85b2ac4669b59ead3811530e8d4a0c",
"0x3bd7f1453369dadbea4f71d06f47eecb4df12e484f2acbd7c415b300e7a5b7cb",
"0x5e1e99bca2143b3c37ab7d3c0e84f46ec27818ae8b74645e823c940df2a3208c",
"0x71e891f38b7e0d369e49939c528517f9b203c4d3694003291d0201da1fc1d1d3",
"0x5ae9cf580ee76d60d240bc9ede41a34f77d98bee64d079f6626ba4debcd87907",
"0xb44bbb19a042ed796e33d42c66c8128b0c1dc001d7dae0baa8ceac9b8cb0cb33",
"0x584bcc59be40d1286c0f8e6547b32f4af73e3771e19b6e24744fdc0af37d3727",
"0x538abd61675c5ff8e2c0ecd8815e9eb42bbcaecdf6e7a02c4f60f140143b4511",
"0x3974ac1360a229dd3e8c149246db6f065a7ee048d8ce3f4028ee20ba82fe7f95",
"0x713770500be109b4ddcc61dcb8cd0e3f4ee6794518b98dc09d48c37de6f09257"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

