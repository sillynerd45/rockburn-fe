import * as linera from './dist/index.js';

// Module-level variables to persist state
let currentChainID = "empty";
let lineraInitialized = false;

// Create Signer
export async function createSigner() {
    // console.log('JS | LINERA WRAPPER | createSigner');
    try {
        if (!lineraInitialized) {
            await linera.initialize();
            lineraInitialized = true;
        }

        let signer = linera.signer.PrivateKey.createRandom();

        // Get owner (address)
        const address = signer.address();
        // console.log("JS | Owner Address | ", address);

        // Get public key
        const publicKey = await signer.getPublicKey(address);
        // console.log('JS | Public key | ', publicKey);

        // Get private key
        const privateKey = signer.wallet.privateKey;
        // console.log('JS | Private key hex | ', privateKey);

        // Get mnemonic phrase (recovery phrase)
        const mnemonic = signer.wallet.mnemonic?.phrase || '';
        // console.log('JS | Mnemonic phrase | ', mnemonic);

        // Return object with signer information
        return {
            address: address,
            publicKey: publicKey,
            privateKey: privateKey,
            mnemonic: mnemonic
        };
    } catch (e) {
        throw e;
    }
}

// Get Client and Chain
export async function getClientAndChain(faucetUrl, privateKeyHex, rockburnAppId) {
    // console.log('JS | LINERA WRAPPER | getClientAndChain');
    try {
        if (!lineraInitialized) {
            await linera.initialize();
            lineraInitialized = true;
        }

        // Create faucet client
        const faucet = new linera.Faucet(faucetUrl);

        // Create wallet
        const wallet = await faucet.createWallet();

        // Load signer
        const signer = new linera.signer.PrivateKey(privateKeyHex);
        const ownerAddress = signer.address();
        // console.log("JS | Owner Address | ", ownerAddress);

        // Claim a chain from faucet
        const chainId = await faucet.claimChain(wallet, ownerAddress);
        // console.log("JS | Claimed Chain | ", chainId);

        // Create client
        const client = await new linera.Client(wallet, signer);

        // Connect to the claimed chain
        const chain = await client.chain(chainId);
        // console.log('JS | Chain Connected');

        // Get Rockburn Application
        const rockburn = await chain.application(rockburnAppId);
        console.log('JS | Rockburn App Ready');

        return {
            rockburn: rockburn,
            chainId: chainId,
            client: client,
            chain: chain
        };
    } catch (e) {
        throw e;
    }
}

// Query App
export async function queryApp(application, queryJson) {
    // console.log('JS | LINERA WRAPPER | Query App');
    try {
        return await application.query(queryJson);
    } catch (e) {
        throw e;
    }
}

// Mutation App
export async function mutateApp(application, mutationJson) {
    // console.log('JS | LINERA WRAPPER | Mutation App');
    try {
        return await application.query(mutationJson);
    } catch (e) {
        throw e;
    }
}

// Get Current Balance
export async function getBalance(chain) {
    // console.log('JS | LINERA WRAPPER | Get Balance');
    try {
        return await await chain.balance();
    } catch (e) {
        throw e;
    }
}

// Notification
export async function notificationListener(chain) {
    // console.log('JS | LINERA WRAPPER | Notification Listener');
    try {
        chain.onNotification(notification => {
            // console.log("JS | onNotification |\n", notification);

            let newBlock = notification.reason.NewBlock;
            if (!newBlock) return;

            window.postMessage({
                type: 'rockburn_notification',
                payload: {
                    hash: newBlock.hash,
                    height: newBlock.height
                }
            }, '*');
        });
    } catch (e) {
        throw e;
    }
}