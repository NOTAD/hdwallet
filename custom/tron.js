const crypto = require('crypto');
const bip39 =require('bip39');
const bip32 =require('bip32');
const TronWeb =require('tronweb');
const pbkdf2 =require('pbkdf2');
const aesjs =require("aes-js");
const { isAddressValid,pkToAddress } =require("@tronscan/client/src/utils/crypto");
const {utils} =require('ethers');

const Utils = {
    

    async generateAccountsWithMnemonic(mnemonic, index=5) {
        try{
            if(this.validateMnemonic(mnemonic)==false){
                throw new Error("Invalid mnemonic seed provided")
            }
        const seed = await bip39.mnemonicToSeed(mnemonic);
        const node = await bip32.fromSeed(seed);
        const addresses=[];
        for(let i=0;i<index;i++){
        const child = await node.derivePath(`m/44'/195'/${ i }'/0/0`);
        const privateKey = await child.privateKey.toString('hex');
        const address = await TronWeb.address.fromPrivateKey(privateKey);
        let addressDetails={
            privateKey,
            address
        };
        addresses.push(addressDetails);
        }
        return addresses;
    }
    catch(error){
        throw error;
    }   
    },

    async getAccountAtIndex(mnemonic, index = 0) {
        try{
        if(this.validateMnemonic(mnemonic)==false){

            throw new Error("Invalid mnemonic seed provided")
        }
        const seed = await bip39.mnemonicToSeed(mnemonic);
        const node = await bip32.fromSeed(seed);
        const child = await node.derivePath(`m/44'/195'/${ index }'/0/0`);
        const privateKey = await child.privateKey.toString('hex');
        const address = await TronWeb.address.fromPrivateKey(privateKey);
        return {
            privateKey,
            address
        };
    }
    catch(error){
        throw error;
    }
    }
};
module.exports=Custom
